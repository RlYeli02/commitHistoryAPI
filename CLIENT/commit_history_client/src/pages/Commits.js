import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import ErrorPage from "../components/ErrorPage"

const CommitList = () => {
    const [commits, setCommits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getCommits = async () => {
        try {
            let response = await axios.get('http://localhost:5000/github/commits/');
            setCommits(response.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getCommits()
    }, [])

    if (loading) return "Loading..."
    if (error) {
        return (
            <ErrorPage error={error} />
        )
    }
    return (
        <div>
            <NavBar />
            <Card commits={commits}/>
        </div>
    )
}

export default CommitList;