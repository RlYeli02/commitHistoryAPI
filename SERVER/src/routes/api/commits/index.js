import { Router } from "express";
import NodeCache from "node-cache";
import GitHubAPI from "../../../datasources/github.js";

const router = Router();
const commits = new GitHubAPI();
const gitHubCache = new NodeCache();

router.get("/", async (req, res) => {
    try {
        if (gitHubCache.has('commits')) {
            res.send("Result: " + gitHubCache.get('commits'))
        } else {
            const commitss = await commits.getCommitsByRepo()
            gitHubCache.set('commits', commits)
            
            res.send("Result: " + commits)
        }
    } catch (e) {
        console.log("Error", e)
    }
})

export default router;