import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { auth } from './firebase';
import { Link as LinkR } from 'react-router-dom';
import { MdOutlineArrowBackIos } from "react-icons/md";

const BackButton = styled(LinkR)`
    display:inline-block;
    position: absolute;
    border-radius: 50%;
    border: 5px solid #8C2131;
    margin: 30px 0 0 30px;
    width: 50px;
    height: 50px;
    cursor: pointer;

    svg {
        display: flex;
        margin: 5px auto 0 auto;
    }

    &:hover {
        border: 5px solid #F3CD00;
    }
`

const SignInContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    label {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    input {
        width: 350px;
        height: 30px;
        margin-bottom: 20px;
        /* border-top-style: none;
        border-right-style: none;
        border-left-style: none;
        border-bottom-style: groove; */
    }
`

const ButtonsContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin: auto auto;
    max-width: 350px;
    width: 350px;
`

const FormContainer = styled.div`
    display: flex;
    width: 350px;
    flex-direction: column;
    margin: auto auto;
`

const IdContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonContainer = styled.div`
    justify-content: space-evenly;
    display: flex;

    button {
        margin: 0 0;
        align-items: center;
        width: 150px;
        height: 50px;
        background: #8C2131;
        border-style: none;
        border-radius: 15px;
        color: #fff;
        cursor: pointer;
        font-size: 15px;
        text-transform: uppercase;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #F3CD00;
        }
    }

    @media screen and (max-width: 1000px) {
        button {
            width: 150px;
        }
    }
`

const SigninPage = () => {
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");
    const [user, setUser] = useState({});

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )

            console.log("success");
        }
        catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    }

    // to get the User, callback function on currentUser, and setUser
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    return (
        <SignInContainer>
            <BackButton to="/">
                <MdOutlineArrowBackIos size='40' color='#8C2131' />
            </BackButton>
            <FormContainer>
                <IdContainer>
                    <label>ID</label>
                    <input
                        placeholder='Log-in ID'
                        onChange={(event) => {
                            setloginEmail(event.target.value);
                        }}
                    />
                </IdContainer>
                <PasswordContainer>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(event) => {
                            setloginPassword(event.target.value);
                        }}
                    />
                </PasswordContainer>
                <ButtonsContainer>
                    <ButtonContainer>
                        <button onClick={login} >
                            login
                        </button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <button onClick={logout}>
                            log out
                        </button>
                    </ButtonContainer>
                </ButtonsContainer>
                <h1>Current User</h1>
                {user?.email}
            </FormContainer>
        </SignInContainer>
    )
}

export default SigninPage;
