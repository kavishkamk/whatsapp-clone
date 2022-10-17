import React from "react";

const Contact = props => {
    return (
        <div className="flex border px-2.5 py-2">
            <div className="w-8 h-8 rounded-full my-auto mr-2">
                <img
                    src={props.src}
                    alt={props.alt}
                    className="rounded-full"
                />
            </div>
            <div className="w-full">
                <div className="text-sm font-bold">
                    {props.name}
                </div>
                <div className="text-xs">
                    {props.lastMessage}
                </div>
            </div>
            <div className="flex items-center">
                <div>
                    {props.timeAgo}
                </div>
            </div>
        </div>
    );
};

export default Contact;