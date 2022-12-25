import '../All.css';
import NissanLogo from '../nissanlogo.png';
import GetReady from '../getready.png';
import ErrorImg from './404.png';
import {Link} from 'react-router-dom'

const Error = () =>{

    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={NissanLogo} alt="Logo" style={{width: '20vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={GetReady} alt="Logo" style={{width: '40vh', marginTop: '30px'}}/>
            </div>


            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={ErrorImg} alt="404 Not Found" style={{width: '40vh', marginBottom: '20px'}}/>
                <Link to="/">
                    <button style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}}>Home</button>
                </Link>
            </div>

        </>
    )
}

export default Error;
