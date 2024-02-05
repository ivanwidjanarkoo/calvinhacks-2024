import picture from "../image/computer.png"
import { db, storage } from "./firebase";

import Modal from 'react-modal';
import React, { useState } from 'react';
import { addDoc } from '@firebase/firestore';
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";
import { MdOutlineArrowBackIos } from "react-icons/md"
import { Link as LinkR } from 'react-router-dom'
import { connectStorageEmulator, getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from "styled-components";

const BackButton = styled(LinkR)`
    display:inline-block;
    border-radius: 50%;
    border: 5px solid white;
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

    @media screen and (max-width: 615px) {
        visibility: visible;
    }

    @media screen and (max-width: 800px) {
        width: 50px;
        height: 50px;
        margin: 20px 20px 0 20px;
    }
`

const LeftContainer = styled.div`
    background: #8C2131;
    height: auto;
    width: 80%;
    text-align: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 615px) {
        width: 50%;
    }
`

const ResumeContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 80%;
    max-width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: auto auto;
    color: #fff;

    /* width: 100%; */
    p {
        font-size: 15px;
    }

    input {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 615px) {
        p {
        font-size: 13px;
        margin: 0 0 5px 0;
        }
    }
`

const RightContainer = styled.div`
    width: 100%;
    height: auto;

`

const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-left: 50px;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
        width: 200px;
        margin-left: 20px;
    }
`

const SignUpContainer = styled.div`
    display: flex;
    width: 90%;
    height: auto;

    label {
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    input {
        width: 200px;
        height: 30px;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 30px;
    }

    @media screen and (max-width: 615px) {
        input {
            width: 150px;
            height: 30px;
            margin-bottom: 10px;
        }
    }
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-appearance: none;

    p {
        font-size: 14px;
    }
`

const CodeContainer = styled.div`
    display: flex;
    flex-direction:column ;
    width: 80%;

    p {
        font-size: 13px;
    }

    input {
        width: 100px ;
    }

`

const ButtonContainer = styled.div`
    margin: auto auto;
    justify-content: center;
    align-items: center;

    button {
        margin: 30px auto auto auto;
        justify-content: center;
        align-items: center;
        width: 200px;
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

    @media screen and (max-width: 800px) {
        button {
            margin: 10px;
            width: 150px;
        }
    }
`

const SignupPage = () => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [progress, setProgress] = useState(0);
    const [resume, setResume] = useState({});
    const [show, setShow] = useState(false);
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        major: "",
        allergy: "",
        shirtSize: "",
        age: "",
        school: "",
        phone: "",
        level: "",
        conduct: false,
        logistics: false,
        communication: false,
    })

    const { firstName, lastName, email, major, allergy, shirtSize, age, school, phone, level, conduct, logistics, communication } = state;

    const createUser = async () => {
        const db = getFirestore();

        // Past years participants
        // query(collectionReference, condition)
        // Goes through studentpatients collection and find a patient assigned to a specific user
        /* const users = query(collection(db, "users"), where("email", "==", email));
        const users_querySnapshot = await getDocs(users); */

        // Current year participants
        const current = query(collection(db, "2023"), where("email", "==", email));
        const current_querySnapshot = await getDocs(current);

        /* if (users_querySnapshot.empty) {
            alert("Thank you for signing up for CalvinHacks 2023!");

            // Add to users collection
            addDoc(collection(db, "users"),
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    major: major,
                    allergy: allergy,
                    shirtSize: shirtSize,
                    age: age,
                    school: school,
                    phone: phone,
                    level: level,
                    conduct: true,
                    logistics: true,
                    communication: true,
                })
        }
        else {
            alert("E-mail you have entered is already registered.")
        } */

        if (current_querySnapshot.empty) {
            // Add participant information to current year collection
            addDoc(collection(db, "2023"), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                major: major,
                allergy: allergy,
                shirtSize: shirtSize,
                age: age,
                school: school,
                phone: phone,
                level: level,
                conduct: true,
                logistics: true,
                communication: true,
            })

            alert("Thank you for signing up for CalvinHacks 2023!");

            // toast.success("Thank you for signing up for CalvinHacks 2023!", {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            // });
        }
        else {
            alert("E-mail you have entered is already registered.");
        }
    }

    async function submit(e) {
        // console.log(this.state);
        e.preventDefault();
        createUser();

        setState({
            firstName: "",
            lastName: "",
            email: "",
            major: "",
            allergy: "",
            shirtSize: "",
            resume: "",
            age: "",
            school: "",
            phone: "",
            level: "",
            conduct: false,
            logistics: false,
            communication: false,
        })
        handleShow();
    }

    const handleInput = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const resumeHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0]
        setResume(file);
        // const file = e.target.files[0];
        // resumeUpload(file)
    }

    const resumeUpload = () => {
        console.log(resume)

        // Add resume to current year storage folder
        const storageRef = ref(storage, `/resume2023/${resume.name}`);
        const uploadTask = uploadBytesResumable(storageRef, resume);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => console.log(url))
            }
        )
    };

    return (
        <SignUpContainer>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>

            <LeftContainer>
                <BackButton to="/">
                    {/* <IconContainer> */}
                    <MdOutlineArrowBackIos size='40' color='#FFF' />
                    {/* </IconContainer> */}
                </BackButton>
                <ResumeContainer>
                    <h1><b>Optional:</b></h1>
                    <p> Upload a resume for sponsors to view! Ensure your resume has a unique identifier. Only Sponsors will be able to view your resumes!</p>
                    {/* <p>Ensure your resume has a unique identifier.</p> */}
                    <p>(e.g. fName_lName_resume.pdf)</p>
                    <input
                        type="file"
                        name='resume'
                        onChange={resumeHandler}
                    />
                    <button
                        onClick={resumeUpload}
                    >
                        Submit Resume
                    </button>
                    <p>
                        Uploaded: {progress} %
                    </p>
                </ResumeContainer>
                {/* <img src={picture} alt="picture"/> */}
            </LeftContainer>
            <RightContainer>
                <InfoContainer>

                    <form className="form"
                        onSubmit={submit}
                    >
                        <h1>
                            Welcome to CalvinHacks!
                        </h1>
                        <FormContainer>
                            <label>First name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                onChange={handleInput}
                                value={firstName}
                                required
                            />
                        </FormContainer>

                        <FormContainer>
                            <label>Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder='Last name'
                                onChange={handleInput}
                                value={lastName}
                                required
                            />
                        </FormContainer>

                        <FormContainer>
                            <label>Age</label>
                            <input
                                type="number"
                                name="age"
                                placeholder='Enter your age'
                                onChange={handleInput}
                                value={age}
                                required
                            />
                        </FormContainer>

                        <FormContainer>
                            <label>Email </label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Email Address'
                                onChange={handleInput}
                                value={email}
                                required
                            />
                        </FormContainer>

                        <FormContainer>
                            <label>School</label>
                            <input
                                type="text"
                                name="school"
                                placeholder='Enter your University'
                                onChange={handleInput}
                                value={school}
                                required
                            />
                        </FormContainer>

                        <FormContainer>
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder='Enter your phone number here'
                                onChange={handleInput}
                                value={phone}
                                required
                            />
                        </FormContainer>

                        <FormContainer>
                            <label>Major(s)</label>
                            <input
                                type="text"
                                name="major"
                                placeholder='Your major(s)'
                                onChange={handleInput}
                                value={major}
                                required
                            />
                        </FormContainer>

                        <FormContainer>
                            <label>Current Level of Study</label>
                            <input
                                type="text"
                                name="level"
                                placeholder='Freshmen, Sophomore, Junior, Senior'
                                onChange={handleInput}
                                value={level}
                                required
                            />
                        </FormContainer>

                        <FormContainer>
                            <label>Allergy/Dietary Restrictions  </label>
                            <input
                                type="text"
                                name="allergy"
                                placeholder='Any allergies you have'
                                onChange={handleInput}
                                value={allergy}
                            />
                        </FormContainer>

                        {/* <FormContainer>
                            <label>Shirt Size (Adult Sizes Only)</label>
                            <input
                                type="text"
                                name="shirtSize"
                                placeholder='Your shirt size (S, M, L, XL, XXL)'
                                onChange={handleInput}
                                value={shirtSize}
                            />
                        </FormContainer> */}


                        <CodeContainer>
                            <p><b>MLH Code of Conduct:</b> "I have read and agree to the <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target="_blank">MLH Code of
                                Conduct</a>."</p>
                            <input
                                type="checkbox"
                                name="conduct"
                                placeholder='Your shirt size (S, M, L, XL, XXL)'
                                onChange={handleInput}
                                value={conduct}
                                required
                            />
                        </CodeContainer>


                        <CodeContainer>
                            <p><b>Event Logistics Information: </b> “I authorize you to share my
                                application/registration information with Major League Hacking for event
                                administration, ranking, and MLH administration in-line with the <a href='https://mlh.io/privacy' target="_blank">MLH Privacy Policy</a>. I further agree to the terms of both the
                                <a href='https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions' target="_blank"> MLH Contest
                                    Terms and Conditions</a> and the <a href='https://mlh.io/privacy' target="_blank">MLH Privacy Policy</a>.”</p>
                            <input
                                type="checkbox"
                                name="logistics"
                                placeholder='Your shirt size (S, M, L, XL, XXL)'
                                onChange={handleInput}
                                value={logistics}
                                required
                            />
                        </CodeContainer>


                        <CodeContainer>
                            <p><b>Communication from MLH: </b> “I authorize MLH to send me pre- and
                                post-event informational emails, which contain free credit and
                                opportunities from their partners."</p>
                            <input
                                type="checkbox"
                                name="communication"
                                placeholder='Your shirt size (S, M, L, XL, XXL)'
                                onChange={handleInput}
                                value={communication}
                                required
                            />
                        </CodeContainer>

                        <ButtonContainer>
                            <button
                                type="submit"
                                onClick={handleShow}
                            >
                                Submit
                            </button>
                        </ButtonContainer>
                    </form>
                </InfoContainer>
            </RightContainer>
        </SignUpContainer>


    )
}

export default SignupPage