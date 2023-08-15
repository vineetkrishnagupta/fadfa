import React from 'react'
import Bangalore from '..//../Image/city/bangalore.jpg'; // Tell webpack this JS file uses this image
import Chennai from '..//../Image/city/Chennai.jpg'; // Tell webpack this JS file uses this image
import Hyderabad from '..//../Image/city/Hyderabad.jpg'; // Tell webpack this JS file uses this image
import Pune from '..//../Image/city/pure.jpg'; // Tell webpack this JS file uses this image
import Delhi from '..//../Image/city/delhi.jpg'; // Tell webpack this JS file uses this image
import Mumbai from '..//../Image/city/mumbai.jpeg'; // Tell webpack this JS file uses this image
import Ahmedabad from '..//../Image/city/ahmedabad.jpg'; // Tell webpack this JS file uses this image

import Coimbatore from '..//../Image/city/Coimbatore.jpg'; // Tell webpack this JS file uses this image
import Kolkata from '..//../Image/city/Kolkata.jpg'; // Tell webpack this JS file uses this image


export default function TrainContent() {
  return (
    <div><>
    <div>
      <div className="container">
        <hr />
        <h3>
          <b>Train Seat Availability </b>
        </h3>
        <h6>
          {" "}
          Whenever it’s travel time, everyone seems to go in overdrive for finding
          out <b> train seat availability.</b> So beat the crowd and book your
          ticket as early as possible. However, booking tickets in advance is a
          good option only if you are sure about your travel plans. For many
          travellers, this is often not the case.
        </h6>
      </div>
    </div>
    <div>
      <div className="container">
        <hr />
        <br />
        <h3>
          <b>Check Train Seat Availability Online </b>
        </h3>
        <h6>
          To check train seat availability, follow the steps mentioned below{" "}
          <br />
          <br />
          <ul>
            <li>Enter your Source and destination station</li>
            <li>
              Choose the date of journey. In case your travel date is tomorrow,
              you can also opt for the <b> train ticket booking.</b>
            </li>
            <li>
              Enter "Search Trains" and the list of trains, running dates, and
              their seat availability will be displayed on the screen.
            </li>
            <li>
              Choose your train and preferred class from the list to complete your
              <b> train ticket booking.</b>
            </li>
          </ul>
          Train Seat Availability in a train may differ for you while choosing
          from different train ticket booking quotas and
        </h6>
      </div>
    </div>
    <div>
      <div className="container">
        <hr />
        <br />
        <h3>
          <b>Train Seat Availability FAQ</b>
        </h3>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <b>Q. How do I check my seat number on a train?</b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <b>Ans:</b> To check information about your seat on the train,
                check your <b>PNR status.</b> This includes the booking status
                that shows whether you train ticket is confirmed, or it is on the
                waiting list (WL) or is it under reservation against cancellation
                (RAC).
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <b>Q. What does current seat availability mean?</b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <b>Ans:</b> Current seat availability is one of the fastest ways
                to find out the latest booking information and check the
                availability of seats in real time. This can be done by entering
                the From and To Station Name/Code along with travel dates and
                travel class.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <b>Q. What are the chances of my ticket getting confirmed?</b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <b>Ans:</b> With the new feature of waitlist prediction by Indian
                Railways, one can predict the chances of a waitlisted or RAC
                ticket getting confirmed. This is based on the latest booking
                trends. You can also use <b>ixigo trains app</b> and know the
                chances of your ticket getting confirmed with the feature ‘PNR
                prediction’.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <b>Q. How can my train ticket be confirmed?</b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <b>Ans:</b> About four hours before departure, waitlists are
                cleared continuously. If the train’s quotas are not filled, the
                empty seats are released for general public when the chart is
                prepared. Last minute cancellation will also help you get a
                confirmed train seat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="container" style={{ marginBottom: 2 }}>
        {" "}
        <hr />
        <h3>
          <b>Popular Train's routes in India </b>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            width={40}
            alt=""
          />
        </h3>
        <h6>
          India has an extensive railway network that spans the length and breadth
          of the country, covering more than 67,000 km of track. Here are some of
          the most important and famous train routes in India:
        </h6>
        <hr />
        <div className="row my-2">
          <div className="col-12 col-md-6 col-xl-4 ">
            <div className="card" style={{ width: "100%", padding: 10 }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Bangalore}
                        style={{ borderRadius: "50%" }}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="mx-2">
                      <p style={{ marginLeft: 5 }}>
                        <b> Bangalore To:</b>
                      </p>
                      <p style={{ marginTop: "-1em", marginLeft: 5 }}>
                        <b>1.</b> Chennai,
                        <br />
                        <b>2.</b> Hyderabad,
                        <br />
                        <b>3.</b> Coimbatore,
                        <br />
                        <b>4.</b> Mumbai,
                        <br />
                        <b>5.</b> Goa
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 ">
            <div className="card" style={{ width: "100%", padding: 10 }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Chennai}
                        style={{ borderRadius: "50%" }}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="mx-2">
                      <p style={{ marginLeft: 5 }}>
                        <b> Chennai To:</b>
                      </p>
                      <p style={{ marginTop: "-1em", marginLeft: 5 }}>
                        <b>1.</b> Bangalore,
                        <br />
                        <b>2.</b> Coimbatore,
                        <br />
                        <b>3.</b> Madurai,
                        <br />
                        <b>4.</b> Hyderabad,
                        <br />
                        <b>5.</b> Trichy
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 ">
            <div className="card" style={{ width: "100%", padding: 10 }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Hyderabad}
                        style={{ borderRadius: "50%" }}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="mx-2">
                      <p style={{ marginLeft: 5 }}>
                        <b> Hyderabad To:</b>
                      </p>
                      <p style={{ marginTop: "-1em", marginLeft: 5 }}>
                        <b>1.</b> Bangalore,
                        <br />
                        <b>2.</b> Chennai,
                        <br />
                        <b>3.</b> Mumbai,
                        <br />
                        <b>4.</b> Puna,
                        <br />
                        <b>5.</b> Vijayawada
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-12 col-md-6 col-xl-4 ">
            <div className="card" style={{ width: "100%", padding: 10 }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Pune}
                        style={{ borderRadius: "50%" }}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="mx-2">
                      <p style={{ marginLeft: 5 }}>
                        <b> Pune To:</b>
                      </p>
                      <p style={{ marginTop: "-1em", marginLeft: 5 }}>
                        <b>1.</b> Goa,
                        <br />
                        <b>2.</b> Bangalore,
                        <br />
                        <b>3.</b> Nagpur,
                        <br />
                        <b>4.</b> Hyderabad,
                        <br />
                        <b>5.</b> Mumbai
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 ">
            <div className="card" style={{ width: "100%", padding: 10 }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Delhi}
                        style={{ borderRadius: "50%" }}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="mx-2">
                      <p style={{ marginLeft: 5 }}>
                        <b> Delhi To:</b>
                      </p>
                      <p style={{ marginTop: "-1em", marginLeft: 5 }}>
                        <b>1.</b> Lucknow,
                        <br />
                        <b>2.</b> Dehradum,
                        <br />
                        <b>3.</b> Manali,
                        <br />
                        <b>4.</b> Kanpur,
                        <br />
                        <b>5.</b> Jaipur
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 ">
            <div className="card" style={{ width: "100%", padding: 10 }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Mumbai}
                        style={{ borderRadius: "50%" }}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="mx-2">
                      <p style={{ marginLeft: 5 }}>
                        <b> Mumbai To:</b>
                      </p>
                      <p style={{ marginTop: "-1em", marginLeft: 5 }}>
                        <b>1.</b> Bangalore,
                        <br />
                        <b>2.</b> Goa,
                        <br />
                        <b>3.</b> Pune,
                        <br />
                        <b>4.</b> Indore,
                        <br />
                        <b>5.</b> Ahmedabad
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-12 col-md-6 col-xl-4 ">
            <div className="card" style={{ width: "100%", padding: 10 }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Ahmedabad}
                        style={{ borderRadius: "50%" }}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="mx-2">
                      <p style={{ marginLeft: 5 }}>
                        <b> Ahmedabad To:</b>
                      </p>
                      <p style={{ marginTop: "-1em", marginLeft: 5 }}>
                        <b>1.</b> Mumbai,
                        <br />
                        <b>2.</b> Rajkot,
                        <br />
                        <b>3.</b> Surat,
                        <br />
                        <b>4.</b> Pure,
                        <br />
                        <b>5.</b> Indore
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 ">
            <div className="card" style={{ width: "100%", padding: 10 }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Coimbatore}
                        style={{ borderRadius: "50%" }}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="mx-2">
                      <p style={{ marginLeft: 5 }}>
                        <b> Coimbatore To:</b>
                      </p>
                      <p style={{ marginTop: "-1em", marginLeft: 5 }}>
                        <b>1.</b> Chennai,
                        <br />
                        <b>2.</b> Bangalore,
                        <br />
                        <b>3.</b> Madurai,
                        <br />
                        <b>4.</b> Pondicherry,
                        <br />
                        <b>5.</b> Nagercoil
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 ">
            <div className="card" style={{ width: "100%", padding: 10 }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Kolkata}
                        style={{ borderRadius: "50%" }}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td className="mx-2">
                      <p style={{ marginLeft: 5 }}>
                        <b> Kolkata To:</b>
                      </p>
                      <p style={{ marginTop: "-1em", marginLeft: 5 }}>
                        <b>1.</b> Durgapur,
                        <br />
                        <b>2.</b> Asansol,
                        <br />
                        <b>3.</b> Siliguri,
                        <br />
                        <b>4.</b> Bhubaneshwar,
                        <br />
                        <b>5.</b> Bardhaman
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  </div>
  )
}
