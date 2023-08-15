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




export default function BusContent() {
  return (
    <div>
    <div>
      <div className="container">
        <hr />
        <h3>
          <b>Book Bus Tickets Online in India with MyBea </b>
        </h3>
        <br />
        <h6>
          India's largest company for bus ticket booking online, MyBea, offers an
          easy-to-use online platform, 7500+ bus operators to choose from, and
          plenty of offers on bus ticket booking to make road journeys super
          convenient for travellers. A leading platform for booking bus tickets,
          MyBea has driven the country's bus booking journey over the past 17
          years through thousands of cities and routes in India. Striving to reach
          new heights regarding online bus reservations in India, MyBea has become
          the perfect platform to have a smooth bus ticket booking experience.
          <br />
          Anybody can use the official website of MyBea or download the
          user-friendly app from the play store and apple store to book bus
          tickets from anywhere in India. You can easily book an online bus from
          the comfort of your home, office, or vehicle. With these successful
          USPs, MyBea has expanded bus services internationally to countries like
          Singapore, Malaysia, Indonesia, Peru, and Colombia.
          <br />
          Booking a bus ticket online with MyBea is now more convenient than ever.
          After setting the industry standards other competitors have struggled to
          reach, MyBea has raised the bar again by providing a world-class bus
          booking experience.
        </h6>
      </div>
    </div>
    <div className="container">
      <hr />
      <h3>
        <b> Why book bus tickets online through MyBea?</b>
      </h3>
      <br />
      <h6>
        Online bus booking offers more convenience, choice, and flexibility than
        offline booking. However, some people may prefer offline booking for
        various reasons, such as face-to-face interactions and cash payments. In
        addition, some people prefer to book a bus ticket through a travel agent
        or at a counter. However, people are recognising the advantages of online
        bus ticket booking now. Booking online bus tickets on MyBea offers several
        advantages over offline prehistoric booking modes.
        <br />
        <br />
        <b>1. Convenience:</b> Booking bus tickets online saves you the time and
        hassle of standing in long queues at the bus station or travelling to a
        ticketing office.
        <br />
        <br />
        <b>2. Availability:</b> Booking bus tickets online allows you to easily
        access and compare the availability of bus routes and schedules from
        multiple bus operators.
        <br />
        <br />
        <b>3. Discounts and Deals:</b> Many bus operators offer special discounts
        and deals for online bus bookings, which can help you save on travel
        expenses. Customers can even avail of exclusive discounts while making
        their bus reservations provided by bus booking sites like MyBea that
        cannot be matched by any value offered by a travel agent or a counter.
        <br />
        <br />
        <b>4. Secure payment:</b> Online booking platforms use secure gateways
        that protect your payment information and prevent fraud.
        <br />
        <br />
        <b>5. Assured Seats:</b> Many online booking platforms allow you to choose
        your preferred seat on the bus, giving you more control over your travel
        experience.
        <br />
        <br />
        <b>6. Real-time updates:</b> Online booking platforms provide real-time
        updates on bus schedules, delays, and cancellations, allowing you to plan
        your travel accordingly.
        <br />
        <br />
        <b>7. Compare Amenities:</b> Booking a bus online helps to filter out the
        bus based on amenities; one can choose amenities such as blankets,
        charging points, newspapers, snacks, water bottle etc.
        <br />
        <br />
        <b>8. Save money:</b> MyBea allow you to compare the pricing of the bus
        ticket between different bus operators. Therefore, one can book a ticket
        based on the budget without worrying about the price.
        <br />
        <br />
        Booking bus tickets online is a convenient, time-saving, and
        cost-effective way to plan your travels. Customers can view every detail
        of the bus, including updated pictures, the type of bus, amenities
        offered, and much more, on the MyBea website and app.
      </h6>
    </div>
    <hr />
    <div>
      <div className="container" style={{ marginBottom: 2 }}>
        <h3>
          <b>Popular buses in India </b>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            width={40}
            alt=""
          />
        </h3>
        <h6>Below are some important and famous buss in india. </h6>
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
                        <b> Buses From Bangalore To</b>
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
                        <b> Buses From Chennai To</b>
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
                        <b> Buses From Hyderabad To</b>
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
                        <b> Buses From Pune To</b>
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
                        <b> Buses From Delhi To</b>
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
                        <b> Buses From Mumbai To</b>
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
                        <b> Buses From Ahmedabad To</b>
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
                        <b> Buses From Coimbatore To</b>
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
                        <b> Buses From Kolkata To</b>
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
  
  </div>
  )
}
