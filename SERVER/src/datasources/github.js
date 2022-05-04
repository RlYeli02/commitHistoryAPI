import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.github.com",
})

class GitHubAPI {
    constructor(){}

    async getCommitsByRepo (){
        const response = await instance.get(`/repos/RlYeli02/commitHistoryAPI/commits`,{
            headers:{
                "Authorization":"token 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"
            }
        });
        return response.data
    }
}

export default GitHubAPI;