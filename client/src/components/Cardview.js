import React from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { CardContent, CardActions } from '@mui/material';
import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";
function Cardview(props) {
    const navigate = useNavigate();
    let name = props.name;
    let email = props.email;
    let age = props.age;
    let id = props.index;

    return (

        <Card className="sp-bt in-flex card2">

            <CardContent className="as-c">
                <p> Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <p> Age: <Moment diff={props.age} unit="years" ></Moment> </p>
            </CardContent>

            <CardActions >
                <Button variant="outlined" size="small" color="primary" onClick={() => navigate("/EditUsers/" + props.index + "",
                    { state: { name: name, email: email, age: age, id: id } })}>
                    Edit
                </Button>

                <Button variant="contained" size="small" color="error" onClick={() => navigate("/Deleteusers/" + props.index + "",
                    { state: { id: id } })}>
                    Delete
                </Button>
            </CardActions>


        </Card>)
}

export default Cardview

