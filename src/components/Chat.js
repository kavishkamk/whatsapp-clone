import React from "react";

const Chat = props => {
    return (
        <div className={`${props.reserved ? "bg-gossip" : ""} flex my-1 mx-4 max-w-1/2 w-fit`}>
            <div className=" text-mine-shaft py-2 px-3 text-sm w-fit">
                Hi
            </div>
        </div>
    );
};

export default Chat;