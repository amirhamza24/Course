import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <div className='flex justify-center'>
            <Dna
                visible={true}
                height="150"
                width="150"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    }

    if(user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;