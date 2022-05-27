import React, {useState} from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const Domain = () => {
    const [name, setName] = useState("")
    const [hId, setID] = useState("")
    const [desc, setDesc] = useState("")

    const [nameErr, setNameErr] = useState({})
    const [hIdErr, setHIDErr] = useState({})
    const [descErr, setDescErr] = useState({})

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation()
        console.log(name)
        let data = JSON.stringify({
            name: name,
            description: desc,
            geography: hId,
            model: "CONUS 1"
          });

          console.log(data)
         axios.post('/api/domains/',data,
         {headers:{"Content-Type" : "application/json"}})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          });
        }

        // const fetchData = async () => {
        //     const response = await fetch('/api/domains', {
        //     method: 'POST', 
        //     body: JSON.stringify({ name: name, description: desc, geography: hId, model: "CONUS"}),
        //     headers : { 
        //         'Content-Type': 'application/json; charset=UTF-8',
        //        }
        //     })
        //     const data = await response.json()
        //     console.log(data) 
        // }


    const formValidation = () => {
        const nameErr = {}
        const hIdErr = {}
        const descErr = {}

        let isValid = true;

        if(name.trim().length == 0){
            nameErr.nameNull = "Name can not be empty"
            isValid = false;
        }
        if(desc.trim().length == 0){
            descErr.descNull = "Description can not be empty"
            isValid = false;
        }
        if(hId.trim().length == 0){
            hIdErr.hIdNull = "HUC IDs can not be empty"
            isValid = false;
        }
        else{
            var size = hId.toString().trim().split(',');
            var isEqual = true, isLess = true;
            for(var i = 0; i < size.length-1; i++) {
                
                if(size[i] != size[i+1]){ 
                    isEqual = false;
                    break;
                }
            }      
            for(var i = 0; i < size.length; i++) {
                console.log(size[i].length);
                if(size[i] < 2 || size[i] > 12 || size[i] % 2 != 0){
                    isLess = false;
                    break;
                }
            } 
      
            if(!isEqual){
                hIdErr.hIdNull = "All HUC IDs must be of same length"
            }
            else if(!isLess){
                hIdErr.hIdNull = "Valid HUC ID lengths are 2,4,6,8,10,12"
            }
        }
        setNameErr(nameErr)
        setDescErr(descErr)
        setHIDErr(hIdErr)
        
        if(isValid && isLess && isEqual){
            return true;
        }
        else return false;
    }

    return (
        <><h1> Create New Domain</h1>
        <div className='wrapper'>
            <div id="heading"> 
            <h2>Name and Describe Your Domain</h2>
                    <Button id="btn-header" variant='contained' style={{marginRight: "10px", color: "#275392"}}>Enter HUC Id</Button>
                    <Button id="btn-header" disabled variant='contained' style={{marginRight: "10px",}}>Map Selection</Button>
                    <Button id="btn-header" disabled variant='contained' style={{marginRight: "10px"}}>Enter Shape File</Button>
            </div>

            <form onSubmit={onSubmit}>
            <div className='name-id'>
                <div >
                <label className='required'>Name: </label>
                <div><input id="name-id" type="text" 
                value = {name}
                onChange = {(e) => {setName(e.target.value)}}
                placeholder='Enter domain name'>
                    </input>
                    </div>
                    {Object.keys(nameErr).map((key) => {
                        return <p key = {key} style= {{color: "red"}}> {nameErr[key]}</p>
                    })}
                    </div>
                <div id="id-box">
                    <label className='required'>Description: </label>
                    <div><textarea id="desc-box" placeholder="Enter description" value = {desc} 
                    onChange = {(e) => {setDesc(e.target.value)}}>
                        </textarea>
                        </div>
                        {Object.keys(descErr).map((key) => {
                        return <p key = {key} style= {{color: "red"}}> {descErr[key]}</p>
                    })}
                </div>
                <div className='desc'>
                <label className='required'>Enter Comma Separated ID(s): </label>
                <div><textarea id='enter_huc' placeholder="Enter IDs of same length"
                value = {hId} 
                onChange = {(e) => {setID(e.target.value)}}>
                
                    </textarea></div>
                    {Object.keys(hIdErr).map((key) => {
                        return <p key = {key} style= {{color: "red"}}> {hIdErr[key]}</p>
                    })}
            </div>
                <div><Button id="btn" variant='contained' type = 'submit' >Create</Button></div>
            </div>
            </form>
        </div>
                
        </>
    )
}

export default Domain
