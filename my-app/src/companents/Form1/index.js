import { useState } from "react";
// import image from "./sekil/aaaa.png";


import "./index.css"

function Form1({ onButtonClick }){

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [checkbox , setCheckbox] = useState(true)
    const [emailError , setEmailError] = useState("")
    const [passwordError , setPasswordError] = useState("")



    
    const handleClick = (e)=>{
        e.preventDefault()

        if(email.trim()===''){
            setEmailError("Mail  daxil edin")
        }
        if(password.trim()===''){
            setPasswordError("Password  daxil edin")
        }

        
        const data = {
            email,
            password,
            checkbox
        }
        console.log(data);
    }



    return(
        <section>
        <div className="container">
            <div className="header"> 
                <button className="btnregister">Register</button>
                <button className="btnlog">Log in</button>
            </div>
            <div className="sekil">
            {/* <img src={image} alt="" /> */}
            </div>
            <form onSubmit={handleClick}>

                <div className="inpt">

                    <input type="email" name="name" placeholder="Email adress" onChange={(e)=>{ setEmail(e.target.value); setEmailError("")}}/>
                    {emailError && <span className="errorMessage">{emailError}</span>}
                    <input type="password" name="name" placeholder=" Password" onChange={(e)=> {setPassword(e.target.value); setPasswordError("")}}/>
                    {passwordError && <span className="errorMessage">{passwordError}</span>}
                    
                </div>

                <button onClick={onButtonClick} className="form-btn" type="submit">Create accound</button>

                <div className="checkbox">
                    <input type="checkbox" defaultChecked={true}  name="checkbox"  onChange={(e)=> setCheckbox(e.target.checked)}/>
                    <label htmlFor="checkbox">Send me news and promotions</label>
                </div>
                

            </form>

            <span className="end" >By continuing I agre with the <a href="#">Therms & Conditions, Privacy Policy</a></span>
        </div>
        </section>
    )
}


export default Form1;
  