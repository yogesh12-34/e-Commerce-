import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {  signOutAsync } from "../authSlice";
import { selectloggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";

function Logout(){
    const dispatch=useDispatch();
    const user = useSelector(selectloggedInUser)
    useEffect(()=>{
        dispatch(signOutAsync())
    })
    return(<>
          {!user &&<Navigate to="/login" replace={true}></Navigate>}
    </>)
}
export default Logout;