import React from 'react'
import {Link} from 'react-router-dom'


export default function Header(props) {
  const searchBarFun = ()=>{
    console.log("searchBarFun")
    console.log(document.getElementById('searchBar').value)
    var search = document.getElementById('searchBar').value
    search = search.toLowerCase();
    if(search == "bus" || search == "bus search"){
      
      document.getElementById("bussearch").click()
    }
    if(search == "train" || search == "train search"){
      
      document.getElementById("trainsearch").click()
    }
    if(search == "flight" || search == "flight search"){
 
      document.getElementById("flightsearch").click()
    }
  
  }
  
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        {" "}
        <img src="https://mybea.onrender.com/public/img/icone/logo.png" width={40} alt="" />{" "}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-1">
            <Link
              className="nav-link active text-success"
              aria-current="page"
              to="/"
            >
              <i className="bi bi-house-fill" /> <b>Home</b>
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link active" aria-current="page" to="/offers">
              <i className="bi bi-gift" /> <b>Offers</b>
            </Link>
          </li>
          <li className="nav-item mx-1">
          <Link className="nav-link active" aria-current="page" to="/myflight/ticket">
              <i className="bi  bi-tags-fill" /> <b>My Ticket</b>
            </Link>
          </li>

          <li className="nav-item mx-1" style={{ display: props.display }}>
          <a className="nav-link active text-primary" aria-current="page" href="">
              <i className="bi bi-person-fill" /> <b>{localStorage.getItem("user_name")}</b>
            </a>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="searchBar"
          />
          <button className="btn btn-outline-success" type="button" onClick={searchBarFun}>
            Search
          </button>
          <Link to={props.btnLink} className="btn btn-outline-primary mx-2">
          {props.btn}
          </Link>

          <Link to="/bus" id="bussearch" >
           
          </Link>
          <Link to="/flight" id="flightsearch" >
           
          </Link>
          <Link to="/" id="trainsearch">
           
          </Link>
           
           
        </form>
      </div>
    </div>
  </nav>
  </div>
  )
   
}

Header.defaultProps = {
   btn : "login",
   btnLink:"/login",
   display: "none"
}