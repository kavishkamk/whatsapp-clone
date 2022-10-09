import React from "react";

const ProfileInfoDiv = props => {
    return (
        <div className="flex flex-row bg-gallery p-2.5">
            <img className="w-8 h-8 rounded-full" src={props.src} alt={props.alt} />
        </div>
    );
};

export default ProfileInfoDiv;