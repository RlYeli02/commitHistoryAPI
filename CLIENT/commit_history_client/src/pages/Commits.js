import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import NavBar from "../components/NavBar";


const CommitList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            let response = await axios.get('http://localhost:5000/github/commits/');
            setData(response.data)
            setLoading(false)
        } catch (e) {
            throw new Error("Cannot Fetch Data From Server")
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) return "Loading..."
    return (
        <>
            <NavBar />
            <div className="container" >
                <div className="commit-container">
                    <div className="commit-list">
                        {data.map(({ commit, sha }) => (
                            <Card key={sha} commit={commit} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default CommitList;