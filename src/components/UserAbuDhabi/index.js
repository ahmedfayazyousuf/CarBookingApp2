import { useEffect } from "react"
import { useState } from "react"
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import firebase from '../../firbase'
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './UserAbuDhabi.css';

const UserAbuDhabi= () => {
    const [user, setUser] = useState([])
    const [file, setFile] = useState("");

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

            {user.map((user) => {
                        return <button>
                        <span>{user.name}</span>
                        <span>{user.model}</span>
                        </button> 
                    })}
                        <div className="cards">
                            <h1>Available Cars</h1>
                            <div className="services">

                                    <div className="content content-1">
                                        <div className="fab"></div>
                                            <img src={image2} alt="car" style={{height: '150px', width: '200px'}}/>
                                            <h2>Nissan</h2>
                                            <p>SUNNY</p>
                                            <a href="#">Read More</a>
                                    </div>
                                            
                                            
                                    <div className="content content-1">
                                        <div className="fab"></div>
                                            <img src={image3} alt="car" style={{height: '150px', width: '200px'}}/>
                                            <h2>Nissan</h2>
                                            <p>PATROL</p>
                                            <a href="#">Read More</a>
                                    </div>


                                    <div className="content content-1">
                                        <div className="fab"></div>
                                            <img src={image1} alt="car" style={{height: '150px', width: '200px'}}/>
                                            <h2>Nissan</h2>
                                            <p>MAGNITE</p>
                                            <a href="#">Read More</a>
                                    </div>

                            </div>
                        </div>
            
            
            
            </div>
           
        </div>
    )
}

export default UserAbuDhabi

