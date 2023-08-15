import React from 'react'

export default function Footer() {
  return (
    <div>
    <div>
      <div className="container" style={{ marginBottom: 200 }}>
        <hr />
        <br />
        <h4>
          <b>
            Download our App on Android or iPhone and get the best indian railway
            booking deals across India{" "}
          </b>
        </h4>
        <br />
        <ul>
          <li>Get ticket confirmation chances before booking.</li>
          <li>Check real-time seat availability for all IRCTC trains.</li>
        </ul>
        <table>
          <tbody>
            <tr>
              <th>
                <img
                  src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
                  width={160}
                  alt=""
                />
              </th>
              <th>
                <h6>
                  <img
                    src="https://thumbs.dreamstime.com/b/basic-rgb-179717724.jpg"
                    width="210"
                    alt=""
                  />
                </h6>
              </th>
              <th>
                Rating <br />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
                <br />
                4.4 <br />
                <br />
                Rating <br />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
                <i className="bi bi-star" />
                <br />
                3.4
              </th>
            </tr>
          </tbody>
        </table>
        <h6 className="mx-2">
          <img src="https://mybea.onrender.com/public/img/ui/irctcStamp.png" width={200} alt="" />
        </h6>
      </div>
      <hr />
    </div>
    <hr />
    <div className="footer">
      <br />
      <h4 style={{ color: "antiquewhite" }}> </h4>
      <h6 style={{ color: "antiquewhite" }}>
        MyBea is an Increasing Indian online travel company founded in 2023.
      </h6>
      <h6 style={{ color: "antiquewhite" }}>
        Please give us your{" "}
        <a href="" style={{ color: "antiquewhite" }}>
          <b> feedback</b>
        </a>{" "}
        for better experience{" "}
      </h6>
      <h3>
        <br />
        <a
          href=""
          className="mx-3"
          style={{ textDecoration: "none", color: "antiquewhite" }}
        >
          <i className="bi bi-facebook" />
        </a>
        <a
          href=""
          className="mx-3"
          style={{ textDecoration: "none", color: "antiquewhite" }}
        >
          <i className="bi bi-instagram" />
        </a>
        <a
          href=""
          className="mx-3"
          style={{ textDecoration: "none", color: "antiquewhite" }}
        >
          <i className="bi bi-whatsapp" />
        </a>
        <a
          href=""
          className="mx-3"
          style={{ textDecoration: "none", color: "antiquewhite" }}
        >
          <i className="bi bi-linkedin" />
        </a>
        <a
          href=""
          className="mx-3"
          style={{ textDecoration: "none", color: "antiquewhite" }}
        >
          <i className="bi bi-google" />
        </a>
        <a
          href=""
          className="mx-3"
          style={{ textDecoration: "none", color: "antiquewhite" }}
        >
          <i className="bi bi-pinterest" />
        </a>
        <a
          href=""
          className="mx-3"
          style={{ textDecoration: "none", color: "antiquewhite" }}
        >
          <i className="bi bi-twitter" />
        </a>
      </h3>
      <br />
      <br />
      <br />
      <hr style={{ color: "antiquewhite" }} />
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <div style={{ textAlign: "left" }}>
                <p style={{ color: "aliceblue", fontSize: "x-small" }}>
                  Copyright ©2023 MyBea | <a href="">terms &amp; conditions</a> |{" "}
                  <a href="/about"> About Us</a> |{" "}
                  <a href="/feedback"> feedback</a>
                </p>
              </div>
            </td>
            <td>
              <div style={{ textAlign: "right" }}>
                <p style={{ color: "aliceblue", fontSize: "x-small" }}>
                  +91 75650 87832 | gaurikasharma209@gmail.com | Banda, Uttar
                  Pradesh |{" "}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
 
  </div>
  )
}
