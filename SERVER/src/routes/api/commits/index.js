import {Router} from "express";
import GitHubAPI from "../../../datasources/github.js";

const router = Router();
const commits = new GitHubAPI();


router.get("/", async(req,res)=>{
    try{
        res.send(commits.getCommitsByRepo())
    }catch(e){
       console.log("Error",e)
    }
})

export default router;