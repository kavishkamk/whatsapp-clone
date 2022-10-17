import React from "react";

const ChatBox = props => {
    return (
        <div className="flex bg-gallery p-2 items-center">
            {props.children}
        </div>
    );
};

export default ChatBox;