import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { deleteUser } from '../store/userReducer';
import { Reorder } from 'framer-motion';



const Home = () => {
    const dispatch = useDispatch()

    const users = useSelector((state) => state.users);
    console.log(users);

    const handleDeleteEmployee = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <center className='bg-slate-900/90 h-screen py-6  w-screen flex flex-col justify-start items-center text-white'>
            <div className='flex justify-center items-center py-5 gap-8  mx-auto'>
                <h1 className='text-white text-2xl '>Users List: 😊</h1>
                <Link className='text-xl bg-black p-2 rounded-md' to="/create">Create</Link>
            </div>


            <div className='w-2/3 max-w-[40rem] gap-3 text-lg bg-zinc-800 rounded-lg p-2 mx-auto my-5'>
                <div className='w-full grid grid-cols-3'>
                    <h1 className='font-semibold'>ID</h1>
                    <h1 className='font-semibold'>Name</h1>
                    <h1 className='font-semibold'>Email</h1>
                </div>
                <Reorder.Group values={users} onReorder={users}>
                    {
                        users.map((user) => {
                            return (
                                <Reorder.Item key={user.id} value={user}>
                                    <div className='w-full p-2 grid grid-cols-3 gap-3'>
                                        <p>{user.id}</p>
                                        <p>{user.name}</p>
                                        <div className='flex justify-between items-center'>
                                            <p>{user.email}</p>
                                            <MdDelete onClick={() => handleDeleteEmployee(user.id)} size={20} />
                                        </div>

                                    </div>
                                </Reorder.Item>
                            )
                        })
                    }
                </Reorder.Group>

            </div>

        </center >
    )
}

export default Home