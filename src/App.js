import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>HRnet</h1>
                    <div className="nav_header">
                        <Link to="/">
                            Create Employee
                        </Link>
                        <Link to="/employee-list">
                            View Current Employees
                        </Link>
                    </div>

                </header>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<CreateEmployee />} />
                        <Route path="/employee-list" element={<EmployeeList />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
