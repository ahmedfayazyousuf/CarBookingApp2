import { useNavigate } from 'react-router-dom';
import firebase from '../../firbase';
import '../All.css';
import NissanLogo from '../nissanlogo.png';

const Registration = () =>{
    const navigate = useNavigate();

    function HandleSubmit(){
        const Users = firebase.firestore().collection("Users");
        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;
        Users.add({
            Name:Name,
            Email:Email,
            Number:Number
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            navigate("/UserChooseCompany",{state:{uid:docRef.id}});
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        
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

            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "30vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '300px', gap:'10px', alignItems: 'center'}}>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                        <label>Name</label>
                        <input type="text" id="Name" style={{marginLeft: '10px', width:"80%"}} /> 
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                        <label>Email</label>
                        <input type="email" id='email' style={{marginLeft: '10px', width:"80%"}} />
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                        <label>Phone</label>
                        <input type="number" id='no' style={{marginLeft: '10px', width:"80%"}} />
                    </div>
                    <button className="grab" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}} onClick={HandleSubmit}>Login</button>
                </div>
                
            </div>
        </>
    )
}

export default Registration;
