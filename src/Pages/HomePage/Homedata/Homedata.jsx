import React, { useEffect, useState } from 'react'
import './Homedata.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Homedata = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        loadEmployees();

    }, [])

    const loadEmployees = async () => {
        const result = await axios.get("http://localhost:8000/employees")
        // console.log(result.data);
        setEmployees(result.data);

    }

    const deleteDetails = async(id) => {
        // console.log("delete "+id);
        await axios.delete(`http://localhost:8000/employee/${id}`)
        loadEmployees();

    }


    return (
        <div className='homedata'>
            <table className='table-details'>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th className='action'>Actions</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        employees.map((employee, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.department}</td>
                                    <td>
                                        <div className="action-btns">
                                            <Link to={`/employees/${employee._id}`}><button className='buttons view'>View</button></Link>
                                            <Link to={`/employee/${employee._id}`}><button className='buttons edit'>Edit</button></Link>
                                            <button className='buttons delete' onClick={
                                                () => {
                                                    deleteDetails(employee._id)
                                                }}
                                            >Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }




                </tbody>
            </table>
        </div>
    )
}
