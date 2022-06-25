import React from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import { CardContent } from "@mui/material";
function Home() {
    const navigate = useNavigate();
    return (
        <Card variant="outlined" className="flex ">
            <CardContent >
                <Button variant="contained" onClick={() => navigate("/Addusers")}>Add Users</Button>
                
                <Button className="mg-lf" variant="contained" onClick={() => navigate("/Viewusers")}>View Users</Button>
            </CardContent>
        </Card>


    )
}

export default Home