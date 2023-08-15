import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';
import Bus from './Bus';
import Footer from './Footer';
 
export default function BusTicket() {
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
  return (
    <div><>
    <div id="header">
    <Header btn="logout" btnLink="/logout" display=""/>
    <Bus/>

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
          and your ticket to travel from <b> {localStorage.getItem("bus_from_city")}</b>{" "}
          <i className="bi bi-arrow-left-right" /> <b> {localStorage.getItem("bus_to_city")}</b> has been booked.
          We appreciate your trust in our services and we're delighted to be a
          part of your travel journey. You can now look forward to an amazing
          travel experience and create unforgettable memories.{" "}
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
                src="https://media.istockphoto.com/id/1307047942/vector/credit-card-loan-bank-management-mobile-application-concept-vector-flat-graphic-design.jpg?s=612x612&w=0&k=20&c=tgTB9Z0CNtHPVRulA__ULluTaBet7xDSsHIvZpzI2n8="
                style={{ width: "102%" }}
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
                        <i className="bi bi-bus-front-fill" /> Bus Tickets
                      </b>
                    </h4>
                    <h6>{localStorage.getItem("company_name")} </h6>
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
                        <i className="bi bi-arrow-right-square-fill" /> From :{" "}
                      </b>{" "}
                      {localStorage.getItem("bus_from_city")}
                    </h6>
                  </td>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-card-heading" /> Bus No :
                      </b>{" "}
                      {localStorage.getItem("bus_number")}
                    </h6>
                  </td>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-cash-coin" /> Price :
                      </b>{" "}
                      <i className="bi bi-currency-rupee" /> {localStorage.getItem("price")}
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>
                      <b>
                        To <i className="bi bi-arrow-left-square-fill" /> :{" "}
                      </b>{" "}
                      {localStorage.getItem("bus_to_city")}
                    </h6>
                  </td>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-calendar" /> Date :
                      </b>{" "}{localStorage.getItem("bus_departure_date")}
                    </h6>
                  </td>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-clock-fill" /> Time :
                      </b>{" "}
                      {localStorage.getItem("departure_time")}
                    </h6>
                  </td>
                </tr>
                <tr style={{ borderBottom: "2px solid red" }}>
                  <td>
                    <h6>
                      <b>
                        <i className="bi bi-geo-alt-fill" /> Address :{" "}
                      </b>{" "}
                      {localStorage.getItem("departure_address")}
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
                      width={80}
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
                  <td></td>
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
              <Link to="/bus" id="bbackbtn"> 
              <button  className="btn btn-dark mx-2">Back</button>
              </Link>
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
