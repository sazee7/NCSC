import React from "react";
import Card from '@mui/material/Card';

import Button from '@mui/material/Button';
import { CardActions } from '@mui/material';
import { useState } from 'react';
import Axios from 'axios';
import Alert from '@mui/material/Alert';
import { useNavigate, useLocation } from "react-router-dom";

function Deleteusers() {

    const navigate = useNavigate();
    const [alertContent, setAlertContent] = useState("");
    const [alert, setAlert] = useState(false);

    const { state } = useLocation();
    const deleteUser = async (id) => {
        await Axios.put('http://localhost:3020/deleteUser',
            {
                id: id,
            }).then((res) => {
                if (res.data === "Deleted") {

                    setAlertContent(res.data)
                    setAlert(true);
                }
                else {
                    setAlertContent(res.data)
                    setAlert(false);
                    navigate('/');
                }
            }).catch(error => {

            });
    }
    return (
        <Card>
            {alert ? <Alert severity='error'>{alertContent}</Alert> : <></>}

            <CardActions className="sp-bt">
                <label>Are you sure?</label>
                <Button variant="contained" onClick={() => (deleteUser(state.id))}>Delete</Button>
            </CardActions >

        </Card>)
}

export default Deleteusers

