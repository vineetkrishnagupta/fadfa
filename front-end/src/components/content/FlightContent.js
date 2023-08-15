import React from 'react'
import  New_York from '..//../Image/city/new york.jpeg'; // Tell webpack this JS file uses this image
import Seoul from '..//../Image/city/seoul.jpg'; // Tell webpack this JS file uses this image
import Tokyo from '..//../Image/city/tokyo.jpg'; // Tell webpack this JS file uses this image
import Dubai from '..//../Image/city/dubai.jpg'; // Tell webpack this JS file uses this image

import Singapore from '..//../Image/city/sigampur.jpg'; // Tell webpack this JS file uses this image
import Paris from '..//../Image/city/paris.jpg'; // Tell webpack this JS file uses this image
import Shanghai from '..//../Image/city/Shanghai.jpg'; // Tell webpack this JS file uses this image

import Rio from '..//../Image/city/rio.jpg'; // Tell webpack this JS file uses this image
import Beijing from '..//../Image/city/beijing.jpg'; // Tell webpack this JS file uses this image
import Los_Angeles from '..//../Image/city/los angeles.jpg'; // Tell webpack this JS file uses this image
import Istanbul from '..//../Image/city/Istanbul.jpg'; // Tell webpack this JS file uses this image




 


export default function FlightContent() {
  return (
    <div>
    <hr />
    <div>
      <div className="container" style={{ marginBottom: 10 }}>
        <h3>
          <b>
            Popular flights from{" "}
            <u> New Delhi, Indira Gandhi International Airport (DEL)</u>
          </b>
        </h3>
        <h6>
          Below are some important and famous flights from Indira Gandhi
          International Airport.{" "}
        </h6>
        <hr />
        <div className="row my-2">
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={ New_York}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> New York City</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}> John F. Kennedy (JFK)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={ Seoul}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Seoul</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}> Seoul, Incheon (ICN)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Tokyo}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Tokyo</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}> Tokyo, Narita (NRT)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src="https://www.sbs.ox.ac.uk/sites/default/files/London_0.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> London</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}>
                         London, London City (LCY)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Dubai}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Dubai</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}>
                         Dubai City, Dubai (DXB)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Singapore}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Singapore</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}> Singapore Changi (SIN)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Paris}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Paris</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}>
                         Charles de Gaulle (CDG)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Shanghai}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Shanghai</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}>
                         Shanghai Hongqiao (SHA)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Rio}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Rio de Janeiro</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}> RIOgao–Tom Jobim (GIG)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Beijing}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Beijing</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}> Beijing Capital (PEK)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                        src={Los_Angeles}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Los Angeles</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}> Whiteman (WHP)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ">
            <div className="card" style={{ width: "100%" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>
                      <img
                       src={Istanbul}
                        className="card-img-top"
                        alt="..."
                      />
                    </td>
                    <td>
                      <p>
                        <b> Istanbul</b>
                      </p>
                      <p style={{ marginTop: "-1em" }}> Sabiha Gökçen (SAW)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  )
}
