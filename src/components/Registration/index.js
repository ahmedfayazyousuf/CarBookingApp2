import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firbase';
import '../All.css';
import NissanLogo from '../nissanlogo.png';
import { useParams } from "react-router-dom";

const Registration = () =>{
    const navigate = useNavigate();
    const { id } = useParams();


    function HandleSubmit(){
        
        const Users = firebase.firestore().collection("Users");
        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;
        console.log(Email)

       
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
                        node.style.marginLeft = "70px";
                        node.innerHTML = "Amount of Booking Exceeded"
                        document.getElementById('parent').appendChild(node);
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
                <img src={NissanLogo} alt="Logo" style={{width: '25vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <h1 style={{fontSize: '43px', marginTop: '20px', marginBottom: '-8px'}} >GET READY TO</h1>
                <h1 className='explore' style={{fontSize: '66px', margin: '-24px'}}>EXPLORE</h1>
                <h1 style={{fontSize: '34px', marginBottom: '10px'}}>MORE. TOGETHER.</h1>
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


                    <div id='parent' style={{width:"100%", display: 'flex', flexDirection: 'column'}}>
                        <div  style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%'}}>
                            <label>Phone</label>
                            <input type="number" id='no' style={{marginLeft: '10px', width:"80%"}} />
                        </div>
                    </div>

                    <button className="grab" style={{width:"150px", marginTop: '30px', margin: '10px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black'}} onClick={HandleSubmit}>Login</button>
                </div>
                
            </div>
        </div>
    )
}

export default Registration;
