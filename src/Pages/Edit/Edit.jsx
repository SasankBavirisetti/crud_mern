import React, { useEffect, useState } from 'react'
import './Edit.css'
import { Navbar } from '../Navbar/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Edit = (props) => {

    const {id} = useParams();

    let navigate = useNavigate();

    const [details, setDetails] = useState({
        name: "",
        email: "",
        department: "",
        salary: "",
        phone: ""
    })

    useEffect(() => {
        loadEmployee();
    }, [])
    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8000/employees/${id}`);
        setDetails(result.data)
    }

    let {name,email,department,salary,phone} = details;

    const inputChange = (e) => {
        console.log(e.target.name, e.target.value);
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/employee/${id}`,details);
        navigate("/");

    }



    return (
        <div className='edit-details'>
            <Navbar heading={"Edit Employee Details"} />

            <form className='form' onSubmit={(e)=>submitHandler(e)}>
                <label htmlFor="" className='label'>Name : </label>
                <input type='text' className='input' placeholder='Enter Name here'  value={name}  name='name' onChange={(e) => inputChange(e)} />


                <label htmlFor="" className='label'>Email :</label>
                <input type='email' className='input' placeholder='Enter Email here' value={email} name='email' onChange={(e) => inputChange(e)} />


                <label htmlFor="" className='label'>Department:</label>
                <input type='text' className='input' placeholder='Enter Department here' value={department} name='department' onChange={(e) => inputChange(e)} />


                <label htmlFor="" className='label'>Salary:</label>
                <input type='number' className='input' placeholder='Enter Salary here' value={salary} name='salary' onChange={(e) => inputChange(e)} />


                <label htmlFor="" className='label'>Phone Number:</label>
                <input type='number' className='input' placeholder='Enter Mobile Number here' value={phone} name='phone' onChange={(e) => inputChange(e)} />

                <div className="form-btns">
                    <button className='button confirm' type='submit'>Edit Details</button>
                    <Link to='/'><button className='button cancel'>Cancel</button></Link>
                </div>

            </form>
        </div>
    )
}
