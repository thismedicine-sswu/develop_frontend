import React from "react";

const SearchBar = () => {
    return (
        <div className="header">
            <input type="text" className="iptSearch" />
            <button type="button" className="search">
                <span>검색</span>
            </button>
        </div>
    )
};

export default SearchBar;
