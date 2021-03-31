import React, { useEffect, useState } from 'react';
import data from '../../data.json'
import bg from '../../images/Bg.png'
import SelectRide from '../SelectRide/SelectRide';
import './Home.css'

const Home = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        setCard(data)
    }, [])

    const style = {
        backgroundImage: ` url(${bg})`,
        height: '800px',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className="mainBody" style={style} >
            <div className="container">
                <div className="row cardContainer">
                    {
                        card.map(card => <SelectRide card={card} ></SelectRide>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;