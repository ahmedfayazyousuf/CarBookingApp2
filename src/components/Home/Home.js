import React from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => { 
    const navigate = useNavigate();
    function Handleclick(v){
    navigate(v);
    }

    return (
        <>
            <div className="form-body" style={{height:"100vh"}}>
                <div className="form-items">
                    <div class="container" className="profilepanel" style={
                        {
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center",
                            justifyContent:"center",
                            height:"100vh"

                    }}>
                        <button style={{width:"20%"}} onClick= {() => Handleclick('/Ajman')}>
                            Ajman
                        </button>

                        <button style={{width:"20%"}} onClick= {() => Handleclick('/Sharjah')}>
                            Sharjah
                        </button>

                        <button style={{width:"20%"}} onClick= {() => Handleclick('/Dubai')}>
                            Dubai
                        </button>

                        <button style={{width:"20%"}} onClick= {() => Handleclick('/AbuDhabi')}>
                            Abu Dhabi
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home