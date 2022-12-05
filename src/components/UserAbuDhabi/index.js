import { useEffect } from "react"
import { useState } from "react"
import firebase from '../../firbase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import './UserAbuDhabi.css';
import { useNavigate } from 'react-router-dom';
 
const UserAbuDhabi= () => {
    const [user, setUser] = useState([])
    const [file, setFile] = useState("");
    const [userID, setUserID] = useState([])
    const [imageList, setImageList] = useState([]);
    const storage = getStorage();
    var storagePath = 'uploads/' + file.name ;
    const storageRef = ref(storage, storagePath);

    const imageListRef = ref(storage, storagePath);
var count = 0
    useEffect(() => {
        if(count === 0){
        const Location = firebase.firestore().collection("Location").doc('AbuDhabi');
        // eslint-disable-next-line
        const Cars = Location.collection('Cars').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            setUserID(current => [...current, doc.id])
            setUser(current => [...current, doc.data()]);
        });
        console.log(user)
        count += 1;
        })}
    
    count += 1;}
    , []);

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

    const Location = firebase.firestore().collection("Location").doc('AbuDhabi');
    // eslint-disable-next-line
    const Cars = Location.collection('Cars').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        setUser(current => [...current, doc.data()]);
    });

    console.log(user)

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

    const navigate = useNavigate();

    function UserNav(v){
        navigate(v);

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

export default UserAbuDhabi




