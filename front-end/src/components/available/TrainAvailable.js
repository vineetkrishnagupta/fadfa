import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function TrainAvailable() {
  let API = `http://localhost:5000/available/train?from=${localStorage.getItem("train_from_city_code")}&to=${localStorage.getItem("train_to_city_code")}`;
  const [getTrain, setTrain] = useState([]);
  const [getPrice, setPrice] = useState('');

  const fecthApiData = async (url) => {
    
    try{
      const res = await fetch(url)
      setTrain(await res.json());
      //console.log(await res.json())

    }catch (error){
      console.log("Sorry!")
      document.getElementById("notfound_train").style = "display: ;";
    }
  }

  useEffect(() =>{
    fecthApiData(API)
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

    var train_number = localStorage.getItem("train_number")
    var train_name = localStorage.getItem("train_name")
    var from_std = localStorage.getItem("from_std")
    var duration = localStorage.getItem("duration")
    var price = localStorage.getItem("price")

    var train_from_city = localStorage.getItem("train_from_city")
    var train_to_city = localStorage.getItem("train_to_city")
    var train_departure_date = localStorage.getItem("train_departure_date")
    var train_return_date = localStorage.getItem("train_return_date")




    var paymentAPI = `http://localhost:5000/train/payment?cardNumber=${cardNumber}&exDate=${exDate}&cvv=${cvv}&cardHolder=${cardHolder}&train_number=${train_number}&train_name=${train_name}&from_std=${from_std}&duration=${duration}&price=${price}&user_id=${user_id}&user_email=${user_email}&from=${train_from_city}&to=${train_to_city}&gdate=${train_departure_date}&rdate=${train_return_date}`;
    
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
      trainPayment(paymentAPI)
    }

    // trainPayment(paymentAPI)
  }

  const trainPayment = async ( paymentAPI ) => {
    console.log("train payment")
    console.log(paymentAPI)
    try{
      const res = await fetch(paymentAPI)

      console.log(await res.json())
      document.getElementById('train_pay_modal').click();
      document.getElementById('train_ticket').click();
      // window.location = "/train/ticket"

    }catch (error){
      console.log("Sorry!")
    }
  }

  

  const book = (train_num) => {
    if (!(localStorage.getItem("user_id"))){

      console.log("user not login")
      window.location = "/login"
    }
    else{
      console.log(document.getElementById(train_num));

      var train_number =  document.getElementById(train_num).getElementsByTagName("td")[0].innerText
      var train_name =  document.getElementById(train_num).getElementsByTagName("td")[1].innerText
      console.log(train_name)
      var from_std =  document.getElementById(train_num).getElementsByTagName("td")[3].innerText
      var duration =  document.getElementById(train_num).getElementsByTagName("td")[4].innerText

      var price = document.getElementById(train_num).getElementsByTagName("td")[0].innerText/100

      localStorage.setItem("train_number", train_number);
      localStorage.setItem("train_name", train_name);
      localStorage.setItem("from_std", from_std);
      localStorage.setItem("duration", duration);
      localStorage.setItem("price", price);

      
    setPrice(localStorage.getItem("price"));
    document.getElementById("payment").click();

    }
  }


  return (
    <div><div className="my-3">
    <div className="container">
      <hr />
      <h5 className="text-dark">
        <b>
          There are some Available Trains <i class="bi bi-train-front-fill"/>{" "}
          <u>
            <Link
              style={{ color: "#000" }}
              target="_blank"
              to={`https://www.google.com/search?q=${localStorage.getItem("train_from_city")}&rlz= `}
            >
              {localStorage.getItem("train_from_city")}
            </Link>
          </u>
          &nbsp;to&nbsp;
          <u>
            <Link
              style={{ color: "#000" }}
              target="_blank"
              to={`https://www.google.com/search?q=${localStorage.getItem("train_to_city")}&rlz= `}
            >
              {localStorage.getItem("train_to_city")}
            </Link>
          </u>
        </b>
      </h5>
      <hr />
      <div className="card">
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <i className="bi bi-card-heading" /> Train Number
                </th>
                <th scope="col">
                  <i className="bi bi-train-front" /> Train name
                </th>
                <th scope="col">
                  <i className="bi bi-pin-map" /> Origin to Destination{" "}
                </th>
                <th scope="col">
                  <i className="bi bi-alarm-fill" /> Departure
                </th>
                <th scope="col">
                  <i className="bi bi-hourglass-split" /> Duration
                </th>
                <th scope="col">
                  <i className="bi bi-cloud-sun-fill" /> ran days
                </th>
                <th scope="col">
                  <i className="bi bi-cash-coin" /> Class
                </th>
                <th scope="col">Operation</th>
              </tr>
            </thead>
            <tbody>
              {
                getTrain.map((i) =>{
                  return(
                    <tr id={i.train_number + i.to_day + i.local_train_from_sta}>
                 
                <td >
                  
                {i.train_number}
                </td>
                <td>
                 
                  {i.train_name}

                   
                   
                
                </td>
                <td>
                  ({i.train_src})
                  <i className="bi bi-arrow-left-right" /> ({i.train_dstn})
                </td>
                <td>
                   
                  {i.from_std}{" "}
                </td>
                <td>
                   
                {i.duration}
                </td>
                <td>
               
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                     {
                i.run_days.map((day) =>{
                  return( <option selected="">{day}</option>)
                })
              }
                   
                     
                  </select>
                </td>
                <td>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    {
                i.class_type.map((tClass) =>{
                  return( <option selected="">{tClass}</option>)
                })
              } 
                  </select>
                </td>
                <td>
                <button type="button" className="btn btn-success" onClick={() => book(i.train_number + i.to_day + i.local_train_from_sta)}>
                  Book
                </button>
                </td>
              </tr>
                  )})

              }
            
               
            </tbody>
          </table>
          <div id="notfound_train" style={{ display: "none"}}>
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
            <b> Sorry, no train are available. </b>
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
                id="train_pay_modal"
              >
                <b>Close</b>
              </button>
     
            <hr />
          </div>
        </div>
      </div>
    </div>
    <Link to="/train/ticket">
    <button
      type="button"
      id='train_ticket'
      style={{ display: "none" }}
      
    >
      Train Ticket 
    </button>
    </Link>


  </div>
  )
}
