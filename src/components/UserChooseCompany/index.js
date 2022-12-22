import NissanLogo from '../nissanlogo.png';
import ChooseNissan from './choosenissan.png';
import ChooseInfiniti from './chooseinfiniti.png';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const UserChooseCompany = () => { 
    const location = useLocation();
    const navigate = useNavigate();
    function Handleclick(v){
    navigate(v, {state:{uid:location.state.uid,count:location.state.count}});
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



            <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
                <div style={{width: '50%'}}>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="content content-1">
                            <div className="fab"></div>
                            <img src={ChooseNissan} alt="Logo" style={{width: '20vh'}}/>
                            <Button color="success" variant="contained" onClick= {() => Handleclick('/UserNissan')}>Nissan</Button>   
                        </div>
                    </div>
                </div>

                <div style={{width: '50%'}}>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="content content-1">
                            <div className="fab"></div>
                            <img src={ChooseInfiniti} alt="Logo" style={{width: '10vh'}}/>  
                            <Button color="success" variant="contained" onClick= {() => Handleclick('/UserInfiniti')}>Infinity</Button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default UserChooseCompany

