import React from 'react'

export default function TrainMap() {
  return (
    <div><div className="container"><hr />
    <h3>
      <b>
        Explore the India <i className="bi bi-globe-central-south-asia" />
      </b>
    </h3>
    <h6>You can use the map to search for all indian railway station. </h6>
    <iframe
      title='myframe'
      src="https://www.google.com/maps/d/embed?mid=1EbCnBzR6yyycaYTpzjOJUQi4O3ds59c&ehbc=2E312F"
      style={{ width: "100%" }}
      height={680}
    />
  </div>
  </div>
  )
}
