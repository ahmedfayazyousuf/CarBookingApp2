import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firbase';
import '../All.css';
import NissanLogo from '../nissanlogo.png';
import GetReady from '../getready.png';
import { useParams } from "react-router-dom";
import {useRef} from 'react';



const Registration = () =>{
    const navigate = useNavigate();
    const { id } = useParams();
    const buttonRef = useRef(null);

    const [count, setCount] = useState(0);
    const [emailB, setEmailB] = useState(false);


    function HandleSubmit(){

        buttonRef.current.disabled = true;
        const Users = firebase.firestore().collection("Users");
        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;
       
        console.log(Email)

        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (Email === "" || !Email.match(validRegex))
        {
            if(emailB === false){
                const el = document.createElement("p");
                const name = document.getElementById('parent')
                el.id = "emailerr"
                el.style.color = "red";
                el.style.marginLeft = "160px";
                el.style.fontSize = "10px";
                el.innerHTML = "Invalid Email"
                name.appendChild(el);
                setEmailB(true)
            }
            console.log("lessgoooooo")
            return;
        }



       
        Users.where("Email", "==", Email).get().then((doc)=>{
            if(doc.empty){

                if(id === undefined){
                    Users.add({
                        Name:Name,
                        Email:Email,
                        Number:Number,
                        Count:0,
                        Dinner:"no",
                        time: firebase.firestore.FieldValue.serverTimestamp()
            
                    }).then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        navigate("/UserChooseCompany",{state:{uid:docRef.id,count:0}});
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });  
                }else{
                    Users.add({
                        Name:Name,
                        Email:Email,
                        Number:Number,
                        Count:0,
                        Dinner:"yes",
                        time: firebase.firestore.FieldValue.serverTimestamp()
            
                    }).then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        navigate("/UserChooseCompany",{state:{uid:docRef.id,count:0}});
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
                }

            }else{
                doc.forEach((doc) => {
                    if(doc.data().Count>1){
                        console.log("Exceeded Limit")
                        const node = document.createElement("p");
                        node.style.color = "red";
                        node.style.fontSize = "10px";
                        node.style.marginLeft = "160px";
                        node.innerHTML = "Amount of Booking Exceeded"
                        if(count===0){
                            document.getElementById('parent').appendChild(node);
                            setCount(1);
                        }
                        
                        console.log("added")
                    }
                    else{
                        navigate("/UserChooseCompany",{state:{uid:doc.id,count:doc.data().Count}});
                    }
                });
            }
        }).catch(()=>{
            console.log("error")
        })

        // Users.add({
        //     Name:Name,
        //     Email:Email,
        //     Number:Number,

        // }).then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        //     navigate("/UserChooseCompany",{state:{uid:docRef.id,count:0}});
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });
        
    }

    // useEffect(()=>{
    //     document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL + '/desktop.jpg'})` 
    // },[])
    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("desktop.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}}>
        
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={NissanLogo} alt="Logo" style={{width: '25vh', marginTop: '70px', marginBottom: '10px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={GetReady} alt="Logo" style={{width: '40vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            {/* <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <h1 style={{fontSize: '43px', marginTop: '20px', marginBottom: '-8px'}} >GET READY TO</h1>
                <h1 className='explore' style={{fontSize: '66px', margin: '-24px'}}>EXPLORE</h1>
                <h1 style={{fontSize: '34px', marginBottom: '10px'}}>MORE. TOGETHER.</h1>
            </div> */}

            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "30vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '400px', gap:'10px', alignItems: 'center'}}>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                        <label>Full Name</label>
                        <input type="text" id="Name" style={{marginLeft: '10px', marginRight:'45px',width:"50%", height:'27px'}} /> 
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                        <label>Company Email</label>
                        <input type="email" id='email' style={{marginLeft: '10px',marginRight:'45px', width:"50%", height:'27px'}} />
                    </div>


                    <div id='parent' style={{width:"100%", display: 'flex', flexDirection: 'column'}}>
                        <div  style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                            <label>Phone</label>
                            <input type="number" id='no' style={{marginLeft: '10px', marginRight:'45px', marginBottom:'15px', width:"50%", height:'27px'}} />
                        </div>
                    </div>

                    <button ref={buttonRef} className="grab" style={{width:"180px", marginTop: '30px', margin: '10px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', fontSize:'15px'}} onClick={HandleSubmit}>LOGIN</button>
                </div>
                
            </div>
        </div>
    )
}

export default Registration;
