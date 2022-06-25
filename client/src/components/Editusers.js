import React from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { CardActions, CardContent } from '@mui/material';
import { useState } from 'react';
import Axios from 'axios';
import Alert from '@mui/material/Alert';
import { useNavigate, useLocation } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
function Editusers() {

    const navigate = useNavigate();

    const { state } = useLocation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [DOB, setDOB] = useState("");

    const [alertContent, setAlertContent] = useState("");
    const [alert, setAlert] = useState(false);
    const [alert2, setAlert2] = useState(false);


    const updateUsers = async (id) => {

        if(email && name && DOB){
            setAlert2(false);

        await Axios.put('http://localhost:3020/updateUsers',
            {
                id: id,
                name: name,
                email: email,
                dob: DOB
            }).then((res) => {

                if (res.data === "Taken") {

                    setAlertContent("Email Already Taken")
                    setAlert(true);
                }
                else {
                    setAlertContent(res.data)
                    setAlert(false);
                    navigate('/');
                }
            }).catch(error => {
                alert(error)
            });
        }
        else{
            setAlert2(true);
        }
    }
    return (
        <div className="flex">
            <Card>
                {alert ? <Alert severity='error'>{alertContent}</Alert> : <></>}
                {alert2 ? <Alert severity='error'>Please Provide Valid Information</Alert> : <></>}

                <CardContent >
                    <List sx={{ width: '100%', maxWidth: 1600 }}>
                        <ListItem className="sp-bt in-flex">
                            <label>Name</label>
                            <input type="text" placeholder={state.name} onChange={(event) => {
                                setName(event.target.value);
                            }} />
                        </ListItem>

                        <ListItem className="sp-bt in-flex">
                            <label>Email</label>
                            <input type="email" placeholder={state.email} onChange={(event) => {
                                setEmail(event.target.value);
                            }} />
                        </ListItem>

                        <ListItem className="sp-bt in-flex">
                            <label>DOB</label>
                            <input type="date" placeholder={state.age} onChange={(event) => {
                                setDOB(event.target.value);
                            }} />
                        </ListItem>
                    </List>
                    <Button variant="contained" onClick={() => (updateUsers(state.id))}>Update User</Button>

                </CardContent>
                <CardActions >

                </CardActions >
            </Card>
        </div>)
}

export default Editusers

