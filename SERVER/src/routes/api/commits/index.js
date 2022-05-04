import { Router } from "express";
import NodeCache from "node-cache";
import GitHubAPI from "../../../datasources/github.js";

const router = Router();
const gitHub = new GitHubAPI();
const gitHubCache = new NodeCache();

router.get("/", async (req, res) => {
    try {
        if (gitHubCache.has('commits')) {
            const commitsFromCache = JSON.stringify(gitHubCache.get('commits'))
            res.setHeader('Content-Type', 'application/json');
            res.send(commitsFromCache)
          
        } else {
            const commits = await gitHub.getCommitsByRepo()
            gitHubCache.set('commits',commits)
            res.send(commits)
          
        }
    } catch (e) {
        console.log("Error", e)
    }
})

export default router;