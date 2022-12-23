import { useEffect } from "react"
import { useState } from "react"
import firebase from '../../firbase'
import { getStorage } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

import NissanLogo from '../nissanlogo.png';
import Banner from './Banner.png';

import Q60_2 from './InfinitiCars/Q50 2.png';
// import Car_Not_In_UI from './InfinitiCars/Q50.png';
import Q60 from './InfinitiCars/Q60.png';
import QX50 from './InfinitiCars/QX50.png';
import QX55 from './InfinitiCars/QX55.png';
import QX60 from './InfinitiCars/QX60.png';
import QX80 from './InfinitiCars/QX80.png';

const UserInfiniti= () => {
    const [user, setUser] = useState([])
    // eslint-disable-next-line 
    const [file, setFile] = useState("");
    // eslint-disable-next-line
    const [userID, setUserID] = useState([])
    // eslint-disable-next-line
    const storage = getStorage();
    // eslint-disable-next-line
    var storagePath = 'uploads/' + file.name ;
    const location = useLocation();
var count = 0
    useEffect(() => {
        if(count === 0){
        const Location = firebase.firestore().collection("Cars").doc('Infinity');
        // eslint-disable-next-line
        const Cars = Location.collection('models').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            setUserID(current => [...current, doc.id]);
            setUser(current => [...current, doc.data()]);
        });
        count += 1;
        })}
        // eslint-disable-next-line
    count += 1;}
    , []);

    const getCars = async () =>{

        const Location = firebase.firestore().collection("Cars").doc('Infinity');
    // eslint-disable-next-line
    const Cars = Location.collection('models').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        setUser(current => [...current, doc.data()]);
    });


    })

    // console.log(Cars)
    }
    // eslint-disable-next-line
    var count = 0;
    useEffect(()=>{

        if(count===0)
        getCars();

        count++;
        // eslint-disable-next-line
    },[])

    const navigate = useNavigate();

    function UserNav(v){
        navigate(v,{state:{uid:location.state.uid,car:"Infinity",count:location.state.count}});

    }

    function carClick(e){


    }

    
    return(

        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={NissanLogo} alt="Logo" style={{width: '20vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={Banner} alt="Logo" style={{width: '40vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', marginTop:'30px', marginBottom:'25px', padding: '0'}} >
                <p>Please select a car to test drive</p>
            </div>  

            <div className="rower" style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
    
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <div id='QX80' className="content content-1" onClick={()=>{carClick('QX80')}} style={{padding: '0', margin: '10px'}}>
                        <img src={QX80} alt="Logo" style={{width: '20vh'}}/>
                        <p style={{fontSize: '10px'}}>QX80</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <div id='QX60' className="content content-1" onClick={()=>{carClick('QX60')}} style={{padding: '0', margin: '10px'}}>
                        <img src={QX60} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>QX60</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <div id='QX55' className="content content-1" onClick={()=>{carClick('QX55')}} style={{padding: '0', margin: '10px'}}>
                        <img src={QX55} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>QX55</p>
                    </div>
                </div>
                
            </div>

            <div className="rower" style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
    
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0', margin: '0'}}>
                    <div id='Q60' className="content content-1" onClick={()=>{carClick('Q60')}} style={{padding: '0', margin: '10px'}}>
                        <img src={Q60} alt="Logo" style={{width: '20vh'}}/>
                        <p style={{fontSize: '10px'}}>Q60</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='Q60_2' className="content content-1" onClick={()=>{carClick('Q60_2')}} style={{padding: '0', margin: '10px'}}>
                        <img src={Q60_2} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>Q60</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='QX50' className="content content-1" onClick={()=>{carClick('QX50')}} style={{padding: '0', margin: '10px'}}>
                        <img src={QX50} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>QX50</p>
                    </div>
                </div>
                
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}}>
                <button className="grab" id='return' style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}}>Next</button>
            </div>

        </div>
        
    )
}

export default UserInfiniti

{/* <div style={{display:"flex",flexDirection:"column",height:"100vh",alignItems:"center"}}>,
            <div style={{display:"flex",flexDirection:"column",height:"50%",alignItems:"center"}}>
                <div className="cards">
                    <h1>Available Cars</h1>
                    <div className="services">
                        {user.map((user,index) => {
                            return <div className="content content-1">
                            <div className="fab"></div>
                                <img src={user.imageURL} alt="car" style={{height: '150px', width: '200px'}}/>
                                <h2>{user.name}</h2>
                                <p>{user.model}</p>
                                <button onClick= {() => UserNav(`/User/${userID[index]}`)}>BOOK</button>    
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div> */}


