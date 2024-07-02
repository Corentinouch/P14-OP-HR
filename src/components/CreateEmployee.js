import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from './employeeSlice';
import CustomModal from "./CustomModal";
import "./CreateEmployee.css"

const states = [
    { name: "Alabama", abbreviation: "AL" },
    { name: "Alaska", abbreviation: "AK" },
    { name: "American Samoa", abbreviation: "AS" },
    { name: "Arizona", abbreviation: "AZ" },
    { name: "Arkansas", abbreviation: "AR" },
    { name: "California", abbreviation: "CA" },
    { name: "Colorado", abbreviation: "CO" },
    { name: "Connecticut", abbreviation: "CT" },
    { name: "Delaware", abbreviation: "DE" },
    { name: "District Of Columbia", abbreviation: "DC" },
    { name: "Federated States Of Micronesia", abbreviation: "FM" },
    { name: "Florida", abbreviation: "FL" },
    { name: "Georgia", abbreviation: "GA" },
    { name: "Guam", abbreviation: "GU" },
    { name: "Hawaii", abbreviation: "HI" },
    { name: "Idaho", abbreviation: "ID" },
    { name: "Illinois", abbreviation: "IL" },
    { name: "Indiana", abbreviation: "IN" },
    { name: "Iowa", abbreviation: "IA" },
    { name: "Kansas", abbreviation: "KS" },
    { name: "Kentucky", abbreviation: "KY" },
    { name: "Louisiana", abbreviation: "LA" },
    { name: "Maine", abbreviation: "ME" },
    { name: "Marshall Islands", abbreviation: "MH" },
    { name: "Maryland", abbreviation: "MD" },
    { name: "Massachusetts", abbreviation: "MA" },
    { name: "Michigan", abbreviation: "MI" },
    { name: "Minnesota", abbreviation: "MN" },
    { name: "Mississippi", abbreviation: "MS" },
    { name: "Missouri", abbreviation: "MO" },
    { name: "Montana", abbreviation: "MT" },
    { name: "Nebraska", abbreviation: "NE" },
    { name: "Nevada", abbreviation: "NV" },
    { name: "New Hampshire", abbreviation: "NH" },
    { name: "New Jersey", abbreviation: "NJ" },
    { name: "New Mexico", abbreviation: "NM" },
    { name: "New York", abbreviation: "NY" },
    { name: "North Carolina", abbreviation: "NC" },
    { name: "North Dakota", abbreviation: "ND" },
    { name: "Northern Mariana Islands", abbreviation: "MP" },
    { name: "Ohio", abbreviation: "OH" },
    { name: "Oklahoma", abbreviation: "OK" },
    { name: "Oregon", abbreviation: "OR" },
    { name: "Palau", abbreviation: "PW" },
    { name: "Pennsylvania", abbreviation: "PA" },
    { name: "Puerto Rico", abbreviation: "PR" },
    { name: "Rhode Island", abbreviation: "RI" },
    { name: "South Carolina", abbreviation: "SC" },
    { name: "South Dakota", abbreviation: "SD" },
    { name: "Tennessee", abbreviation: "TN" },
    { name: "Texas", abbreviation: "TX" },
    { name: "Utah", abbreviation: "UT" },
    { name: "Vermont", abbreviation: "VT" },
    { name: "Virgin Islands", abbreviation: "VI" },
    { name: "Virginia", abbreviation: "VA" },
    { name: "Washington", abbreviation: "WA" },
    { name: "West Virginia", abbreviation: "WV" },
    { name: "Wisconsin", abbreviation: "WI" },
    { name: "Wyoming", abbreviation: "WY" },
];

const CreateEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('Sales');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const dispatch = useDispatch();

    const saveEmployee = () => {
        const employee = {
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            street,
            city,
            state,
            zipCode,
            department
        };

        if (!firstName || !lastName || !dateOfBirth || !startDate || !street || !city || !state || !zipCode || !department) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        dispatch(addEmployee(employee));

        setFirstName('');
        setLastName('');
        setDateOfBirth(null);
        setStartDate(null);
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
        setDepartment('Sales');

        setModalIsOpen(true);
    };

    return (
        <div className="form-container">
            <h2>Create Employee</h2>
            <form id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" className="input-field" value={firstName} onChange={e => setFirstName(e.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" className="input-field" value={lastName} onChange={e => setLastName(e.target.value)} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker
                    selected={dateOfBirth}
                    onChange={date => setDateOfBirth(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    className="input-field"
                />
                <label htmlFor="start-date">Start Date</label>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    className="input-field"
                />

                <fieldset className="address">
                    <legend>Address</legend>
                    <div className="address_group">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" className="input-field" value={street}
                               onChange={e => setStreet(e.target.value)}/>
                    </div>
                    <div className="address_group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" className="input-field" value={city}
                               onChange={e => setCity(e.target.value)}/>
                    </div>
                    <div className="address_group">
                        <label htmlFor="state">State</label>
                        <select id="state" className="input-field" value={state}
                                onChange={e => setState(e.target.value)}>
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.abbreviation} value={state.abbreviation}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="address_group">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input type="number" id="zip-code" className="input-field" value={zipCode}
                               onChange={e => setZipCode(e.target.value)}/>
                    </div>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select id="department" className="input-field" value={department} onChange={e => setDepartment(e.target.value)}>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>
            </form>
            <div className="form_footer">
                <button onClick={saveEmployee} className="btn-save">Save</button>
                <CustomModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h2>Employee Created!</h2>
                </CustomModal>
            </div>
        </div>
    );
};

export default CreateEmployee;