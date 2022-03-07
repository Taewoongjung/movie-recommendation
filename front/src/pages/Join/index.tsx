import React, {useCallback} from 'react';
import { CenteredDiv, Box, UserIdPw, Button } from './style';
import axios from "axios";

const Join = () => {

    const submit = useCallback((e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:2020/auth/login',
            )
            .then()
            .catch()
    }, []);

    return (
        <CenteredDiv>
            <form onSubmit={submit}>
                <Box>
                    <h1>Join Form</h1>
                    <UserIdPw name="username" type="text" placeholder="User Name"/>
                    <UserIdPw name="username" type="password" placeholder="Password"/>
                    <a href="/main">
                        <Button>Join</Button>
                    </a>
                </Box>
            </form>
        </CenteredDiv>
    )
}
export default Join;