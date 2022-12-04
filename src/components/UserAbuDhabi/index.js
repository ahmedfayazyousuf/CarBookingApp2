import { useEffect } from "react"
import { useState } from "react"
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
                                        <div className="fab fa-facebook"></div>
                                            <h2>Nissan</h2>
                                            <p>Model Z</p>
                                            <a href="#">Read More</a>
                                    </div>
                                            
                                            
                                    <div className="content content-2">
                                        <div className="fab fa-whatsapp"></div>
                                            <h2>Nissan</h2>
                                            <p>Model X</p>
                                            <a href="#">Read More</a>
                                    </div>


                                    <div className="content content-3">
                                        <div className="fab fa-youtube"></div>
                                            <h2>Nissan</h2>
                                            <p>Model Y</p>
                                            <a href="#">Read More</a>
                                    </div>

                            </div>
                        </div>
            
            
            
            </div>
           
        </div>
    )
}

export default UserAbuDhabi

