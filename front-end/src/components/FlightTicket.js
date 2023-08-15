import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header';
import Flight from './Flight';
import Footer from './Footer';
const page_print = () =>{
  document.getElementById("header").style = "display: none ;";
  document.getElementById("ticket_icone").style = "display: none ;";
  document.getElementById("footer").style = "display: none ;";
  document.getElementById("print_tickets_button").style = "display: none ;";
  window.print()
  document.getElementById("header").style = "display: ;";
  document.getElementById("ticket_icone").style = "display: ;";
  document.getElementById("footer").style = "display: ;";
  document.getElementById("print_tickets_button").style = "display: ;";
}
export default function FlightTicket() {
  return (
    <div><>
    <div id="header">
    <Header btn="logout" btnLink="/logout" display=""/>
    <Flight/>

    </div>
   
    <div className="container" id="Congratulations">
      <div className="alert alert-success" role="alert">
        <h3 className="alert-heading">
          <b>
            <i className="bi bi-check-circle-fill" /> Congratulations !
          </b>
        </h3>
        <hr />
        <p>
          <b>Dear {localStorage.getItem("user_name")}</b>, Your payment has been successfully processed
          and your ticket to travel from <b> {localStorage.getItem("flight_from_city")}</b>{" "}
          <i className="bi bi-arrow-left-right" />{" "}
          <b> {localStorage.getItem("flight_to_city")}</b> has been booked. We appreciate your
          trust in our services and we're delighted to be a part of your travel
          journey. You can now look forward to an amazing travel experience and
          create unforgettable memories.{" "}
        </p>
        <p>
          You'll receive an <i className="bi bi-envelope-check-fill" />{" "}
          <b>{localStorage.getItem("user_email")}</b> shortly with all the details of your
          booking any additional information you might need.
        </p>
        <hr />
        <p className="mb-0">
          <b>
            Thank you <i className="bi bi-hand-thumbs-up-fill" /> for choosing us,
            and we wish you a safe and pleasant trip.
          </b>
        </p>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="card" style={{ width: "100%", padding: 10 }}>
        <div className="row">
          <div className="col-12 col-md-4 col-xl-4 ">
            <div id="ticket_icone">
              <img
                src="https://img.freepik.com/free-vector/back-female-tourist-long-hair-dragging-suitcase-airplan-cloud-sky-cartoon-character-flat-illustration_1150-39585.jpg"
                style={{ width: "99%" }}
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-8 col-xl-8 ">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr style={{ borderBottom: "2px solid red" }}>
                  <th>
                    <h4>
                      <b>
                        <i className="bi bi-airplane-fill" /> Flight Tickets
                      </b>
                    </h4>
                    <h6>
                      <b>Airlines : </b>{localStorage.getItem("airline")}
                    </h6>
                  </th>
                </tr>
              </tbody>
            </table>
            <br />
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <h6>
                      <b>
                        From <i className="bi bi-arrow-right-square-fill" /> :{" "}
                      </b>{" "}
                      {localStorage.getItem("flight_from_city")}
                    </h6>
                  </td>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-card-heading" /> Flight No :
                      </b>{" "}
                      {localStorage.getItem("flight_number")}
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-arrow-right-square-fill" /> To :{" "}
                      </b>{" "}
                      {localStorage.getItem("flight_to_city")}
                    </h6>
                  </td>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-calendar" /> Departure :
                      </b>{" "}
                      {localStorage.getItem("flight_departure_date")}
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-cash-coin" /> Price :
                      </b>{" "}
                      <i className="bi bi-currency-rupee" />{localStorage.getItem("price")}
                    </h6>
                  </td>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-hourglass-split" /> Duration :
                      </b>{" "}
                      {localStorage.getItem("duration")}
                    </h6>
                  </td>
                </tr>
                <tr style={{ borderBottom: "2px solid red" }}>
                  <td>
                    <h6 className="text-success">
                      <b>Payment : Successful</b>
                    </h6>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png"
                      width={75}
                      alt=""
                    />
                  </td>
                  <td>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/017/059/171/original/barcode-sign-free-png.png"
                      width={270}
                      alt=""
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <h6>
              <i className="bi bi-person-check" /> {localStorage.getItem("user_name")}
            </h6>
            <hr />
            <div id="print_tickets_button">
              <button className="btn btn-primary" onClick={page_print}>
                Print Tickets
              </button>
              <Link to="/"><button className="btn btn-dark mx-2">Back</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
    <Footer/>

    </div>
    
  </>
  </div>
  )
}
