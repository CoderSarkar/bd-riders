import React from 'react';
import { Link } from 'react-router-dom';
import './SelectRide.css'

const SelectRide = (props) => {
    const { name, image,id } = props.card;
    return (
        <div className="col-md-3 col-sm-12 cardBody">
            <div className="cardSection">
                <Link to={`/details/${id}`}>
                    <img src={image} alt=""/>
                    <h3 className="text-center" >  {name} </h3>
                </Link>
            </div>
        </div>
    );
};

export default SelectRide;