import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.github.com",
    headers:{
        Authorization: "token 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"
    }

})

class GitHubAPI {
    constructor(){}

    async getCommitsByRepo (){
       
        const response = await instance.get(`/repos/RlYeli02/commitHistoryAPI/commits`);
        console.log("Success: ", response.data)
        return response
    }
}

export default GitHubAPI;