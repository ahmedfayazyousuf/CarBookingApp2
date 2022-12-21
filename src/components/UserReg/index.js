import { useNavigate } from 'react-router-dom';
import firebase from '../../firbase'

const UserReg = () =>{
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
            navigate("/Cars",{state:{uid:docRef.id}});
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        
    }
    return(
        <>
            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>
                <h1>Please Enter Your Details: -</h1>
                <input type="text" placeholder="Name" id="Name" style={{display:"flex", flexDirection:"column", width:"30%"}} /> 
                <input type="email" id='email' placeholder="Email" style={{display:"flex", flexDirection:"column", width:"30%"}} />
                <input type="number" id='no' placeholder="Mobile Number" style={{display:"flex", flexDirection:"column", width:"30%"}} /> 
                <button style={{width:"30%"}} onClick={HandleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default UserReg;
