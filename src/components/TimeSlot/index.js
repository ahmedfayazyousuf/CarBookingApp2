import { useEffect } from "react"
import { useState } from "react"
import firebase from '../../firbase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import ReactTimeslotCalendar from 'react-timeslot-calendar';
import moment from 'moment';
import {useLocation} from 'react-router-dom';
import { useParams } from "react-router-dom";

const TimeSlot = () => {
    const [user, setUser] = useState([])
    const [file, setFile] = useState("");
    const location = useLocation();
    const { id } = useParams();

    console.log(location.state.uid)
    const getCars = async () =>{
        


        // await axios.get("http://localhost:4000/user_accepted").then(res => {
        //     console.log(res.data);
        //     setUser([res.data]); 
        // });
    //     const res = await fetch(`http://localhost:4000/user_accepted`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })

    // const data = await res.json();
    // setUser(data)



    const Location = firebase.firestore().collection("Cars").doc(`${location.state.car}`);
    // eslint-disable-next-line
    const Cars = Location.collection('models').doc(`${id}`).collection('timeslot').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        Location.collection('models').doc(`${id}`).collection('timeslot').doc(`${doc.id}`).get().then((doc2)=>{
            console.log()
            if(doc2.data().available===0){
                document.getElementById(`${doc.id}`).remove();
            }
        })
        setUser(current => [...current, doc.data()]);
    });


    })

    // console.log(Cars)
    }
    var count = 0;
    useEffect(()=>{

        if(count===0)
        getCars();

        count++;
        // eslint-disable-next-line
    },[])

    function popup(){
        var popup = document.getElementById("popup").style
        popup.display = "flex";
        popup.opacity = 1;
        popup.zIndex = 100;
 
     }

     function handleChange(event) {

        setFile(event.target.files[0]);
    }
    let slots = [
        { start: new Date(2022, 12,11, 13), end: new Date(2022, 12, 11, 14) }
        ]

// const disabledDateRanges = events.map(range => ({
//     start: new Date(range.start),
//     end: new Date(range.end)
// }));

        function Handleclick(e){
            console.log(user)
            const Location = firebase.firestore().collection("Cars").doc(`${location.state.car}`);
            const User = firebase.firestore().collection("Users").doc(`${location.state.uid}`);
            Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).get().then((doc2)=>{
                if(doc2.data().available !== 0){
                    Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).update({available : firebase.firestore.FieldValue.increment(-1)})
                    User.update({
                        Timeslot: e,
                        Car: `${location.state.car}`,
                        Model: `${id}`,
                    });
                }else{
                    console.log("oops it got booked")
                }
            })
            
        }
    
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            height:"100vh",
            justifyContent:"center",
            alignItems:"center"
        }}>,
            <div style={{
            display:"flex",
            flexDirection:"column",
            height:"50%",
            justifyContent:"center",
            alignItems:"center"
        }}>
                <h1 style={{color:"white"}}>Cars Available</h1>
                {/* <table style={{color:"white"}}>
                <thead>
                    <tr>
                        <th>Car</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => {
                        return <tr key={user.name}>
                        <td>{user.name}</td>
                        <td>{user.model}</td>
                        </tr> 
                    })}
                </tbody>
            </table> */}

            {/* {user.map((user) => {
                        return <button>

                        <span>{user.name}</span>
                        <span>{user.model}</span>
                        </button> 
                    })} */}
                    <button id="timeslot9_10" onClick={() => {Handleclick("timeslot9_10")}}>9-10</button>
                    <button id="timeslot10_11" onClick={() => {Handleclick("timeslot10_11")}}>10-11</button>
                    <button id="timeslot11_12" onClick={() => {Handleclick("timeslot11_12")}}>11-12</button>
                    <button id="timeslot12_13" onClick={() => {Handleclick("timeslot12_13")}}>12-13</button>
                    <button id="timeslot13_14" onClick={() => {Handleclick("timeslot13_14")}}>13-14</button>
                    <button id="timeslot14_15" onClick={() => {Handleclick("timeslot14_15")}}>14-15</button>
                    <button id="timeslot15_16" onClick={() => {Handleclick("timeslot15_16")}}>15-16</button>
                    <button id="timeslot16_17" onClick={() => {Handleclick("timeslot16_17")}}>16-17</button>
                    <button id="timeslot17_18" onClick={() => {Handleclick("timeslot17_18")}}>17-18</button>
                    
            </div>

           
        </div>
    )
}

export default TimeSlot