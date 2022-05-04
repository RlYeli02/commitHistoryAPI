import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.github.com",
})

class GitHubAPI {
    constructor(){}

    async getCommitsByRepo (token){
        const response = await instance.get(`/repos/RlYeli02/commitHistoryAPI/commits`);
        console.log("Success: ", response.data)
        return response
    }
}

export default GitHubAPI;