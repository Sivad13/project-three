import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacultyCard from './FacultyCard';
import { Container } from 'react-bootstrap';
import '../students.css';


function MajorsMap(props) {
    return (
        <div>
            {props.coll.majors.map(major => {
                return (
                <div>
                <p className="tdStu">{major}</p>
                </div>
                )
            })}
        </div>
    )
}

export default MajorsMap;