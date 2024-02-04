// MentorCard.jsx
import React from 'react';
// import ava1 from "../img/ava1.png"
// import ava2 from "../img/ava2.png"
// import ava3 from "../img/ava3.png"
// import ava4 from "../img/ava4.png"
// import ava5 from "../img/ava5.png"
// import ava6 from "../img/ava6.png"

const Mentor = ({ name, expertise, rating, reviews, badges, imgSrc }) => {
  const handleReservationClick = () => {
    window.location.href = 'https://calendly.com/huenguyen_2026';
  };
    return (
      <div className="card mb-3 py-3 px-3 custom-card col-md-4">
        <div className="row g-0">
          <div className="col-md-12 px-3 d-flex justify-content-center align-items-center">
            <img src={imgSrc} className="img-fluid image-mentor" alt="Mentor Avatar" />
          </div>
          <div className="col-md-12 py-3">
            <div className="card-body">
              <h1 className="card-title pt-1 custom-h1-card" style={{ display: 'inline-block' }}>{name}</h1>
              
              <p className="card-text">{expertise}</p>
              <p className="card-text">Rating: {rating} ({reviews} reviews)</p>
              <div className="badge-ability d-flex justify-content-center">
                {badges ? badges.map((badge, index) => (
                  <span key={index} className="badge rounded-pill bg-light text-dark me-4">{badge}</span>
                )) : null}
              </div>
              <button type="button" className="btn btn-primary bg-info mt-3 make-reservation-button" onClick={handleReservationClick}>
              Make A Reservation
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Mentor;