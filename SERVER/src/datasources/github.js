import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
});

class GitHubAPI {
  constructor() {}

  async getCommitsByRepo(token) {
    try {
      const response = await instance.get(
        `/repos/RlYeli02/commitHistoryAPI/commits`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      return response;
    } catch (e) {
      return e.response;
    }
  }
}

export default GitHubAPI;
