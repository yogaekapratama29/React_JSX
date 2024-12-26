import { ProfileContext } from "./ProfileContext.jsx";
import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import { useState } from "react";
import ProfileForm from "./ProfileForm.jsx";

export default function ProfileApp(){
    // Context with State for different value
    const [name,setName] = useState("Yoga");
    return(
        <>
        <ProfileContext.Provider value = {name}>
        <h1>Profile App</h1>
        <ProfileForm name = {name} setName = {setName}/>
        <Profile />
        <ProfileAddress/>
        </ProfileContext.Provider>
        </>
    )
}