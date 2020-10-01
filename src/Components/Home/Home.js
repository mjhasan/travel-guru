import React, { useState } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import DestinationFakeData from '../../fakeData/DestinationFakeData';

const Home = () => {

    const [destination, setDestination] = useState(DestinationFakeData[0]);
    const imgClickedHandle = (destinationId = 1) => {
        const item = DestinationFakeData.find(item => item.id === destinationId);
        setDestination(item);
    }

    return (
        <div className='row wrapper'>
            <div id='destination-detail' className="col-md-6">
                <h2 className="text-white">{destination.destination} </h2>
                <p>{destination.description}</p>
                <button className='btn btn-warning booking-btn px-3 py-2'><Link to={`/booking-${destination.destination.toLowerCase()}`}>Booking </Link></button>
            </div>

            <div id='destination-images' className='d-flex justify-content-end col-md-6 row'>
                {DestinationFakeData.map((item) => {
                    return (
                        <div class="col-md-4">
                            <img onClick={() => imgClickedHandle(item.id)} className="img" src={item.img} alt="Locations"></img>
                            <h4 className='img-title'>{item.destination}</h4>
                        </div>

                    )
                }
                )};

            </div>
        </div>
    );
};


export default Home;

