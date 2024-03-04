
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userReducer";

const Create = () => {
    const idRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const dispatch = useDispatch()

    const handleSubmit = () => {

        console.log(idRef.current.value, nameRef.current.value, emailRef.current.value);
        const newEmployee = { id: idRef.current.value, name: nameRef.current.value, email: emailRef.current.value };

        dispatch(addUser(newEmployee));
    }

    return (
        <div className="w-screen h-screen bg-slate-900/90 flex justify-center items-start text-slate-300">
            <div className="flex flex-col justify-center gap-2 w-[24rem] p-6">
                <h1 className="text-3xl font-bold">Create User.</h1>
                <label className="font-semibold text-xl">ID:</label>
                <input ref={idRef} className="outline-none text-zinc-800 rounded-md p-1" type="text" />
                <label className="font-semibold text-xl">Name:</label>
                <input ref={nameRef} className="outline-none text-zinc-800 rounded-md p-1" type="text" />
                <label className="font-semibold text-xl">Email:</label>
                <input ref={emailRef} className="rounded-md outline-none text-zinc-800 p-1" type="text" />

                <div className="flex text-lg text-center justify-start gap-3">

                    <Link to="/">
                        <button onClick={handleSubmit} className='text-xl my-2 bg-black p-2 rounded-md w-[5rem]' >Submit</button>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Create