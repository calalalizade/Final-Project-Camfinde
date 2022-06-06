import React, { useRef, useEffect, useState } from 'react';
import "./ClientMap.css"
import { useSelector} from 'react-redux';


// @ts-ignore
 import mapboxgl from 'mapbox-gl';
 // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
 mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

 mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsYWxhbGl6YWRhIiwiYSI6ImNsM3RxNWljbjAxNzAzam90NjllM2N5cWwifQ.wPwtZxA6ZCx2Ywc1wyKMyg';


function MapDemo() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(49.847086442994424);
    const [lat, setLat] = useState(40.37781286819813);
    const [zoom, setZoom] = useState(10);

    const actualData = useSelector((state) => state.scanResult.data)
    const locationPosition = useSelector((state) => state.scanResult.locationPosition)
    
    useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/calalalizada/cl3xd7im2001115o5mgg2h9jf',
        center: [lng, lat],
        zoom: zoom
      });

      },);

      useEffect( () => {
        if(Object.keys(locationPosition).length !== 0){
          var marker = new mapboxgl.Marker({ "color": "#b40219" })
            .setLngLat([49.8485551470718 , 40.37868970787946 ])
            .addTo(map.current);
        }
      })

  
      useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
      });
  

      function handleClick() {
        actualData.forEach((location) => {
          var marker = new mapboxgl.Marker()
            .setLngLat([location.longitude, location.latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: 30 }).setHTML(
                "<h4>" + "Baku" + "</h4>" + location.uni
              )
            )
            .addTo(map.current);
        });
      }
  
  
    return (
      <div className='Map'>
          <div>
            <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} | <button onClick={handleClick}>Show on the Map</button>
            </div>
            <div ref={mapContainer} className="map-container" />
          </div>
      </div>
    )
}

export default MapDemo