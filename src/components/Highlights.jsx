import React from 'react';

const Highlights = () => {
  return (
    <div className='highlights--container'>
        <div className="highlights--container__images">
           <div className="row_1">
                <div className="flexi">
                    {/* <img src={flexi} alt="flexi" /> */}
                    <span>Flexible Leases</span>
                </div>
                <div className="happy">
                    {/* <img src={happy} alt="happy" /> */}
                    <span>7-Day Happiness Guaranteed</span>
                </div>
           </div>
            <div className="row_2">
            <div className="clean">
                {/* <img src={clean} alt="clean" /> */}
                <span>Monthly House Cleaning</span>
            </div>
            <div className="roommate">
                {/* <img src={roommate} alt="roommate" /> */}
                <span>Choose Your Own Roommate</span>
            </div>
            </div>
        </div>
        <div className="highlights--container__text">
            <h2 className="highlights--container__text__headline">
            Flexibility and options to suit your lifestyle.
            </h2>
            <p className="highlights--container__text__description">You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</p>
            <button className='highlights--container__text__button'>Search Rooms</button>
        </div>
    </div>
  )
}

export default Highlights