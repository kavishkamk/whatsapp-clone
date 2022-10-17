import React from "react";

import ChatBox from "./ChatBox";
import ConversationProfileInfo from "./ConversationProfileInfo";
import SearchBar from "./SearchBar";
import Chat from "./Chat";

import SmileIcon from "../assets/icons/smile.png";

const ConversionComponent = () => {
    return (
        <div className="flex flex-col h-full flex-3">
            <ConversationProfileInfo

            />
            <div className="flex flex-col h-full bg-pearl-bush">
                <Chat reserved={true} />
            </div>
            <ChatBox>
                <SearchBar
                    placeholder={"Type a Message"}
                    iconImg={SmileIcon}
                />
            </ChatBox>
        </div>
    );
};

export default ConversionComponent;