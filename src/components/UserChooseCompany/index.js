import './UserNissan.css';
import NissanLogo from '../nissanlogo.png';
import GetReady from '../getready.png';
import ChooseNissan from './choosenissan.png';
import ChooseInfiniti from './chooseinfiniti.png';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';

const UserChooseCompany = () => { 
    const location = useLocation();
    const navigate = useNavigate();

    const [car, setCar] = useState('');

    function Handleclick(v){
        if(car === ''){
            return;
        }
        
    navigate(v, {state:{uid:location.state.uid,count:location.state.count}});
    }

    function carClick(e){

        if(e === 'nissan'){
            setCar('/UserNissan');
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('infiniti').style.background = "transparent";

        }

        if (e === 'infiniti'){
            setCar('/UserInfiniti');
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('nissan').style.background = "transparent";
        }
        
    }

    // useEffect(()=>{
    //     document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL + '/desktop2.png'})` 
    // },[])

    return (
        <>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={NissanLogo} alt="Logo" style={{width: '20vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={GetReady} alt="Logo" style={{width: '40vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p style={{fontSize: '15px', marginTop: '10px'}} >Which models would you like to test drive?</p>
            </div>



        

            <div className="rower" style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0', gap:'30px', marginTop:'10px'}} >
    
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0', margin: '0'}}>
                    <div id='nissan' className="content content-1" onClick={()=>{carClick('nissan')}} style={{padding: '0', margin: '10px'}}>
                        <img src={ChooseNissan} alt="Logo" style={{width: '20vh'}}/>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='infiniti' className="content content-1" onClick={()=>{carClick('infiniti')}} style={{padding: '0', margin: '10px'}}>
                        <img src={ChooseInfiniti} alt="Logo" style={{width: '20vh'}}/>  
                    </div>
                </div>

                
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'3vh'}} >
                <button className="grab" style={{color:"white", background:"black",width:"150px",borderRadius: '5px', padding: '10px'}} variant="contained" onClick= {() => Handleclick(car)}>Next</button> 
            </div>

              
        </>
    )
}

export default UserChooseCompany

