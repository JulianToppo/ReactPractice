import { createContext } from "react";

const UserContext= createContext({
    tokenId:"",
    setToken:(item)=>{},
    deletetoken:()=>{}
})

export default UserContext;