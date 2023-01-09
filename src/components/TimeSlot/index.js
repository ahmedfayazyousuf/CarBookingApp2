import NissanLogo from '../nissanlogo.png';
import GetReady from '../getready.png';
import { useEffect } from "react"
import { useState } from "react"
import firebase from '../../firbase'
import "react-datepicker/dist/react-datepicker.css"
import {useLocation} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const TimeSlot = () => {
    const [ccount, setCcount] = useState(0);
    const [user, setUser] = useState([])
    const [file, setFile] = useState("");
    const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [dinner, setDinner] = useState('');
    const [timeslot, setTimeslot] = useState('');
    const [car, setCar] = useState('');
    const [model, setModel] = useState('');
    const [email, setEmail] = useState('');
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

    var cccount = 0

//     if(id === 'Z' || id==='Nismo370z'){
//         const node = document.createElement("p");
//         node.style.color = "red";
//         node.style.fontSize = "10px";
//         node.style.marginRight = "10px";
//         node.innerHTML = "No Timeslots Available";
// document.getElementById(`slotparent`).appendChild(node);

//     }





    const Location = firebase.firestore().collection("Cars").doc(`${location.state.car}`);
    // eslint-disable-next-line
    const Cars = Location.collection('models').doc(`${id}`).collection('timeslot').get().then((querySnapshot) => {
        var count = 0;
    querySnapshot.forEach((doc) => {
        Location.collection('models').doc(`${id}`).collection('timeslot').doc(`${doc.id}`).get().then((doc2)=>{
            console.log()
            if(doc2.data().available<=0){
                document.getElementById(`${doc.id}`).disabled = true;
                document.getElementById(`${doc.id}`).style.display = "none";
                // document.getElementById(`${doc.id}`).remove();
                setCcount(ccount+1)
            }
        })

        console.log(count);

        

        setUser(current => [...current, doc.data()]);
    });


    }).then(()=>{
     
        if(ccount === 8){
           
        }
    })

    const Cars2 = Location.collection('models').doc(`${id}`).collection('timeslot').where("available", "==", 0).get().then((doc)=>{
        console.log(doc.size)
        if(doc.size === 8){
                    const node = document.createElement("p");
        node.style.color = "red";
        node.style.fontSize = "10px";
        node.style.marginRight = "10px";
        node.innerHTML = "No Timeslots Available";
document.getElementById(`slotparent`).appendChild(node);
        }
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

            console.log()

            if(e === 'timeslot10_11'){
                document.getElementById(e).style.background = "rgb(200, 197, 197)";
      
                document.getElementById('timeslot11_12').style.background = "transparent";
                document.getElementById('timeslot12_13').style.background = "transparent";
                document.getElementById('timeslot13_14').style.background = "transparent";
                document.getElementById('timeslot14_15').style.background = "transparent";
                document.getElementById('timeslot15_16').style.background = "transparent";
                document.getElementById('timeslot16_17').style.background = "transparent";
                document.getElementById('timeslot17_18').style.background = "transparent";
                setTime('timeslot10_11');
    
            }

            if(e === 'timeslot11_12'){
                document.getElementById(e).style.background = "rgb(200, 197, 197)";
                document.getElementById('timeslot10_11').style.background = "transparent";
      
                document.getElementById('timeslot12_13').style.background = "transparent";
                document.getElementById('timeslot13_14').style.background = "transparent";
                document.getElementById('timeslot14_15').style.background = "transparent";
                document.getElementById('timeslot15_16').style.background = "transparent";
                document.getElementById('timeslot16_17').style.background = "transparent";
                document.getElementById('timeslot17_18').style.background = "transparent";
                setTime('timeslot11_12');
    
            }

            if(e === 'timeslot12_13'){
                document.getElementById(e).style.background = "rgb(200, 197, 197)";
                document.getElementById('timeslot10_11').style.background = "transparent";
                document.getElementById('timeslot11_12').style.background = "transparent";
      
                document.getElementById('timeslot13_14').style.background = "transparent";
                document.getElementById('timeslot14_15').style.background = "transparent";
                document.getElementById('timeslot15_16').style.background = "transparent";
                document.getElementById('timeslot16_17').style.background = "transparent";
                document.getElementById('timeslot17_18').style.background = "transparent";
                setTime('timeslot12_13');
    
            }

            if(e === 'timeslot13_14'){
                document.getElementById(e).style.background = "rgb(200, 197, 197)";
                document.getElementById('timeslot10_11').style.background = "transparent";
                document.getElementById('timeslot11_12').style.background = "transparent";
                document.getElementById('timeslot12_13').style.background = "transparent";
      
                document.getElementById('timeslot14_15').style.background = "transparent";
                document.getElementById('timeslot15_16').style.background = "transparent";
                document.getElementById('timeslot16_17').style.background = "transparent";
                document.getElementById('timeslot17_18').style.background = "transparent";
                setTime('timeslot13_14');
    
            }

            if(e === 'timeslot14_15'){
                document.getElementById(e).style.background = "rgb(200, 197, 197)";
                document.getElementById('timeslot10_11').style.background = "transparent";
                document.getElementById('timeslot11_12').style.background = "transparent";
                document.getElementById('timeslot12_13').style.background = "transparent";
                document.getElementById('timeslot13_14').style.background = "transparent";
      
                document.getElementById('timeslot15_16').style.background = "transparent";
                document.getElementById('timeslot16_17').style.background = "transparent";
                document.getElementById('timeslot17_18').style.background = "transparent";
                setTime('timeslot14_15');
    
            }

            if(e === 'timeslot15_16'){
                document.getElementById(e).style.background = "rgb(200, 197, 197)";
                document.getElementById('timeslot10_11').style.background = "transparent";
                document.getElementById('timeslot11_12').style.background = "transparent";
                document.getElementById('timeslot12_13').style.background = "transparent";
                document.getElementById('timeslot13_14').style.background = "transparent";
                document.getElementById('timeslot14_15').style.background = "transparent";
      
                document.getElementById('timeslot16_17').style.background = "transparent";
                document.getElementById('timeslot17_18').style.background = "transparent";
                setTime('timeslot15_16');
    
            }

            if(e === 'timeslot16_17'){
                document.getElementById(e).style.background = "rgb(200, 197, 197)";
                document.getElementById('timeslot10_11').style.background = "transparent";
                document.getElementById('timeslot11_12').style.background = "transparent";
                document.getElementById('timeslot12_13').style.background = "transparent";
                document.getElementById('timeslot13_14').style.background = "transparent";
                document.getElementById('timeslot14_15').style.background = "transparent";
                document.getElementById('timeslot15_16').style.background = "transparent";
      
                document.getElementById('timeslot17_18').style.background = "transparent";
                setTime('timeslot16_17');
    
            }

            if(e === 'timeslot17_18'){
                document.getElementById(e).style.background = "rgb(200, 197, 197)";
                document.getElementById('timeslot10_11').style.background = "transparent";
                document.getElementById('timeslot11_12').style.background = "transparent";
                document.getElementById('timeslot12_13').style.background = "transparent";
                document.getElementById('timeslot13_14').style.background = "transparent";
                document.getElementById('timeslot14_15').style.background = "transparent";
                document.getElementById('timeslot15_16').style.background = "transparent";
                document.getElementById('timeslot16_17').style.background = "transparent";
      
                setTime('timeslot17_18');
    
            }


            
            
            
        }

        async function Handlesubmit(e){
            const Location = firebase.firestore().collection("Cars").doc(`${location.state.car}`);
            const User = firebase.firestore().collection("Users").doc(`${location.state.uid}`);

            if(location.state.count === 0){
                console.log(location.state.car)
                Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).get().then(async (doc2)=>{
                    if(doc2.data().available !== 0){

                        Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).update({available : firebase.firestore.FieldValue.increment(-1)})
                        await User.update({
                            Timeslot: e,
                            Car: `${location.state.car}`,
                            Model: `${id}`,
                            Count: firebase.firestore.FieldValue.increment(1)
                        });

                        await User.get().then((doc) =>{
                            try {
                                var data = doc.data()
                                var name = data.Name
                                var dinner = data.Dinner
                                var timeslot = document.getElementById(e).value
                                var car = location.state.car
                                var model = id
                                var email = data.Email

                                if(car === 'Infinity'){
                                    car = 'Infiniti'
                                }

                                if(model === 'Nismo370z'){
                                    model = 'Nismo 370z'
                                }

                                setName(name);
                                setDinner(dinner)
                                setTimeslot(timeslot)
                                setCar(car)
                                setModel(model)
                                setEmail(email)
                                console.log(timeslot)
                                console.log(email);
                                if(dinner === 'no'){
                                    axios.post("https://imagersvpserver.azurewebsites.net/send_book", {
                                    name, dinner, timeslot, car, model, email
                                  })
                                   }else{
                                    console.log(email)
                                       axios.post("https://imagersvpserver.azurewebsites.net/send_dinnerbook", {
                                           name, dinner, timeslot, car, model, email
                                         })
                                   }
                                
                           } catch (error) {
                               console.log(error);
                           }
                            
                        }).then(()=>{
         
                        }
                        
                        )

                        
                    }else{
                        console.log("oops it got booked")
                    }
                }).then(()=>{
                   navigate("/success",{state:{uid:location.state.uid,count:location.state.count,dinner:dinner,car:car,model:model,email:email,timeslot:timeslot,name:name}});
                })
                // navigate("/success",{state:{uid:location.state.uid,count:location.state.count,dinner:dinner,car:car,model:model,email:email,timeslot:timeslot,name:name}});
            }
            

            else{
                console.log(location.state.car)
                Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).get().then(async (doc2)=>{
                    if(doc2.data().available !== 0){
                        Location.collection('models').doc(`${id}`).collection('timeslot').doc(e).update({available : firebase.firestore.FieldValue.increment(-1)})
                        await User.update({
                            Timeslot2: e,
                            Car2: `${location.state.car}`,
                            Model2: `${id}`,
                            Count: firebase.firestore.FieldValue.increment(1)
                        });

                        await User.get().then((doc) =>{
                            try {
                                var data = doc.data()
                                var name = data.Name
                                var dinner = data.dinner
                                var timeslot = document.getElementById(e).value
                                var car = location.state.car
                                var model = id
                                var email = data.Email

                                if(car === 'Infinity'){
                                    car = 'Infiniti'
                                }

                                if(model === 'Nismo370z'){
                                    model = 'Nismo 370z'
                                }

                                setName(name);
                                setDinner(dinner)
                                setTimeslot(timeslot)
                                setCar(car)
                                setModel(model)
                                setEmail(email)
                                console.log(timeslot)

                                if(dinner === 'no'){
                                    console.log(email)
                                 axios.post("https://imagersvpserver.azurewebsites.net/send_book", {
                                 name, dinner, timeslot, car, model, email
                               })
                                }else{
                                    console.log(email)
                                    axios.post("https://imagersvpserver.azurewebsites.net/send_dinnerbook", {
                                        name, dinner, timeslot, car, model, email
                                      })
                                }

                           
                           } catch (error) {
                               console.log(error);
                           }
                            
                        }).then(()=>{
                      
                        });
                    }else{
                        console.log("oops it got booked")
                    }
                }).then(()=>{
                    navigate("/success",{state:{uid:location.state.uid,count:location.state.count,dinner:dinner,car:car,model:model,email:email,timeslot:timeslot,name:name}});
                })
                // navigate("/success",{state:{uid:location.state.uid,count:location.state.count,dinner:dinner,car:car,model:model,email:email,timeslot:timeslot,name:name}});
            }
        }
    
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={NissanLogo} alt="Logo" style={{width: '20vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={GetReady} alt="Logo" style={{width: '40vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p style={{fontSize: '15px', marginTop: '10px'}} >Please select a time slot for your test drive.</p>
            </div>

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}} id='slotparent'>
                    {/* <button className="grab" id="timeslot9_10" onClick={() => {Handleclick("timeslot9_10")}} value="9:AM - 10 AM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent'}}>9:00 AM</button> */}
                    <button className="grab" id="timeslot10_11" onClick={() => {Handleclick("timeslot10_11")}} value="10 AM - 11 AM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>10:00 AM</button>
                    <button className="grab" id="timeslot11_12" onClick={() => {Handleclick("timeslot11_12")}} value="11 AM - 12 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>11:00 AM</button>
                    <button className="grab" id="timeslot12_13" onClick={() => {Handleclick("timeslot12_13")}} value="12 PM - 1 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>12:00 PM</button>
                    <button className="grab" id="timeslot13_14" onClick={() => {Handleclick("timeslot13_14")}} value="1 PM - 2 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>1:00 PM</button>
                </div>

                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '70%'}}>
                    <button className="grab" id="timeslot14_15" onClick={() => {Handleclick("timeslot14_15")}} value="2 PM - 3 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>2:00 PM</button>
                    <button className="grab" id="timeslot15_16" onClick={() => {Handleclick("timeslot15_16")}} value="3 PM - 4 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>3:00 PM</button>
                    <button className="grab" id="timeslot16_17" onClick={() => {Handleclick("timeslot16_17")}} value="4 PM - 5 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>4:00 PM</button>
                    <button className="grab" id="timeslot17_18" onClick={() => {Handleclick("timeslot17_18")}} value="5 PM - 6 PM" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'black', backgroundColor: 'transparent', border:'1px solid black'}}>5:00 PM</button>
                </div>

                <button className="grab" style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}} onClick={() => {Handlesubmit(time)}} >Next</button>

 
            </div>
        </>
    )
}

export default TimeSlot