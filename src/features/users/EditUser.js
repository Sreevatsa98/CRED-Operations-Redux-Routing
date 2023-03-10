import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/button';
import TextField from '../../components/TextField';
import { editUser } from './UserSlice';
import './styleEdit.css';

const EditUser = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    console.log(params.id);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);
    const { name, email } = existingUser[0];
    const [values, setValues] = useState({
        name,
        email
    });

    const handelEditUser = () => {
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }));
        navigate('/');
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                className ="text-white"
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

            <Button onClick={handelEditUser}>Edit</Button>
        </div>
    )
}

export default EditUser;