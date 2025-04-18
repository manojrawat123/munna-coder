import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const isValid = false;
    const navigate = useNavigate();

    // useEffect(()=>{
    //     if (isValid == false){
    //         navigate('/login');
    //     }
    // }, []);
    

        return (
            <Outlet />
        )
}

export default ProtectedRoute   