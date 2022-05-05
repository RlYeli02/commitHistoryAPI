import React, { useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import ErrorPage from "../components/ErrorPage"

const CommitList = () => {
    const [commits, setCommits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [token, setToken] = useState()

    const getCommits = async () => {
        try {
            setLoading(true)
            let response = await axios.get(`http://localhost:5000/github/commits/`, {
                headers: {
                    'Authorization': `token ${token}`
                }
            });
            setCommits(response.data)
            setLoading(false)

        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    const onChange = (e) => {
        const { value } = e.target;
        setToken(value)
    }


    if (loading) return "Loading..."
    if (error) {
        return (
            <ErrorPage error={error} />
        )
    }
    return (
        <div>
            <NavBar />
            <div style={{ marginLeft: "1rem" }}>
                <input style={{ width: "30rem", height: "1.5rem" }} type="text" onChange={onChange} placeholder="Enter the OAuth token given in the readmeFile.md" />
                <button style={{ fontFamily: 'Nunito', height: "1.5rem" }} onClick={getCommits}>Find Commit List</button>
            </div>
            <Card commits={commits} />
        </div>
    )
}

export default CommitList;