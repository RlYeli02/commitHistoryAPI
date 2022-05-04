import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.github.com",
})

class GitHubAPI {
    constructor(){}

    async getCommitsByRepo (){
        const response = await instance.get(`/repos/RlYeli02/commitHistoryAPI/commits`);
        return response.data
    }
}

export default GitHubAPI;