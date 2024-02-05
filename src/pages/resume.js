import { db, storage } from "./firebase";

import React from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { MdOutlineArrowBackIos, MdSettingsInputAntenna } from "react-icons/md";
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import { useState } from 'react';

const ResumeContainer = styled.div`
`

const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: auto auto;
    width: 800px;
    max-width: 80%;

    h1 {
        text-transform: uppercase;
    }

    button {
        border-radius: 15px;
        width: 200px;
        background: #8C2131;
        white-space: nowrap;
        margin-right:30px;
        border: none;
        padding: 14px 30px;
        color: #fff;
        font-size: 20px;
        outline: none;
        cursor: pointer;
        display: flex;
        text-transform: uppercase;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #F3CD00;
            color: #fff}
        }

`

const BackButton = styled(LinkR)`
    display:inline-block;
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
const ResumeList = styled.div`
    a {
        text-decoration: none;
    }
`

const Data = styled.p`
    color: black;
    text-decoration: none;

    &:visited , &:link {
        text-decoration: none;
        color: black;
    }

    &:hover {
        color: #8C2131;
    }
`

const Resume = () => {
    // Create Reference for folder that contain all the current resumes
    const storageRef = ref(storage, `/resume2023`);

    const [data, setData] = useState([]);
    const [called, setCalled] = useState("true")

    const listItem = () => {
        // Resets the elements in the "data" array, everytime the user clicks "Get Resume".
        data.length = 0;

        // List all the resume files in "./resume2023" folder
        listAll(storageRef)
            .then((res) => {
                res.items.forEach((item) => {
                    // Get download url for each file
                    getDownloadURL(ref(storage, `${item.fullPath}`))
                        .then((url) => {
                            setData(arr => [...arr, { name: item.name, url: url }]);
                        })
                })
            })
            .catch(err => {
                alert(err.message);
            })
    }

    return (
        <ResumeContainer>
            <BackButton to="/">
                <MdOutlineArrowBackIos size='40' color='#8C2131' />
            </BackButton>
            <InfoContainer>
                <h1>
                    Click the button to get all the resumes
                </h1>
                <ResumeList>
                    {
                        data.map((val) => (
                            <>
                                <hr></hr>
                                <a href={val.url} target="_blank">
                                    <Data>{val.name}</Data>
                                </a>

                            </>
                        ))
                    }
                    <hr></hr>
                </ResumeList>

                <button
                    onClick={listItem}
                >
                    Get Resume
                </button>
            </InfoContainer>
        </ResumeContainer>
    )
}

export default Resume
