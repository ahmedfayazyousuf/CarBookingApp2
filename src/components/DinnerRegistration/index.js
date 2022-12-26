
import '../All.css';
import NissanLogo from '../nissanlogo.png';
import GetReady from '../getready.png';
import firebase from '../../firbase';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const DinnerRegistration = () =>{
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    async function Handlesubmit (){

        const Users = firebase.firestore().collection("Users");
        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;

        Users.where("Email", "==", Email).get().then((doc)=>{
            if(doc.empty){

                Users.add({
                    Name:Name,
                    Email:Email,
                    Number:Number,
                    Dinner:"yes",
                    time: firebase.firestore.FieldValue.serverTimestamp()
        
                }).then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    axios.post("https://imagersvpserver.azurewebsites.net/send_dinner",
                    {email:Email})
                }).then(()=>{
                    navigate("/success",{state:{uid:2,count:100}});
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });

            }else{
                doc.forEach((doc) => {
                    if(doc.data().Dinner === 'yes'){
                        console.log("Exceeded Limit")
                        const node = document.createElement("p");
                        node.style.color = "red";
                        node.style.fontSize = "10px";
                        node.style.marginLeft = "160px";
                        node.innerHTML = "Dinner Already Booked"
                        if(count===0){
                            document.getElementById('parent').appendChild(node);
                            setCount(1);
                        }
                        
                        console.log("added")
                    }
                    else{
                        navigate("/success",{state:{uid:2,count:100}});
                    }
                });
            }
        })

        
    }
        
    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("desktop.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}}>
        
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={NissanLogo} alt="Logo" style={{width: '25vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={GetReady} alt="Logo" style={{width: '40vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            {/* <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <h1 style={{fontSize: '43px', marginTop: '20px', marginBottom: '-8px'}} >GET READY TO</h1>
                <h1 className='explore' style={{fontSize: '66px', margin: '-24px'}}>EXPLORE</h1>
                <h1 style={{fontSize: '34px', marginBottom: '10px'}}>MORE. TOGETHER.</h1>
            </div> */}

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p>Dinner Registration</p>
            </div>

            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "30vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '400px', gap:'10px', alignItems: 'center'}}>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                        <label>Full Name</label>
                        <input type="text" id="Name" style={{marginLeft: '10px', marginRight:'45px',width:"50%"}} /> 
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                        <label>Company Email</label>
                        <input type="email" id='email' style={{marginLeft: '10px',marginRight:'45px', width:"50%"}} />
                    </div>


                    <div id='parent' style={{width:"100%", display: 'flex', flexDirection: 'column'}}>
                        <div  style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                            <label>Phone</label>
                            <input type="number" id='no' style={{marginLeft: '10px', marginRight:'45px', marginBottom:'15px', width:"50%"}} />
                        </div>
                    </div>

                    <button className="grab" style={{width:"150px", marginTop: '30px', margin: '10px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black'}} onClick={Handlesubmit}>Login</button>
                </div>
                
            </div>
        </div>
    )
}

export default DinnerRegistration;
