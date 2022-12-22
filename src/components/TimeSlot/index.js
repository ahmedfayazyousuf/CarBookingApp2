import NissanLogo from '../nissanlogo.png';
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
import { useNavigate } from 'react-router-dom';

const TimeSlot = () => {
    const [user, setUser] = useState([])
    const [file, setFile] = useState("");
    const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();

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
                document.getElementById(`${doc.id}`).disabled = true;
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

            if(location.state.count === 0){
                Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).get().then((doc2)=>{
                    if(doc2.data().available !== 0){
                        Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).update({available : firebase.firestore.FieldValue.increment(-1)})
                        User.update({
                            Timeslot: e,
                            Car: `${location.state.car}`,
                            Model: `${id}`,
                            Count: firebase.firestore.FieldValue.increment(1)
                        });
                    }else{
                        console.log("oops it got booked")
                    }
                }).then(()=>{
                    navigate("/success",{state:{uid:location.state.uid,count:location.state.count}});
                })
            }

            else{
                Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).get().then((doc2)=>{
                    if(doc2.data().available !== 0){
                        Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).update({available : firebase.firestore.FieldValue.increment(-1)})
                        User.update({
                            Timeslot2: e,
                            Car2: `${location.state.car}`,
                            Model2: `${id}`,
                            Count: firebase.firestore.FieldValue.increment(1)
                        });
                    }else{
                        console.log("oops it got booked")
                    }
                }).then(()=>{
                    navigate("/success",{state:{uid:location.state.uid,count:location.state.count}});
                })
            }
            
            
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

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p style={{fontSize: '15px', marginTop: '10px'}} >Please select a time slot for your test drive.</p>
            </div>

            <div className="slotparent" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}}>
                    <button className="grab" id="timeslot9_10" onClick={() => {Handleclick("timeslot9_10")}} style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>9:00 AM</button>
                    <button className="grab" id="timeslot10_11" onClick={() => {Handleclick("timeslot10_11")}} style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>10:00 AM</button>
                    <button className="grab" id="timeslot11_12" onClick={() => {Handleclick("timeslot11_12")}} style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>11:00 AM</button>
                    <button className="grab" id="timeslot12_13" onClick={() => {Handleclick("timeslot12_13")}} style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>12:00 PM</button>
                    <button className="grab" id="timeslot13_14" onClick={() => {Handleclick("timeslot13_14")}} style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>1:00 PM</button>
                </div>

                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}}>
                    <button className="grab" id="timeslot14_15" onClick={() => {Handleclick("timeslot14_15")}} style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>2:00 PM</button>
                    <button className="grab" id="timeslot15_16" onClick={() => {Handleclick("timeslot15_16")}} style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>3:00 PM</button>
                    <button className="grab" id="timeslot16_17" onClick={() => {Handleclick("timeslot16_17")}} style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>4:00 PM</button>
                    <button className="grab" id="timeslot17_18" onClick={() => {Handleclick("timeslot17_18")}} style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>5:00 PM</button>
                </div>

                <button className="grab" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}}>Next</button>


            </div>
        </>
    )
}

export default TimeSlot