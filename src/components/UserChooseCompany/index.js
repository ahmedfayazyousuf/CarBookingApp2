import NissanLogo from '../nissanlogo.png';
import ChooseNissan from './choosenissan.png';
import ChooseInfiniti from './chooseinfiniti.png';
import Button from '@mui/material/Button';
import React from 'react';
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
            document.getElementById(e).style.background = "red";
            document.getElementById('infiniti').style.background = "transparent";

        }

        if (e === 'infiniti'){
            setCar('/UserInfiniti');
            document.getElementById(e).style.background = "red";
            document.getElementById('nissan').style.background = "transparent";
        }
        
    }

    return (
        <>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={NissanLogo} alt="Logo" style={{width: '20vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <h1 style={{fontSize: '30px', marginTop: '20px', marginBottom: '-8px'}} >GET READY TO</h1>
                <h1 className='explore' style={{fontSize: '46px', margin: '-12px'}}>EXPLORE</h1>
                <h1 style={{fontSize: '24px'}}>MORE. TOGETHER.</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p style={{fontSize: '15px', marginTop: '10px'}} >What would you like to test drive?</p>
            </div>



            <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0', gap:"50px"}} >
                <div style={{width: '50%'}}>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div id='nissan' className="content content-1" style={{width:"250px", padding:"20px"}} onClick={()=>{carClick('nissan')}}>
                            <div className="fab"></div>
                            <img src={ChooseNissan} alt="Logo" style={{width: '20px'}}/>
                            {/* <Button color="success" variant="contained" onClick= {() => Handleclick('/UserNissan')}>Nissan</Button>    */}
                        </div>
                    </div>
                </div>

                <div style={{width: '50%'}}>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                        <div id='infiniti' className="content content-1" style={{width:"250px", height:"400px", padding:"20px"}}  onClick={()=>{carClick('infiniti')}}>
                            <div className="fab"></div>
                            <img src={ChooseInfiniti} alt="Logo" style={{width: '10vh'}}/>  
                            {/* <Button color="success" variant="contained" onClick= {() => Handleclick('/UserInfiniti')}>Infinity</Button> */}
                            </div>
                        </div>
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}} >
                <button style={{color:"white", background:"black",width:"150px",borderRadius: '5px', padding: '10px'}} variant="contained" onClick= {() => Handleclick(car)}>Next</button> 
            </div>

              
        </>
    )
}

export default UserChooseCompany

