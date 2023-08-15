import React, { useEffect, useState } from 'react'
import {Link, Navigate } from 'react-router-dom'
 
export default function BusAvailable() {
  let API = `http://localhost:5000/available/bus?from=${localStorage.getItem("bus_from_city")}&to=${localStorage.getItem("bus_to_city")}`;
  const [getBus, setBus] = useState([]);
  const [getPrice, setPrice] = useState('');
  const fecthApiData = async (url) => {
    
    try{
      const res = await fetch(url)
      setBus(await res.json());
      //console.log(bus)

    }catch (error){
      console.log("Sorry!")
      document.getElementById("notfound_bus").style = "display: ;";
    }
  }

  useEffect(() =>{
    fecthApiData(API)
    
    // localStorage.removeItem("price");

  }, [])

  const payBtn = () =>{
    console.log("click pay Btn")

    var cardNumber = document.getElementById('cardNumber').value
    var cardMonth = document.getElementById('cardMonth').value
    var cardYear = document.getElementById('cardYear').value
    var cvv = document.getElementById('cvv').value
    var cardHolder = document.getElementById('cardHolder').value   
    var exDate = cardMonth.toString()+'/'+cardYear.toString()

    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("exDate", exDate);
    localStorage.setItem("cvv", cvv);
    localStorage.setItem("cardHolder", cardHolder);

    var user_email = localStorage.getItem("user_email")
    var user_id = localStorage.getItem("user_id")

    var bus_from_city = localStorage.getItem("bus_from_city")
    var bus_to_city = localStorage.getItem("bus_to_city")
    var bus_departure_date = localStorage.getItem("bus_departure_date")
    var bus_return_date = localStorage.getItem("bus_return_date")

    var bus_number = localStorage.getItem("bus_number")
    var company_name = localStorage.getItem("company_name")
    var departure_address = localStorage.getItem("departure_address")
    var departure_time = localStorage.getItem("departure_time")
    var duration = localStorage.getItem("duration")
    var price = localStorage.getItem("price")
    var bas_capacity = localStorage.getItem("bas_capacity")
    

    var paymentAPI = `http://localhost:5000/bus/payment?cardNumber=${cardNumber}&exDate=${exDate}&cvv=${cvv}&cardHolder=${cardHolder}&bus_number=${bus_number}&company_name=${company_name}&departure_address=${departure_address}&departure_time=${departure_time}&duration=${duration}&price=${price}&bas_capacity=${bas_capacity}&user_id=${user_id}&user_email=${user_email}&from=${bus_from_city}&to=${bus_to_city}&gdate=${bus_departure_date}&rdate=${bus_return_date}`;

    document.getElementById("cardNumber").className = "form-control";
    document.getElementById("cardMonth").className = "form-control";
    document.getElementById("cardYear").className = "form-control";
    document.getElementById("cvv").className = "form-control";
    document.getElementById("cardHolder").className = "form-control";

    if(parseInt(cardNumber) < 100000000000 || cardNumber ==""){
      console.log("card number not valid")
      document.getElementById("cardNumber").className = "form-control is-invalid";
    }
    else if(parseInt(cardMonth) > 12 || cardMonth == ""){
      console.log("card number not valid")
      document.getElementById("cardMonth").className = "form-control is-invalid";
    }
    else if(parseInt(cardYear) > 2050 || cardYear =="" || parseInt(cardYear) < 1990){
      console.log("card year not valid")
      document.getElementById("cardYear").className = "form-control is-invalid";
    }
     
    else if(cvv.length < 4 || cvv ==""){
      console.log("cvv not valid")
      document.getElementById("cvv").className = "form-control is-invalid";
    }
    else if(cardHolder == ""){
      document.getElementById("cardHolder").className = "form-control is-invalid";

      console.log("card holder not valid")
    }
    else{
      busPayment(paymentAPI)
    }

 
     
  }
  const busPayment = async ( paymentAPI ) => {
    console.log("bus payment")
    console.log(paymentAPI)

    try{
      const res = await fetch(paymentAPI)

      console.log(await res.json())
      document.getElementById('bus_pay_modal').click();
      document.getElementById('bus_ticket').click();
      // window.location = "/bus/ticket"

    }catch (error){
      console.log("Sorry!!")
      
    }


  }
   

  const book = (bus_num) => {

      
    //console.log(document.getElementById(bus_num).getElementsByTagName("td")[0]);
    if (!(localStorage.getItem("user_id"))){

      console.log("user not login")
      window.location = "/login"
    }
    else{

      console.log("user login")
      console.log(document.getElementById(bus_num));
      var bus_number =  document.getElementById(bus_num).getElementsByTagName("td")[0].innerText
      var company_name =  document.getElementById(bus_num).getElementsByTagName("td")[1].innerText
      var departure_address =  document.getElementById(bus_num).getElementsByTagName("td")[2].innerText
      var departure_time =  document.getElementById(bus_num).getElementsByTagName("td")[3].innerText
      var duration =  document.getElementById(bus_num).getElementsByTagName("td")[4].innerText
      var price =  document.getElementById(bus_num).getElementsByTagName("td")[5].innerText
      var bas_capacity =  document.getElementById(bus_num).getElementsByTagName("td")[6].innerText
      console.log(price);
      

    localStorage.setItem("bus_number", bus_number);
    localStorage.setItem("company_name", company_name);
    localStorage.setItem("departure_address", departure_address);
    localStorage.setItem("departure_time", departure_time);
    localStorage.setItem("duration", duration);
    localStorage.setItem("price", price);
    localStorage.setItem("bas_capacity", bas_capacity);

    document.getElementById("payment").click()
    console.log(localStorage.getItem("price"));
    setPrice(localStorage.getItem("price"));

    }
    <Navigate replace={true} to='../' />


  }

  return (
    <div>
       
      <div className="my-3">
  <div className="container">
    <h5 className="text-dark">
      <b>
        There are some Available <i className="bi bi-bus-front-fill" /> Buses {" "}
        <u>
          <Link
            style={{ color: "#000" }}
            target="_blank"
            to={`https://www.google.com/search?q=${localStorage.getItem("bus_from_city")}&rlz= `}
          >
             {localStorage.getItem("bus_from_city")}
          </Link>
        </u>
        &nbsp;to&nbsp;
        <u>
          <Link
            style={{ color: "#000" }}
            target="_blank"
            to={`https://www.google.com/search?q=${localStorage.getItem("bus_to_city")}&rlz= `}
          >
            {localStorage.getItem("bus_to_city")}
          </Link>
        </u>
      </b>
    </h5>
    <h6>
      Looking for convenient and comfortable travel options from {localStorage.getItem("bus_from_city")} to {" "}
      {localStorage.getItem("bus_to_city")}? We've got you covered with a variety of buses at your disposal.
    </h6>
    <hr />
    <div className="card">
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <i className="bi bi-card-heading" /> Bus Number
              </th>
              <th scope="col">
                <i className="bi bi-bus-front-fill" /> Company Name
              </th>
              <th scope="col">
                <i className="bi bi-pin-map" /> Departure Address
              </th>
              <th scope="col">
                <i className="bi bi-calendar" /> Departure Time
              </th>
              <th scope="col">
                <i className="bi bi-hourglass-split" /> Duration
              </th>
              <th scope="col">
                <i className="bi bi-cash-coin" /> Price
              </th>
              <th scope="col">
                <i className="bi bi-asterisk" /> Bas Capacity
              </th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
          {
          getBus.map((i) =>{
            return(
              
               
              <tr id={i.id}>
               
              <td scope="row">
                 
                {i.bus_number}
              </td>
              <td>
                 
                {i.company_name}
              </td>
              <td>
                
                {i.departure_address}
              </td>
              <td>
                 
                {i.departure_time}
              </td>
              <td>
                 
                <i className="bi bi-clock" /> {i.duration}
              </td>
              <td>
                 
                <i className="bi bi-currency-rupee" />
                {i.price}/-
              </td>
              <td>
                 
                {i.bas_capacity}
              </td>
              <td>  
                <button  className="btn btn-success" type="button" onClick={() => book(i.id)}>
                  {/* <Link to="/login"> Book </Link> */}
                  <b>Book</b>
                 
                </button>
              </td>
            </tr>
            )
          })
        }
             
          </tbody>
        </table>
        <div id="notfound_bus" style={{ display: "none"}}>
        <>
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Please provide the correct city's information.</strong>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    />
  </div>
  <table>
    <tbody>
      <tr>
        <th>
          <img
            src="https://img.freepik.com/premium-vector/questioned-thinking-confused-with-question-mark-looking-up-with-thoughtful-focused-expression-concept-illustration_270158-241.jpg"
            alt=""
            width={220}
          />
        </th>
        <th>
          <h2>
            <b> Sorry, no buses are available. </b>
          </h2>
        </th>
      </tr>
    </tbody>
  </table>
</>

        </div>
      </div>
    </div>
  </div>
</div>
{/* {      localStorage.getItem("price") ?<> <Payment/> </> : <></>} */}
<button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      id='payment'
      style={{ display: "none" }}
    >
      Launch static backdrop modal
    </button>
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            
              <div className="mb-3">
                <h4>
                  {" "}
                  <img
                    src="https://toppng.com//public/uploads/preview/payment-icon-payment-method-icon-115534531553jugxnc3ex.png"
                    height={50}
                    alt="not found"
                  />{" "}
                  <b>   Payment</b>
                </h4>
                <hr />
                <label htmlFor="cardNumber" className="form-label">
                  <b>Card Number</b>
                </label>
                <input
                  type="text"
                  style={{ backgroundColor: "white", borderColor: "gray" }}
                  className="form-control"
                  id="cardNumber"
                  aria-describedby="emailHelp"
                  name="cardNumber"
                  placeholder="XXXX XXXX XXXX"
                  maxLength={12}
                  required=""
                />
                <table className="my-2">
                  <tbody>
                    <tr>
                      <td style={{ width: "30%" }}>
                        <label htmlFor="cardMonth" className="form-label">
                          <b>Expiration Date</b>
                        </label>
                        <input
                          type="number"
                          style={{
                            backgroundColor: "white",
                            borderColor: "gray"
                          }}
                          className="form-control"
                          id="cardMonth"
                          aria-describedby="emailHelp"
                          name="cardMonth"
                          placeholder="Month"
                          min="01"
                          max="12"
                          required=""
                        />
                      </td>
                      <td style={{ width: "30%" }}>
                        <label
                          htmlFor="cardYear"
                          className="form-label"
                          style={{ color: "white" }}
                        >
                          <b>None</b>
                        </label>
                        <input
                          type="number"
                          style={{
                            backgroundColor: "white",
                            borderColor: "gray"
                          }}
                          className="form-control"
                          id="cardYear"
                          aria-describedby="emailHelp"
                          name="cardYear"
                          placeholder="Year"
                          min={1990}
                          max={2050}
                          required=""
                        />
                      </td>
                      <td style={{ width: "40%" }}>
                        <label htmlFor="cvv" className="form-label">
                          <b>CVV/CVC</b>
                        </label>
                        <input
                          type="password"
                          style={{
                            backgroundColor: "white",
                            borderColor: "gray"
                          }}
                          className="form-control"
                          id="cvv"
                          aria-describedby="emailHelp"
                          name="cvv"
                          defaultValue=""
                          placeholder=""
                          maxLength={4}
                          required=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <label htmlFor="cardHolder" className="form-label">
                  <b>Card Holder Name</b>
                </label>
                <input
                  type="text"
                  style={{ backgroundColor: "white", borderColor: "gray" }}
                  className="form-control"
                  id="cardHolder"
                  aria-describedby="emailHelp"
                  name="cardHolder"
                  placeholder="Enter card Holder Name"
                  required=""
                />
                <div></div>
              </div>
              <hr />
              <table>
                <tbody>
                  <tr style={{ width: "100%" }}>
                    <td style={{ width: "50%" }}>
                      <h6>
                        <b>Total: ₹ </b> {getPrice} 
                      </h6>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <img
                        style={{ width: "60%" }}
                        src="https://www.citypng.com/public/uploads/small/216354159589qrojah4tydfjafob18hv9vsf5yvslekdx8swjkp3h29sozabupobysff2fuohctuvykt4isotjcbcastfbh07pcvp8poykymdj9.png"
                        alt=""
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="button" className="btn btn-outline-success" onClick={payBtn}>
                <b>
                  <i className="bi bi-credit-card-fill" /> Pay
                </b>
              </button>
              <button
                type="button"
                className="btn btn-secondary mx-2"
                data-bs-dismiss="modal"
                id = "bus_pay_modal"
              >
                <b>Close</b>
              </button>
     
            <hr />
          </div>
        </div>
      </div>
    </div>
    <Link to="/bus/ticket">
    <button
      type="button"
      id='bus_ticket'
      style={{ display: "none" }}
      
    >
      Bus Ticket 
    </button>
    </Link>



    </div>
    
  )
}
