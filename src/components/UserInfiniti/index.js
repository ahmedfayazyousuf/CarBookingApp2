import { useEffect } from "react"
import { useState } from "react"
import firebase from '../../firbase'
import { getStorage } from "firebase/storage";
import './UserInfiniti.css';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
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
        navigate(v,{state:{uid:location.state.uid,car:"Infinity"}});

    }

    
    return(
        <div style={{display:"flex",flexDirection:"column",height:"100vh",alignItems:"center"}}>,
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
        </div>
    )
}

export default UserInfiniti




