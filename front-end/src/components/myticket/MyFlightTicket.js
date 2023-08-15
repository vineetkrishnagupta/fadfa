import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function MyBusTicket() {

    let API = `http://localhost:5000/flight/myticket?email=${localStorage.getItem("user_email")}`;
  const [getticket, setticket] = useState([]);
   
  const fecthApiData = async (url) => {
    
    try{
      const res = await fetch(url)
      setticket(await res.json());
      //console.log(bus)

    }catch (error){
      console.log("Sorry!")
      document.getElementById("notfound_fight_ticket").style = "display: ;";
    }
  }

  useEffect(() =>{
    fecthApiData(API)
    
    // localStorage.removeItem("price");

  }, [])
  return (
    <div><img
    src="https://www.easemytrip.com/images/offer-img/producticons/special_banner_deal1.png"
    style={{ width: "100%" }}
    alt=""
  /><div className="container">
    <hr />
    
    <Link to="/myflight/ticket">
            <button type="button" className="btn btn-primary ">
              <img src="https://mybea.onrender.com/public/img/icone/outline_airplane_ticket_white_24dp.png" width={25} />
              <b> Flight</b>
            </button>
          </Link>

          <Link to="/mytrain/ticket">
            <button type="button" className="btn btn-primary  mx-1">
              <img src="https://mybea.onrender.com/public/img/icone/outline_tram_white_24dp.png" width={25} />
              <b> Train</b>
            </button>
          </Link>

          <Link to="/mybus/ticket">
            <button type="button" className="btn btn-primary ">
              <img src="https://mybea.onrender.com/public/img/icone/outline_directions_bus_filled_white_24dp.png" width={25} />
              <b> Bus</b>
            </button>
          </Link>

          <div id="notfound_fight_ticket" className="card my-3"  style={{ display: "none"}}> <br />
        <>
  <div className="alert alert-danger alert-dismissible fade show mx-3" role="alert">
    <strong>Not Found</strong>
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
            <b> Sorry, no Fligth Ticket are available. </b>
          </h2>
        </th>
      </tr>
    </tbody>
  </table>
</>

        </div>

    { getticket.map((i) =>{
    return(
        <div> <hr />
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
                      <h6> <b>Airlines : </b>{i.flight_ariline} </h6>
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
                        {i.from_airport}
                      </h6>
                    </td>
                    <td>
                      <h6>
                        <b>
                          <i className="bi bi-card-heading" /> Flight No :
                        </b>{" "}
                        {i.flight_number}
                      </h6>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      <h6>
                        <b>
                          To <i className="bi bi-arrow-left-square-fill" /> :{" "}
                        </b>{" "}
                        {i.to_airport}
                      </h6>
                    </td>
                    <td>
                      <h6>
                        <b>
                          <i className="bi bi-calendar" /> Date :
                        </b>{" "}{i.gdate}
                      </h6>
                    </td>
                    
                  </tr>
                  <tr style={{ borderBottom: "2px solid red" }}>
                    
                    <td>
                      <h6>
                        <b>
                          <i className="bi bi-hourglass-split" /> Duration :
                        </b>{" "}
                        {i.duration}
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
                <button className="btn btn-success" onclick="page_print()">
                validate
                </button>
                <button className="btn btn-dark mx-2">Back</button>
              </div>
            </div>
          </div>
        </div></div>
    )})}
   
  </div> 
  </div>
  )
}
