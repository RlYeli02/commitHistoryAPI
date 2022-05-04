import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com",
})

class GitHubAPI {
    constructor() { }

    async getCommitsByRepo() {
        try {
            const response = await instance.get(`/repos/RlYeli02/commitHistoryAPI/commits`, {
                headers: {
                    "Authorization": "token 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"
                }
            });
            
            return response
        } catch (e) {
            return e.response
        }
    }
}

export default GitHubAPI;