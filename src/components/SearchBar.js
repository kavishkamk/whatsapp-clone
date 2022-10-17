import React from "react";

const SearchBar = props => {
    return (
        <div className="w-full flex bg-white rounded-2xl py-1 px-2">
            <div>
                <img src={props.iconImg} alt="search" className="w-7 opacity-40 cursor-pointer" />
            </div>
            <input
                type="search"
                className="w-full bg-white h-full rounded-2xl outline-none border-none text-base px-2 block my-auto"
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default SearchBar;