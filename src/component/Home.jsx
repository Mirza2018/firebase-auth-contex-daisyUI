import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthContexts';

const Home = () => {
    const values= useContext(AuthContext)
    const {user,value,lu}=values;
    console.log(values);
    
    return (
        <div>
            <h3>From Home
            </h3>
            {
                value && <p>user is: {value.displayName} and {lu.mama}</p>
            }
        </div>
    );
};

export default Home;