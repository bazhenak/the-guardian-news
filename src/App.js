import React, { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";

const API_KEY = "77e40302-fc2c-43c5-a06d-3769e67a3b32";
const API_URL = "https://content.guardianapis.com/search";

const App = () => {
    const [query, setQuery] = useState("");
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchArticles = async (page = 1) => {
        try {
            const response = await axios.get(API_URL, {
                params: {
                    q: query,
                    "api-key": API_KEY,
                    page,
                },
            });
            setArticles(response.data.response.results);
            setTotalPages(response.data.response.pages);
            setCurrentPage(page);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchArticles();
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>The Guardian News</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter topic"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ padding: "10px", marginRight: "10px", width: "300px" }}
                />
                <button type="submit" style={{ padding: "10px" }}>
                    Search
                </button>
            </form>
            <NewsList articles={articles} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={fetchArticles}
            />
        </div>
    );
};

export default App;
