import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
          
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
           
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
        
        currentFocus++;
         
        //addActive(x);
      } else if (e.keyCode == 38) { //up
       
        currentFocus--;
         
        //addActive(x);
      } else if (e.keyCode == 13) {
         
        e.preventDefault();
        if (currentFocus > -1) {
          
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    
    if (!x) return false;
     
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
 
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
     
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
     
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
   
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
 

export default function Bus() {
  let countries = ["Delhi","Mumbai","Kolkāta","Bangalore","Chennai","Hyderābād","Pune","Ahmedabad","Sūrat","Lucknow","Jaipur","Cawnpore","Mirzāpur","Nāgpur","Ghāziābād","Indore","Vadodara","Vishākhapatnam","Bhopāl","Chinchvad","Patna","Ludhiāna","Āgra","Kalyān","Madurai","Jamshedpur","Nāsik","Farīdābād","Aurangābād","Rājkot","Meerut","Jabalpur","Thāne","Dhanbād","Allahābād","Vārānasi","Srīnagar","Amritsar","Alīgarh","Bhiwandi","Gwalior","Bhilai","Hāora","Rānchi","Bezwāda","Chandīgarh","Mysore","Raipur","Kota","Bareilly","Jodhpur","Coimbatore","Dispur","Guwāhāti","Solāpur","Trichinopoly","Hubli","Jalandhar","Bhubaneshwar","Bhayandar","Morādābād","Kolhāpur","Thiruvananthapuram","Sahāranpur","Warangal","Salem","Mālegaon","Kochi","Gorakhpur","Shimoga","Tiruppūr","Guntūr","Raurkela","Mangalore","Nānded","Cuttack","Chānda","Dehra Dūn","Durgāpur","Āsansol","Bhāvnagar","Amrāvati","Nellore","Ajmer","Tinnevelly","Bīkaner","Agartala","Ujjain","Jhānsi","Ulhāsnagar","Davangere","Jammu","Belgaum","Gulbarga","Jāmnagar","Dhūlia","Gaya","Jalgaon","Kurnool","Udaipur","Bellary","Sāngli","Tuticorin","Calicut","Akola","Bhāgalpur","Sīkar","Tumkūr","Quilon","Muzaffarnagar","Bhīlwāra","Nizāmābād","Bhātpāra","Kākināda","Parbhani","Pānihāti","Lātūr","Rohtak","Rājapālaiyam","Ahmadnagar","Cuddapah","Rājahmundry","Alwar","Muzaffarpur","Bilāspur","Mathura","Kāmārhāti","Patiāla","Saugor","Bijāpur","Brahmapur","Shāhjānpur","Trichūr","Barddhamān","Kulti","Sambalpur","Purnea","Hisar","Fīrozābād","Bīdar","Rāmpur","Shiliguri","Bāli","Pānīpat","Karīmnagar","Bhuj","Ichalkaranji","Tirupati","Hospet","Āīzawl","Sannai","Bārāsat","Ratlām","Handwāra","Drug","Imphāl","Anantapur","Etāwah","Rāichūr","Ongole","Bharatpur","Begusarai","Sonīpat","Rāmgundam","Hāpur","Uluberiya","Porbandar","Pāli","Vizianagaram","Puducherry","Karnāl","Nāgercoil","Tanjore","Sambhal","Naihāti","Secunderābād","Kharagpur","Dindigul","Shimla","Ingrāj Bāzār","Ellore","Puri","Haldia","Nandyāl","Bulandshahr","Chakradharpur","Bhiwāni","Gurgaon","Burhānpur","Khammam","Madhyamgram","Ghāndīnagar","Baharampur","Mahbūbnagar","Mahesāna","Ādoni","Rāiganj","Bhusāval","Bahraigh","Shrīrāmpur","Tonk","Sirsa","Jaunpur","Madanapalle","Hugli","Vellore","Alleppey","Cuddalore","Deo","Chīrāla","Machilīpatnam","Medinīpur","Bāramūla","Chandannagar","Fatehpur","Udipi","Tenāli","Sitalpur","Conjeeveram","Proddatūr","Navsāri","Godhra","Budaun","Chittoor","Harīpur","Saharsa","Vidisha","Pathānkot","Nalgonda","Dibrugarh","Bālurghāt","Krishnanagar","Fyzābād","Silchar","Shāntipur","Hindupur","Erode","Jāmuria","Hābra","Ambāla","Mauli","Kolār","Shillong","Bhīmavaram","New Delhi","Mandsaur","Kumbakonam","Tiruvannāmalai","Chicacole","Bānkura","Mandya","Hassan","Yavatmāl","Pīlibhīt","Pālghāt","Abohar","Pālakollu","Kānchrāpāra","Port Blair","Alīpur Duār","Hāthras","Guntakal","Navadwīp","Basīrhat","Hālīsahar","Rishra","Dharmavaram","Baidyabāti","Darjeeling","Sopur","Gudivāda","Adilābād","Titāgarh","Chittaurgarh","Narasaraopet","Dam Dam","Vālpārai","Osmānābād","Champdani","Bangaon","Khardah","Tādpatri","Jalpāiguri","Suriāpet","Tādepallegūdem","Bānsbāria","Negapatam","Bhadreswar","Chilakalūrupet","Kalyani","Gangtok","Kohīma","Khambhāt","Aurangābād","Emmiganūr","Rāyachoti","Kāvali","Mancherāl","Kadiri","Ootacamund","Anakāpalle","Sirsilla","Kāmāreddipet","Pāloncha","Kottagūdem","Tanuku","Bodhan","Karūr","Mangalagiri","Kairāna","Mārkāpur","Malaut","Bāpatla","Badvel","Jorhāt","Koratla","Pulivendla","Jaisalmer","Tādepalle","Armūr","Jatani","Gadwāl","Nagari","Wanparti","Ponnūru","Vinukonda","Itānagar","Tezpur","Narasapur","Kothāpet","Mācherla","Kandukūr","Sāmalkot","Bobbili","Sattenapalle","Vrindāvan","Mandapeta","Belampalli","Bhīmunipatnam","Nāndod","Pithāpuram","Punganūru","Puttūr","Jalor","Palmaner","Dholka","Jaggayyapeta","Tuni","Amalāpuram","Jagtiāl","Vikārābād","Venkatagiri","Sihor","Jangaon","Mandamāri","Metpalli","Repalle","Bhainsa","Jasdan","Jammalamadugu","Rāmeswaram","Addanki","Nidadavole","Bodupāl","Rājgīr","Rajaori","Naini Tal","Channarāyapatna","Maihar","Panaji","Junnar","Amudālavalasa","Damān","Kovvūr","Solan","Dwārka","Pathanāmthitta","Kodaikānal","Udhampur","Giddalūr","Yellandu","Shrīrangapattana","Angamāli","Umaria","Fatehpur Sīkri","Mangūr","Pedana","Uran","Chimākurti","Devarkonda","Bandipura","Silvassa","Pāmidi","Narasannapeta","Jaynagar-Majilpur","Khed Brahma","Khajurāho","Koilkuntla","Diu","Kulgam","Gauripur","Abu","Curchorem","Kavaratti","Panchkula","Kagaznāgār", "Banda", "Kanpur"];
  
  const fromCity = () =>{
    let city = document.getElementById("bus_from_city").value;
    console.log(city)
    autocomplete(document.getElementById("bus_from_city"), countries);

  }
  const toCity = () =>{
    let city = document.getElementById("bus_to_city").value;
    console.log(city)
    autocomplete(document.getElementById("bus_to_city"), countries);

  }

  
 

  const checkBus = () => {

    console.log("Check Bus")
    console.log(document.getElementById('bus_from_city').value)
    console.log(document.getElementById('bus_to_city').value)
    console.log(document.getElementById('bus_departure_date').value)
    console.log(document.getElementById('bus_return_date').value)

    localStorage.setItem("bus_from_city", document.getElementById('bus_from_city').value);
    localStorage.setItem("bus_to_city", document.getElementById('bus_to_city').value);
    localStorage.setItem("bus_departure_date", document.getElementById('bus_departure_date').value);
    localStorage.setItem("bus_return_date", document.getElementById('bus_return_date').value);

    document.getElementById('bus_available').click();

    // window.location.href = "/bus/available"


    
  }
  return (
    <div><div
      style={{
        backgroundImage:
          "url(https://coolwallpapers.me/picsup/5749741-bus-wallpapers.jpg)",
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
          <form  >
            <div className="row">
              <div className="col-12 col-md-3 col-xl-3 " style={{ height: "auto" }}>
                <div className="autocomplete my-2" style={{ width: "100%" }}>
                  <h6>
                    <b>
                      <samp style={{ color: "red" }}>*</samp>From:{" "}
                    </b>
                    <i className="bi bi-arrow-right-square-fill" />
                  </h6>
                  <input
                    id="bus_from_city"
                    onKeyUp={fromCity}
                    className="form-control"
                    type="text"
                    name="from"
                    defaultValue="Banda"
                    placeholder="From"
                  />
                </div>
              </div>
              <div className="col-12 col-md-3 col-xl-3" style={{ height: "auto" }}>
                <div className="autocomplete  my-2" style={{ width: "100%" }}>
                  <h6>
                    <i className="bi bi-arrow-right-square-fill" />
                    <b>
                      <samp style={{ color: "red" }}> *</samp>To:
                    </b>
                  </h6>
                  <input
                    id="bus_to_city"
                    className="form-control"
                    onKeyUp={toCity}

                    type="text"
                    name="to"
                    defaultValue="Kanpur"
                    placeholder="To"
                  />
                </div>
              </div>
              <div className="col-12 col-md-3 col-xl-2" style={{ height: "auto" }}>
                <div className="autocomplete my-2" style={{ width: "100%" }}>
                  <h6>
                    <b>
                      <samp style={{ color: "red" }}>*</samp>Departure:
                    </b>
                  </h6>
                  <input
                    style={{ width: "100%", border: "1px solid black" }}
                    className="form-control"
                    id="bus_departure_date"
                    name="bus_departure_date"
                    type="date"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-12 col-md-3 col-xl-2" style={{ height: "auto" }}>
                <div className="autocomplete my-2" style={{ width: "100%" }}>
                  <h6>
                    <b>Return:</b>
                  </h6>
                  <input
                    style={{ width: "100%", border: "1px solid black" }}
                    className="form-control"
                    id="bus_return_date"
                    name="bus_return_date"
                    type="date"
                    placeholder="Return Date"
                  />
                </div>
              </div>
              <div
                className="col-12 col-md-3 col-xl-2"
                style={{ height: "auto", marginTop: 3 }}
              >
                <div className="autocomplete my-1" style={{ width: "100%" }}>
                  <h6 style={{ color: "rgba(128, 8, 240, 0)" }}>submit</h6>
                  <button className="btn btn-success" type="button" onClick={checkBus}>
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
    <Link to="/bus/available">
    <button
      type="button"
      id='bus_available'
      style={{ display: "none" }}
    >
      Train Available 
    </button>
    </Link>
    </div>
  )
}
