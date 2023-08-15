import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
    const ShowPassword = () =>{
        var mp = document.getElementById("password");
                if (mp.type === "password") {
                mp.type = "text";
                } 
                else {
                mp.type = "password";
                }
    }
    
    const submit = async () => {
        console.log("Chick Submit Button")
        console.log(document.getElementById("email").value)
        console.log(document.getElementById("password").value)
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let API = `http://localhost:5000/login?email=${email}&password=${password}`;
        try{
            const res = await fetch(API)
            var data = await res.json()
            console.log(data[0]['_id']);

            //console.log(bus)
            localStorage.setItem("user_name", data[0]['name']);
            localStorage.setItem("user_email", data[0]['email']);
            localStorage.setItem("user_password", data[0]['password']);
            localStorage.setItem("user_id", data[0]['_id']);
            console.log(localStorage.getItem("user_name"))
            window.location = "/"

      
          }catch (error){
            document.getElementById("email").className = "form-control is-invalid";
            document.getElementById("password").className = "form-control is-invalid";
             

            document.getElementById("loginalert").style = "display: ;";

            console.log("Sorry!")
          }


    }
    return (
 
        
        <div style={{
            backgroundImage: "url(https://wallpaper.dog/large/10878270.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%"
        }}> <br /> <br /> <br /> <br />
            <div className="container" style={{ margin: "auto", width: "fit-content" }}>
                <center>
                    <img style={{ alignItems: "center" }} src=" " width={90} alt="" />
                </center>
            </div>
            <div className="container" style={{ margin: "auto", width: "fit-content" }}>
                <h3 style={{ alignItems: "center", marginRight: 200 }}>
                    <b>Good to see you again</b>
                </h3>
                <div className="card">
                    <div className="card-body">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            {" "}
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/users-vol-3/32/user-man-enter-login-signup-512.png"
                                height={50}
                                alt="not found"
                            />
                            <b id="logintext">Login</b>
                            
                        </h5><hr />
                        <div  id="loginalert" style={{ display: "none"}}>
                                  
                       
               <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>Please chick your email address and password. </strong>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
               </div>  <hr/>

                        </div>
                 
                        <form
                            action="action_login"
                            name="login"
                            autoComplete="off"
                            method="POST"
                        >
                             
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    <i className="bi bi-envelope-at-fill" style={{ fontSize: 18 }} />{" "}
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    defaultValue="gaurikasharma209@gmail.com"
                                    required=""
                                />
                                <label htmlFor="password" className="form-label">
                                    <i className="bi bi-key-fill" style={{ fontSize: 20 }} /> Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    defaultValue="gaurika@123"
                                    required=""
                                />
                                <div className="mb-3 form-check my-1">
                                    <input
                                        type="checkbox"
                                        className="form-check-input success"
                                        id="exampleCheck"
                                        onClick={ShowPassword}
                                    />
                                    <label className="form-check-label my-1" htmlFor="exampleCheck">
                                        Show Password
                                    </label>
                                </div>
                                <a href="forgetPassword.php" className="text-success">
                                    <div id="emailHelp" className="form-text text-success">
                                        Forget password.
                                    </div>
                                </a>
                            </div>
                            <button type="button" className="btn btn-outline-success" onClick={submit}>
                                <b>Submit</b>
                            </button>
                            <Link to="/registration">
                            <a  className="btn btn-outline-primary mx-2">
                                <b>Sign in</b>
                            </a>
                            
                            </Link>
                             
                        </form>
                        <hr />
                        <Link to="/">
                        <a style={{ width: "100%" }}>
                            <button
                                type="button"
                                style={{ width: "100%" }}
                                className="btn btn-secondary btn-lg"
                            >
                                <b>Back</b>
                            </button>
                        </a>
                        
                        </Link>
                       
                        
                    </div>
                    
                </div>
                 
            </div>
            <div style={{height: "400px"}}></div>
        </div> 
        
    )
}
