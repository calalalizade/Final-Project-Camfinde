import React from 'react'
import Map from "../BackgroundMap/Map"
import CardList from '../CardList/CardList';
import MapDemo from '../ClientMap/MapDemo';
import FindNearest from '../Search/FindNearest';



function Hero() {
  return (
    <>
        <div className="earth_holder">
            <Map />
        </div>
        <section className="hero_section">
            <FindNearest />
        </section>
          <CardList />
          <MapDemo />
    </>
  )
}

export default Hero