import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './EmployeeList.css';

const EmployeeList = () => {
    const employees = useSelector(state => state.employees.employees);
    const [search, setSearch] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useEffect(() => {
        setFilteredEmployees(employees);
    }, [employees]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    };

    useEffect(() => {
        const filtered = employees.filter((employee) => {
            return (
                employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
                employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
                formatDate(employee.startDate).toLowerCase().includes(search.toLowerCase()) ||
                employee.department.toLowerCase().includes(search.toLowerCase()) ||
                formatDate(employee.dateOfBirth).toLowerCase().includes(search.toLowerCase()) ||
                employee.street.toLowerCase().includes(search.toLowerCase()) ||
                employee.city.toLowerCase().includes(search.toLowerCase()) ||
                employee.state.toLowerCase().includes(search.toLowerCase()) ||
                employee.zipCode.toLowerCase().includes(search.toLowerCase())
            );
        });
        setFilteredEmployees(filtered);
    }, [search, employees]);

    const columns = [
        { name: 'First Name', selector: row => row.firstName, sortable: true },
        { name: 'Last Name', selector: row => row.lastName, sortable: true },
        { name: 'Start Date', selector: row => formatDate(row.startDate), sortable: true },
        { name: 'Department', selector: row => row.department, sortable: true },
        { name: 'Date of Birth', selector: row => formatDate(row.dateOfBirth), sortable: true },
        { name: 'Street', selector: row => row.street, sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
        { name: 'State', selector: row => row.state, sortable: true },
        { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
    ];

    return (
        <div className="container">
            <h1>Current Employees</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="search-bar"
            />
            <div className="employees-list">


            <DataTable
                columns={columns}
                data={filteredEmployees}
                pagination
            />
            </div>
        </div>
    );
};

export default EmployeeList;
