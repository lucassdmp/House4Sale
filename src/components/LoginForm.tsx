import axios from "axios";
import { FormEvent } from "react";
import { Container } from "react-bootstrap";

function LoginForm() {
    const axiosPost = (username: string, password: string) => {
        // get user_ip from api
        axios.get('http://localhost:3000/api/v1/admin/login').then((response) => {
            axios.post('http://localhost:3000/api/v1/admin/login', {
                user_ip: response.data.ip,
                username: username,
                password: password
            }, {
                withCredentials: true // Include cookies in the request and response headers
            }).then((response) => {
                localStorage.setItem('loginKey', response.data[0].randomKey);
                window.location.reload();
            }, (error) => {
                console.log(error);
            });
        });
    }

    return (
        <Container className="formcontainer">
            {/* login form */}
            <form action="http://localhost:3000/api/v1/admin/login" method="post" onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const target = e.target as HTMLFormElement;
                const username = target.username.value;
                const password = target.password.value;
                // console.log(username, password);
                axiosPost(username, password);
            }}>
                <label>Username</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <button type="submit">Login</button>
            </form>
        </Container>
    );
}

export default LoginForm;