import '../All.css';
import NissanLogo from '../nissanlogo.png';
import TickIcon from './tickicon.png';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Success = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        if(location.state.count >= 1){
            document.getElementById('return').style.display = "none";
        }
    })

    function HandleSubmit(){
        navigate("/UserChooseCompany", {state:{uid:location.state.uid,count:location.state.count+1}});
    }

    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={NissanLogo} alt="Logo" style={{width: '20vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <h1 style={{fontSize: '30px', marginTop: '20px', marginBottom: '-8px'}} >GET READY TO</h1>
                <h1 className='explore' style={{fontSize: '46px', margin: '-12px'}}>EXPLORE</h1>
                <h1 style={{fontSize: '24px'}}>MORE. TOGETHER.</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={TickIcon} alt="Tick Mark" style={{width: '10vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p style={{fontSize: '15px', marginTop: '10px'}} >Thank you! We will be sending you a confirmation email shortly.</p>
            </div>

            <button className="grab" id='return' style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}} onClick={HandleSubmit}>Want to book again?</button>
        </>
    )
}

export default Success;
