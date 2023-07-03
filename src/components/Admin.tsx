import axios from 'axios';
import '../styles/Admin.css'
import LoginForm from './LoginForm';
import { useEffect, useState } from 'react';
import Dashboard from './Dashboard';


function Admin() {
    const loginKey = localStorage.getItem('loginKey') || 'null';
    // use state to store if the user is logged in or not
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
    const [finishedLoading, setFinishedLoading] = useState<boolean>(false);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/admin/login').then((response) => {
            axios.post('http://localhost:3000/api/v1/admin/validate', {
                randomKey: loginKey,
                user_ip: response.data.ip
            }).then((response) => {
                if (response.data.validateLogin) {
                    setIsLoggedIn(true);
                    setFinishedLoading(true);
                } else {
                    setIsLoggedIn(false);
                    setFinishedLoading(true);
                }
            }).catch((error) => {
                console.log(error);
                setIsLoggedIn(false);
                setFinishedLoading(true);
            });
        });

    }, [loginKey, isLoggedIn, finishedLoading]);

    return (
        isLoggedIn && <Dashboard/> || !finishedLoading && <div className='divload'><div className="loading-circle"></div></div>|| <LoginForm />
    );
}

export default Admin;