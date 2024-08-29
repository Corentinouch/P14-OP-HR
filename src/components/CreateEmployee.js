import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
    const [department, setDepartment] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    const validateForm = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = "First Name is required";
        if (!lastName) newErrors.lastName = "Last Name is required";
        if (!dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
        if (!startDate) newErrors.startDate = "Start Date is required";
        if (!street) newErrors.street = "Street is required";
        if (!city) newErrors.city = "City is required";
        if (!state) newErrors.state = "State is required";
        if (!zipCode) newErrors.zipCode = "Zip Code is required";
        if (!department) newErrors.department = "Department is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const saveEmployee = () => {
        if (!validateForm()) {
            return;
        }

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

        dispatch(addEmployee(employee));

        setFirstName('');
        setLastName('');
        setDateOfBirth(null);
        setStartDate(null);
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
        setDepartment('');

        setModalIsOpen(true);
    };

    return (
        <div className="form-container">
            <h2>Create Employee</h2>
            <form id="create-employee">
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        className={`input-field ${errors.firstName ? 'error' : ''}`}
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        className={`input-field ${errors.lastName ? 'error' : ''}`}
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="date-of-birth">
                        Date of Birth
                        <DatePicker
                            selected={dateOfBirth}
                            onChange={date => setDateOfBirth(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            className={`input-field ${errors.dateOfBirth ? 'error' : ''}`}
                            id="date-of-birth"
                        />
                    </label>
                    {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="start-date">
                        Start Date
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            className={`input-field ${errors.startDate ? 'error' : ''}`}
                            id="start-date"  // Ajout de l'id pour l'accessibilité
                        />
                    </label>
                    {errors.startDate && <span className="error-message">{errors.startDate}</span>}
                </div>


                <fieldset className="address">
                    <legend>Address</legend>
                    <div className="address_group">
                        <div className="form-group">
                            <label htmlFor="street">Street</label>
                            <input
                                type="text"
                                id="street"
                                className={`input-field ${errors.street ? 'error' : ''}`}
                                value={street}
                                onChange={e => setStreet(e.target.value)}
                            />
                            {errors.street && <span className="error-message">{errors.street}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                className={`input-field ${errors.city ? 'error' : ''}`}
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                            {errors.city && <span className="error-message">{errors.city}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <select
                                id="state"
                                className={`input-field ${errors.state ? 'error' : ''}`}
                                value={state}
                                onChange={e => setState(e.target.value)}
                            >
                                <option value="">Select State</option>
                                {states.map((state) => (
                                    <option key={state.abbreviation} value={state.abbreviation}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                            {errors.state && <span className="error-message">{errors.state}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input
                                type="number"
                                id="zip-code"
                                className={`input-field ${errors.zipCode ? 'error' : ''}`}
                                value={zipCode}
                                onChange={e => setZipCode(e.target.value)}
                            />
                            {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                        </div>
                    </div>
                </fieldset>

                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select
                        id="department"
                        className={`input-field ${errors.department ? 'error' : ''}`}
                        value={department}
                        onChange={e => setDepartment(e.target.value)}
                    >
                        <option value="">Select Department</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>
                    {errors.department && <span className="error-message">{errors.department}</span>}
                </div>
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