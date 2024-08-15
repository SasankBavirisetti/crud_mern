import React, { useState } from 'react'
import './AddEmployee.css'
import { Navbar } from '../Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const AddEmployee = (props) => {
    let navigate = useNavigate();

    const [details, setDetails] = useState({
        name: "",
        email: "",
        department: "",
        salary: "",
        phone: ""
    })

    const inputChange = (e) => {
        console.log(e.target.name, e.target.value);
        setDetails({...details,[e.target.name]:e.target.value});
    }

    const submitHandler= async(e)=>
    {
       e.preventDefault(); 
        // console.log(details);
        await axios.post("http://localhost:8000/employees",details);
        navigate("/");

    }

    return (
        <div className='addemployee'>
            <Navbar heading={"Add New Employee"} />

            <form className='form' onSubmit={(e)=>submitHandler(e)}>
                <label htmlFor="" className='label'>Name : </label>
                <input type='text' className='input' placeholder='Enter Name here' name='name' onChange={(e) => inputChange(e)} />


                <label htmlFor="" className='label'>Email :</label>
                <input type='email' className='input' placeholder='Enter Email here' name='email' onChange={(e) => inputChange(e)} />


                <label htmlFor="" className='label'>Department:</label>
                <input type='text' className='input' placeholder='Enter Department here' name='department' onChange={(e) => inputChange(e)} />

                
                <label htmlFor="" className='label'>Salary:</label>
                <input type='number' className='input' placeholder='Enter Salary here' name='salary' onChange={(e) => inputChange(e)} />


                <label htmlFor="" className='label'>Phone Number:</label>
                <input type='number' className='input' placeholder='Enter Mobile Number here' name='phone' onChange={(e) => inputChange(e)} />


                <div className="form-btns">
                    <button  type='submit' className='button confirm'>Add Details</button>
                    <Link to='/'><button className='button cancel'>Cancel</button></Link>
                </div>

            </form>
        </div>
    )
}
