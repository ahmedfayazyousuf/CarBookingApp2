import '../All.css';
import NissanLogo from '../nissanlogo.png';
import ErrorImg from './404.png';

const Error = () =>{

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

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={ErrorImg} alt="404 Not Found" style={{width: '40vh'}}/>
                <button style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}}>Home</button>
            </div>
        </>
    )
}

export default Error;
