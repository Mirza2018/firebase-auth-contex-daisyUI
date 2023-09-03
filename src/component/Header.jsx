import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContexts';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(result=>{
                console.log(result.user);
            })
            .chatch(error=>{
                console.log(error);
            })
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-around">

                <a className="btn btn-ghost normal-case text-xl">Mirza VAI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ? <div>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut}>Sign Out</button>
                    </div>
                        :
                        <>
                            <Link to='/login'><h4>Login</h4></Link>
                        </>


                }

            </div>
        </div>
    );
};

export default Header;