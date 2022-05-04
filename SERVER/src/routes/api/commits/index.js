import { Router } from "express";
import NodeCache from "node-cache";
import GitHubAPI from "../../../datasources/github.js";

const router = Router();
const gitHub = new GitHubAPI();
const gitHubCache = new NodeCache();

router.get("/", async (req, res) => {
    try {
        const token = req.headers.authorization;

        if (gitHubCache.has('commits')) {

            const commitsFromCache = JSON.stringify(gitHubCache.get('commits'))

            res.setHeader('Content-Type', 'application/json');
            res.send(commitsFromCache)

        } else {
            const commits = await gitHub.getCommitsByRepo(token)
            const { status, data } = commits;
          
            if (status === 200) {
                gitHubCache.set('commits', data)
                res.status(200).send(data)
            }

            else {
                res.status(status).send(data)
            }

        }

    } catch (e) {

        throw new Error(e)
    }
})

export default router;