import NissanLogo from '../nissanlogo.png';
import { useEffect } from "react"
import { useState } from "react"
import firebase from '../../firbase'
import { getStorage } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const UserNissan= () => {
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
        const Location = firebase.firestore().collection("Cars").doc('Nissan');
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

        const Location = firebase.firestore().collection("Cars").doc('Nissan');
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
        navigate(v,{state:{uid:location.state.uid,car:"Nissan",count:location.state.count}});

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
                <p style={{fontSize: '15px', marginTop: '10px'}}>Please select a car to test drive</p>
            </div>

        <div style={{display:"flex",flexDirection:"column",height:"100vh",alignItems:"center"}}>,
            <div style={{display:"flex",flexDirection:"column",height:"50%",alignItems:"center"}}>
                <div className="cards">
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
        </div> 
        </>
    )
}

export default UserNissan




