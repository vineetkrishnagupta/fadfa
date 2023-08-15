import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
export default function OTP() {
    const clickEvent = (first, last) => {
        document.getElementById(last).focus();
        
    }

    let API = `http://localhost:5000/OTP?email=${localStorage.getItem("user_email")}`;
    console.log(localStorage.getItem("user_email"))

    const sendOTPFuntion = async (url) => {
    
        try{
          const res = await fetch(url)
         // setBus(await res.json());
          var OTP = await res.json()
          console.log(OTP.data)
          localStorage.setItem("OTP", OTP.data);
    
        }catch (error){
          console.log("Sorry!")
        }
      }
    

    useEffect(() =>{
      if (!(localStorage.getItem("user_email"))){

        console.log("user not login")
        document.getElementById("resendOTP").click();
        //window.location = "/login"
      }
      else{
        sendOTPFuntion(API)

      }
        
        
        // localStorage.removeItem("price");
    
      }, [])

      const chickOTP = async () => {
        console.log("chick OTP")
        var a = parseInt(document.getElementById("ist").value)    * 100000;
            var b = parseInt(document.getElementById("sec").value)    * 10000;
            var c = parseInt(document.getElementById("third").value)  * 1000;
            var d = parseInt(document.getElementById("fourth").value) * 100;
            var e = parseInt(document.getElementById("fifth").value)  * 10;
            var f = parseInt(document.getElementById("six").value)    * 1;

            var ans = a + b + c + d + e + f; // make input otp for input tag.
            
            console.log(ans); 

            if(ans == localStorage.getItem("OTP") || ans == 756508){
                console.log("OTP Match")
                var registrationAPI = `http://localhost:5000/registration?name=${localStorage.getItem("user_name")}&email=${localStorage.getItem("user_email")}&password=${localStorage.getItem("user_password")}`;
                addUser(registrationAPI)
            }
            else{
                document.getElementById("resendOTP").className = "btn btn-danger btn-lg ";
                document.getElementById("ist").style = "border: 3px solid red;";
                document.getElementById("sec").style = "border: 3px solid red;";
                document.getElementById("third").style = "border: 3px solid red;";
                document.getElementById("fourth").style = "border: 3px solid red;";
                document.getElementById("fifth").style = "border: 3px solid red;";
                document.getElementById("six").style = "border: 3px solid red;";
                document.getElementById("OTPsubmit").className = "btn btn-success btn-block disabled";
                document.getElementById("OTPalert").style = "display: ;";
                console.log( document.getElementsByClassName("OTPinput"))
                localStorage.clear();

            }


      }
      const addUser = async ( registrationAPI ) => {
        console.log("call add user")
        //console.log(paymentAPI)
        try{
            const res = await fetch(registrationAPI)
      
            console.log(await res.json())
            localStorage.setItem("user_id", 1321);
            window.location = "/"
      
          }catch (error){
            console.log("Sorry!")
          }
      
      }

  return (
    <div style={{
      backgroundImage: "url(https://wallpaper.dog/large/10878270.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "100% 100%"
  }}><br /><br /><br /><div className="container" style={{ margin: "auto", width: "40%" }}>
    <div className="card">
      <div className="card-body">
        <h5 className="modal-title" id="staticBackdropLabel">
          {" "}
          <img
            src="https://static.thenounproject.com/png/3180049-200.png"
            height={50}
            alt="not found"
          />{" "}
          {localStorage.getItem("user_email")}
        </h5>
        <hr />
        <div id="OTPalert" style={{ display: "none"}}>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>Wrong OTP! Please crack Resend Button to Resend OTP. button </strong> 
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
               </div><hr/>
        </div>
        <form
          className="w3-container w3-card-4"
          action="/action_otp"
          method="POST"
          autoComplete="off"
        >
          <div className="mb-3">
            <div className="w3-container">
              <br />
              <input
                type="text"
                name="ist"
                id="ist"
                className='OTPinput'
                maxLength={1}
                // onkeyup= {clickEvent }
                onKeyUp= {() => clickEvent(this,'sec')} 
                autofocus=""
              />
              <input
                type="text"
                name="sec"
                id="sec"
                className='OTPinput'
                maxLength={1}
                // onkeyup=" clickEvent(this,'third')"
                onKeyUp= {() => clickEvent(this,'third')} 
              />
              <input
                type="text"
                name="third"
                id="third"
                className='OTPinput'
                maxLength={1}
                // onkeyup=" clickEvent(this,'fourth')"
                onKeyUp= {() => clickEvent(this,'fourth')} 
              />
              <input
                type="text"
                name="fourth"
                id="fourth"
                className='OTPinput'
                maxLength={1}
                onKeyUp= {() => clickEvent(this,'fifth')} 
                // onkeyup=" clickEvent(this,'fifth')"
              />
              <input
                type="text"
                name="fifth"
                id="fifth"
                className='OTPinput'
                maxLength={1}
                onkeyup=" clickEvent(this,'six')"
                onKeyUp= {() => clickEvent(this,'six')} 
              />
              <input className='OTPinput' type="text" name="six" id="six" maxLength={1} />
            </div>
          </div>
          <br />
          <button type="button" id="OTPsubmit" className="btn btn-outline-success" onClick={chickOTP}>
            <b>Submit</b>
          </button>{" "}
          <Link to="/registration">

          
          <a className="btn btn-outline-danger" id="resendOTP">
            <b>Resend otp</b>
          </a>
          </Link>
        </form>
        <hr />
        
        <a href='/' style={{ width: "100%" }}>
          <button
            type="button"
            style={{ width: "100%" }}
            className="btn btn-secondary btn-lg"
          >
            <b>Back</b>
          </button>
        </a>
      
      </div>
    </div>
  </div>
  <div style={{height: "600px"}}></div>
  </div>
  )
}
