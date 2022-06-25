import React from "react";
import { useState } from 'react';
import Axios from 'axios';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


import { CardContent } from '@mui/material';
function Addusers() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [DOB, setDOB] = useState("");
    const [Country, setCountry] = useState("");
    const [image, setImage] = useState("");
    const [alertContent, setAlertContent] = useState("");
    const [alert, setAlert] = useState(false);
    const [alert2, setAlert2] = useState(false);
    const addUsers = async () => {
 
if(email && name && DOB && Country && image){
    setAlert2(false);
        await Axios.post('http://localhost:3020/addUsers',
            {
                name: name,
                email: email,
                dob: DOB,
                country: Country,
                image: image
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

    const handlePictures = (event) => {
        setImage(event.target.files[0].name)
    }

    return (
<div className="flex">
        <Card >
<p>Add User</p>
            <CardContent >
            {alert2 ? <Alert severity='error'>Please Provide Valid Information</Alert> : <></>}
                {alert ? <Alert severity='error'>{alertContent}</Alert> : <></>}

                <List sx={{ width: '100%', maxWidth: 1600 }}>
                    <ListItem className="sp-bt in-flex">
                        <label>Name</label>
                        <input type="text" onChange={(event) => {
                            setName(event.target.value);
                        }} />
                    </ListItem>

                    <ListItem className="sp-bt in-flex">

                        <label>Email</label>
                        <input type="email" onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                    </ListItem>

                    <ListItem className="sp-bt in-flex">
                        <label>Date of Birth</label>
                        <input type="date" onChange={(event) => {
                            setDOB(event.target.value);
                        }} />

                    </ListItem>

                    <ListItem className="sp-bt in-flex">
                        <label>Choose Image</label>
                        <input type="file" onChange={handlePictures} />

                    </ListItem>

                    <ListItem className="sp-bt in-flex">

                        <label>Country</label>
                        <input type="text" onChange={(event) => {
                            setCountry(event.target.value);
                        }} />


                    </ListItem>
                </List>

                <Button variant="contained" onClick={addUsers}>Add User</Button>
            </CardContent>
        </Card>
        </div>
    )
}

export default Addusers