import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({
    children, authentication = true
}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        //TODO: simplify this logic
        if(authentication && authStatus !== authentication) {
            navigate('/login');
            // user exists but isnt logged in
        }
        else if(!authentication && authStatus !== authentication) {
            navigate('/');
            //user dosent exist , thus go to home
        }
        setLoader(false);
    },[authStatus, navigate, authentication]);
    return (
            loader ? <h1>Loading...</h1> : <>{children}</>
    )
}

export default Protected
