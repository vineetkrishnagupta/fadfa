import React from 'react'
import {Link} from 'react-router-dom'

export default function Flight() {

  function autocomplete(inp, arr) {
 
    var currentFocus;
    
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
     
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
       
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
         
        this.parentNode.appendChild(a);
       
        for (i = 0; i < arr.length; i++) {
           
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
           
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          //addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          //addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form fromcity being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class fromcity all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
   
  /*initiate the autocomplete function on the "fromcity" element, and pass along the countries array as possible autocomplete values:*/
  
  
  const fromCity = () =>{
    let city = document.getElementById("flight_from_city").value;
    console.log(city)
    //autocomplete(document.getElementById("flight_from_city"), countries);
    
 
    if (city.length >= 3) {
      console.log(city)
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'c230d6fb64msh0a70a643a4215c0p18f957jsn7b3d83504eec',
              'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
          }
      };

      //let city = document.getElementById("city").value; // city name
    // city name
      fetch(`https://aerodatabox.p.rapidapi.com/airports/search/term?q=${city}&limit=10`, options)
          .then(response => response.json())
          .then((response) => {
              //console.log(response)
              //console.log(response["items"].length)

              let airports = response["items"].length


              let countries = [];
              //console.clear()
              for (let i = 0; i < airports; i++) {


                  //console.log(response["items"][i]["name"])
                  countries.push(response["items"][i]["name"] +" ("+ response["items"][i]["iata"] +")")
                  // autocomplete(document.getElementById("fromCity"), countries);
              }
              autocomplete(document.getElementById("flight_from_city"), countries);
              console.log(countries)
              // response["items"]
              //document.write(JSON.stringify(response))
          })
          // .then(response => document.write(JSON.stringify(response)))

          .catch(err => console.error(err));
  }
  




  }
  const toCity = () =>{
    let city = document.getElementById("flight_to_city").value;
    console.log(city)
    // autocomplete(document.getElementById("bus_to_city"), countries);
    
      
 
    if (city.length >= 3) {
      console.log(city)
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'c230d6fb64msh0a70a643a4215c0p18f957jsn7b3d83504eec',
              'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
          }
      };

      //let city = document.getElementById("city").value; // city name
    // city name
      fetch(`https://aerodatabox.p.rapidapi.com/airports/search/term?q=${city}&limit=10`, options)
          .then(response => response.json())
          .then((response) => {
              //console.log(response)
              //console.log(response["items"].length)

              let airports = response["items"].length


              let countries = [];
              //console.clear()
              for (let i = 0; i < airports; i++) {


                  //console.log(response["items"][i]["name"])
                  countries.push(response["items"][i]["name"] +" ("+ response["items"][i]["iata"] +")")
                  // autocomplete(document.getElementById("fromCity"), countries);
              }
              autocomplete(document.getElementById("flight_to_city"), countries);
              console.log(countries)
              // response["items"]
              //document.write(JSON.stringify(response))
          })
          // .then(response => document.write(JSON.stringify(response)))

          .catch(err => console.error(err));
  }
  

  }

  const checkFlight = () =>{

    console.log("Check checkFlight")
        console.log(document.getElementById('flight_from_city').value)
        console.log(document.getElementById('flight_to_city').value)
        console.log(document.getElementById('flight_departure_date').value)
        console.log(document.getElementById('flight_return_date').value)

        var from = document.getElementById('flight_from_city').value      
        from = from.split("(")
        from = from[1]
        from = from.substring(0, from.length - 1)

        var to = document.getElementById('flight_to_city').value
        to = to.split("(")
        to = to[1]
        
        to = to.substring(0, to.length - 1)
         
         

        localStorage.setItem("flight_from_city", document.getElementById('flight_from_city').value);
        localStorage.setItem("flight_to_city", document.getElementById('flight_to_city').value);
        localStorage.setItem("flight_departure_date", document.getElementById('flight_departure_date').value);
        localStorage.setItem("flight_return_date", document.getElementById('flight_return_date').value);
        localStorage.setItem("flight_from_city_code", from);
        localStorage.setItem("flight_to_city_code", to);

        document.getElementById('flight_available').click();

        // window.location.href = "/flight/available"


  }

  return (
    <div>  <div
    style={{
      backgroundImage:
        "url(https://www.pixel4k.com/wp-content/uploads/2018/03/Airplane%20Wing3650218716.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "100% 100%"
    }}
  >
    <div className="container">
      <br />
      <br />
      <img src="https://mybea.onrender.com/public/img/icone/logo1.png" width={340} alt="" />
      <br />
      <br />
      <br />
      <div>
      <Link to="/flight">
      <button type="button" className="btn btn-primary ">
          <img src="https://mybea.onrender.com/public/img/icone/outline_airplane_ticket_white_24dp.png" width={25} />
          <b> Flight</b>
      </button>
      </Link>

      <Link to="/">
      <button type="button" className="btn btn-primary mx-1">
          <img src="https://mybea.onrender.com/public/img/icone/outline_tram_white_24dp.png" width={25} />
          <b> Train</b>
      </button>
      </Link>

      <Link to="/bus">
      <button type="button" className="btn btn-primary ">
          <img src="https://mybea.onrender.com/public/img/icone/outline_directions_bus_filled_white_24dp.png" width={25} />
          <b> Bus</b>
      </button>
      </Link>
         
        
        
         
         
      </div>
      <div>
        <hr />
        <form autoComplete="off" action="" method="get">
          <div className="row">
            <div
              className="col-12 col-md-3 col-xl-3 "
              style={{ height: "auto" }}
            >
              <div className="autocomplete my-2" style={{ width: "100%" }}>
                <h6>
                  <b>
                    <samp style={{ color: "red" }}>*</samp>From:{" "}
                  </b>
                  <img
                    src="https://mybea.onrender.com/public/img/icone/flight_takeoff_FILL0_wght400_GRAD0_opsz48 (1).png"
                    width={25}
                    alt=""
                  />
                </h6>
                <input
                  id="flight_from_city"
                  className="form-control"
                  onKeyUp={fromCity}
                  type="text"
                  name="from"
                  defaultValue="London, London City (LCY)"
                  placeholder="From"

                />
              </div>
            </div>
            <div
              className="col-12 col-md-3 col-xl-3"
              style={{ height: "auto" }}
            >
              <div className="autocomplete  my-2" style={{ width: "100%" }}>
                <h6>
                  <img
                    src="https://mybea.onrender.com/public/img/icone/flight_land_FILL0_wght400_GRAD0_opsz48.png"
                    width={25}
                    alt=""
                  />
                  <b>
                    <samp style={{ color: "red" }}>*</samp>To:
                  </b>
                </h6>
                <input
                  id="flight_to_city"
                  onKeyUp={toCity}
                  className="form-control"
                  type="text"
                  name="to"
                  defaultValue="New York, La Guardia (LGA)"
                  placeholder="To"
                  
                />
              </div>
            </div>
            <div
              className="col-12 col-md-3 col-xl-2"
              style={{ height: "auto", marginTop: 4 }}
            >
              <div className="autocomplete my-2" style={{ width: "100%" }}>
                <h6>
                  <b>
                    <samp style={{ color: "red" }}>*</samp>Departure:
                  </b>
                </h6>
                <input
                  style={{ width: "100%", border: "1px solid black" }}
                  className="form-control"
                  id="flight_departure_date"
                  name="gdate"
                  type="date"
                  placeholder="Departure"
                />
              </div>
            </div>
            <div
              className="col-12 col-md-3 col-xl-2"
              style={{ height: "auto", marginTop: 4 }}
            >
              <div className="autocomplete my-2" style={{ width: "100%" }}>
                <h6>
                  <b>Return:</b>
                </h6>
                <input
                  style={{ width: "100%", border: "1px solid black" }}
                  className="form-control"
                  id="flight_return_date"
                  name="rdate"
                  type="date"
                  placeholder="Return"
                />
              </div>
            </div>
            <div
              className="col-12 col-md-3 col-xl-2"
              style={{ height: "auto", marginTop: 4 }}
            >
              <div className="autocomplete my-2" style={{ width: "100%" }}>
                <h6 style={{ color: "rgba(128, 8, 240, 0)" }}>submit</h6>
                <button className="btn btn-success" type="button" onClick={checkFlight}>
                  <b>Check</b>
                </button>
              </div>
            </div>
          </div>
        </form>
        <hr />
        <br />
      </div>
    </div>
  </div><hr />

  <Link to="/flight/available">
    <button
      type="button"
      id='flight_available'
      style={{ display: "none" }}
    >
      Train Available 
    </button>
    </Link>
  
 
</div>
  )
}
