import React from "react";

import ProfileInfoDiv from "./ProfileInfoDiv";
import SearchBar from "./SearchBar";
import Contact from "./Contact";

import ProfileImg from "../assets/images/unknownPerson.jpg";
import SearchIcon from "../assets/icons/search.png";

const ContactListComponent = () => {
    return (
        <div className="flex flex-col h-full flex-1.6 bg-porcelain">
            <ProfileInfoDiv
                src={ProfileImg}
                alt="profile picture"
            />
            <div className="bg-wild-sand p-2">
                <SearchBar
                    placeholder={"Search or start new chat"}
                    iconImg={SearchIcon}
                />
            </div>
            <div>
                <Contact
                    src={ProfileImg}
                    alt={"profile pic"}
                    name={"kavishka Madhushan"}
                    lastMessage={"kdj djf dfiojf idid fiu"}
                    timeAgo={"9.9"}
                />
            </div>
        </div>
    );
};

export default ContactListComponent;