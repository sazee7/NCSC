import React from "react";


import { useState, useEffect } from 'react';
import Axios from 'axios';
import Cardview from "./Cardview";


function Viewusers() {

    const [userList, setUserList] = useState([]);
    useEffect(() => {

        Axios.get('http://localhost:3020/viewUsers').then((res) => {
            setUserList(res.data)
        });

    }, []);


    return (

        <div className="flex">
            <p>All Users List</p>
            {userList.map((val, key) => {

                return <Cardview key={key}
                    name={val.name} email={val.email} age={val.dob} index={val.id}
                />
            })}


        </div>)
}

export default Viewusers