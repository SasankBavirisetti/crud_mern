import React, { useEffect, useState } from 'react'
import './View.css'
import { Navbar } from '../Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const View = (props) => {

    let {id} = useParams();

    const [employee,setEmployee] = useState({})

    useEffect(()=>
    {
        console.log("use view")
        console.log(id);
        loadEmployee();
    },[])
    const loadEmployee = async()=>
    {
        const result = await axios.get(`http://localhost:8000/employees/${id}`);
        console.log(result.data);
        setEmployee(result.data)
    }


    return (
        <div className='view-details'>
            <Navbar heading='View Employee Details' />

            <table className='view-table'>
                <thead className='heading'>
                    <tr>
                        <th>#</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{employee.name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{employee.email}</td>
                    </tr>
                    <tr>
                        <th>Department</th>
                        <td>{employee.department}</td>
                    </tr>
                    <tr>
                        <th>Salary</th>
                        <td>{employee.salary}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{employee.phone}</td>
                    </tr>
                </tbody>
            </table>
            <div className="back-btn">
                <Link to='/'>
                    < button className='button confirm'>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}
