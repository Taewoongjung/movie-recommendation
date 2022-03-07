import React, {useCallback} from 'react';
import { CenteredDiv, Box, UserIdPw, Button, ForGet } from './style';
import axios from "axios";

const Login = () => {
    const submit = useCallback((e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:2020/api/users/login',
            )
            .then()
            .catch()
    }, []);

    console.log("Login, submit = ", submit);

    return (
        <CenteredDiv>
            <form onSubmit={submit}>
                <Box>
                    <h1>Login Form</h1>
                    <UserIdPw name="username" type="text" placeholder="User Name"/>
                    <UserIdPw name="password" type="password" placeholder="Password"/>
                    <a href="/main">
                        <Button type="submit">Sign In</Button>
                    </a>
                </Box>
            </form>
            <p>please be my man <ForGet href="/join">Click Here!</ForGet></p>
        </CenteredDiv>
    )
}
export default Login;