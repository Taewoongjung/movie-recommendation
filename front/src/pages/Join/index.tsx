import React, {useCallback} from 'react';
import {useLocalStore, useObserver} from 'mobx-react';
import { CenteredDiv, Box, UserIdPw, Button } from './style';
import axios from "axios";
import {userStore} from "../../state-mobx/store";

const Join = () => {
    const state = useLocalStore(() => ({
        username: '',
        password: '',
        onChangeUserName(e: any) {
            this.username = e.target.value;
        },
        onChangePassword(e: any) {
            this.password = e.target.value;
        },
    }));

    const submit = useCallback((e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:2020/api/users/signup',
                {
                    username: state.username,
                    password: state.password
                }
            )
            .then()
            .catch()
    }, []);

    // const onLogIn = useCallback(() => {
    //     userStore.logIn({
    //
    //     })
    // })

    return useObserver(() => (
        <CenteredDiv>
            <form onSubmit={submit}>
                <Box>
                    <h1>Join Form</h1>
                    <UserIdPw name="username" type="text" placeholder="User Name" value={state.username} onChange={state.onChangeUserName}/>
                    <UserIdPw name="password" type="password" placeholder="Password" value={state.password} onChange={state.onChangePassword}/>
                    <a href="/main">
                        <Button type="submit">Join</Button>
                    </a>
                </Box>
            </form>
        </CenteredDiv>
    ));
}
export default Join;