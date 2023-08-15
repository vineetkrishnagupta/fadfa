import React from 'react'

export default function payment(props) {
  return (
    <div><>
    {/* {      localStorage.getItem("price") ?<> <Payment/> </> : <></>} */}
<button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      id='payment'
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
            <form action="/bpayment" method="post">
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
                  id="cardNumber"
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
                        <b>Total: ₹ </b> {props.price} 
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
              <button type="submit" className="btn btn-outline-success">
                <b>
                  <i className="bi bi-credit-card-fill" /> Pay
                </b>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                <b>Close</b>
              </button>
            </form>
            <hr />
          </div>
        </div>
      </div>
    </div>


  </>
  </div>
  )
  payment.defaultProps = {
    price:"100/-"
 }
}
