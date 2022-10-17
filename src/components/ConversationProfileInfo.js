import React from "react";

const ConversationProfileInfo = props => {
    return (
        <div className="flex bg-gallery p-2.5 border-l-gray-500 border-l">
            <div className="mr-2">
                <img
                    className="w-8 h-8 rounded-full"
                    src={props.src}
                    alt={props.alt}
                />
            </div>
            <div className="my-auto font-bold">
                Madhushan Karunachandra
            </div>
        </div>
    );
};

export default ConversationProfileInfo;