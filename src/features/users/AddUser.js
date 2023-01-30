import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import TextField from '../../components/TextField'
import { addUser } from './UserSlice';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name:'',
        email:''
    });

    const handelAddUser = () => {
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }));
        navigate('/');
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField 
                label="Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'June' }}
            />

        <br />

            <TextField 
                label="Email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                inputProps={{ type: 'email', placeholder: 'june@gmail.com' }}
            />

            <Button onClick={handelAddUser}>Submit</Button>
        </div>
    )
}

export default AddUser;