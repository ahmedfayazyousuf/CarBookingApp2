import NissanLogo from '../nissanlogo.png';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const UserChooseCompany = () => { 
    const location = useLocation();
    const navigate = useNavigate();
    function Handleclick(v){
    navigate(v, {state:{uid:location.state.uid}});
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



            <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '0', padding: '0'}} >
                <div style={{width: '50%', backgroundColor: 'red'}}>
                    <h1>NISSAN</h1>
                </div>

                <div style={{width: '50%', backgroundColor: 'blue'}}>
                    <h1>INFINITI</h1>
                </div>
            </div>








            {/* <div className="form-body" style={{height:"100vh"}}>
                <div className="form-items">
                    <div class="container" className="profilepanel" style={
                        {
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center",
                            justifyContent:"center",
                            height:"100vh",
                        }}>
                            <div class="container" className="profilepanel" style={
                                {
                                    display:"flex",
                                    flexDirection:"column",
                                    alignItems:"center",
                                    justifyContent:"space-between",
                                    height:"50%",
                                }}>
                                    <Button className="LocationButtons" color="error" variant="contained" onClick= {() => Handleclick('/UserAbuDhabi')}>
                                        Nissan
                                    </Button>

                                    <Button className="LocationButtons" color="error" variant="contained" onClick= {() => Handleclick('/UserSharjah')}>
                                        Infinity
                                    </Button>
                            </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default UserChooseCompany