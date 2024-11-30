import React from "react";

const NewsList = ({articles}) => {
    return (
        <div>
            {articles.length === 0 ? (
                <p>No articles found. Try another topic!</p>
            ) : (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id} style={{margin: "10px 0"}}>
                            <a href={article.webUrl} target="_blank" rel="noopener noreferrer">
                                {article.webTitle}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NewsList;
