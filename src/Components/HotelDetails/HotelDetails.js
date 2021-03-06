import React, { useState } from 'react';
import './HotelDetails.css'
import { useParams } from 'react-router-dom';
import HotelFakeData from '../../fakeData/HotelFakeData'
import MapView from '../Map/MapView';

const HotelDetails = (props) => {
    const { destination } = useParams();
    const matchedItem = HotelFakeData.filter(matchItem => matchItem.destination == destination.toLowerCase());

    return (
        <div id='hotel-wrapper ' className='row'>

            <div className='col-6 hotel-info ml-2 mb-5'>

                {
                    matchedItem.map(item => {
                        return (

                            <div className="row d-flex mt-5 pb-3 pl-3">
                                <div className="col-5 mr-3 " >
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="col-6 mx-3 mt-3 hotel-info">
                                    <h4 className="text-white">{item.title} </h4>
                                    <p className="text-white">{item.description} </p>
                                    <div className="row d-flex">
                                        <div className="col-5 ml-2 pl-3">
                                            <p className="text-white">{item.rating} </p>
                                        </div>
                                        <div className="col-5">
                                            <p className="text-white">$ {item.cost} <span className="text-white">/night</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
            <div className="col-5">
                <MapView coordinates={props.coordinates} ></MapView>

            </div>
        </div>
    );
};

export default HotelDetails;