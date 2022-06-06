import React, {useEffect,useState} from 'react';
import {distance} from "../../hooks/useLocationDistance"
import trialDetail from "../../api/data"
import "./FindNearest.css"
import {Link} from "react-scroll"
import TypeWriterEffect from 'react-typewriter-effect';

import { useDispatch} from 'react-redux';
import { fetchData , setIsScan , setClientPos } from '../../stores/scanReducer';


function FindNearest() {
  const dispatch = useDispatch();

  const [finalInfo,setFinalInfo] = useState([ ])
  const [locationPosition,setLocationPosition] = useState({});

  useEffect( () => {
    if(!navigator.geolocation){
      alert("Not Supported");
    }
    else{
      navigator.geolocation.getCurrentPosition((position => {
        setLocationPosition({
          ...position,
          defaultLatitude: position.coords.latitude,
          defaultLongitude: position.coords.longitude
        })
      }))
    }
    dispatch(setClientPos(locationPosition))
  }, [Object.keys(locationPosition).length === 0])

  const locationTotal = trialDetail.locations.length;

  function findIndicesOfMin(inp, count) {
    var outp = [];
    for (var i = 0; i < inp.length; i++) {
        outp.push(i); // add index to output array
        if (outp.length > count) {
            outp.sort(function(a, b) { return inp[a] - inp[b]; }); // descending sort the output array
            outp.pop(); // remove the last index (index of smallest element in output array)
        }
    }
    return outp;
  }

  const getFinalTrial = () => {
    if(trialDetail && locationTotal >= 1) {
      const trialLatitude = trialDetail.locations.map((el) => el.latitude);
      const trialLongitude = trialDetail.locations.map((el) => el.longitude);
      const distanceArray = trialLatitude.map((lat,idx) => {
        const log = trialLongitude[idx];
        return distance(
          locationPosition.defaultLatitude,
          locationPosition.defaultLongitude,
          lat,
          log,
        );
      });

      var array = [];
      var indices = findIndicesOfMin(distanceArray, 6);
      for (var i = 0; i < indices.length; i++){
        array.push(trialDetail.locations[indices[i]])
      }
      return array;
    }
    return {};
  };

  useEffect (() => {
    const finalLocationInfo = getFinalTrial();

    setFinalInfo(
      [...finalLocationInfo]
    ); 
  },[])

  function getData(){
    const finalLocationInfo = getFinalTrial();

    setFinalInfo(
      [...finalLocationInfo]
    ); 

    dispatch(fetchData(finalInfo))
    dispatch(setIsScan())
    dispatch(setClientPos(locationPosition))

  }


  return (
    <>
      <div id="button_wrapper">
        <Link onClick={getData} to="list" smooth={true} duration={1000} className="my-super-cool-btn">
          <div className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <span>Scan!</span>
        </Link>
      </div>

      <div className='text_wrapper'>
        <TypeWriterEffect
          textStyle={{ 
          fontFamily: 'Montserrat',
          marginLeft: "20px",
          fontSize: "60px",
          color: "#F3CF14",
          width: "700px",
          textAlign: "center",
          letterSpacing: "-2px",
          textShadow: "0 5px 15px #2e2e31, 0 5px 80px #2e2e31",
        }}
          startDelay={200}
          cursorColor="#F3CF14"
          multiText={[
            "Hi there!",
            "Want to find nearby universities?",
            "Yaxınlıqdakı universitetləri tapmaq istəyirsiniz?",
            "Хотите найти близлежащие университеты?",
            "Scan Now... Find universities near you!",
          ]}
          loop={true}
          nextTextDelay={1000}  
          typeSpeed={100}
        />
      </div>
    </>
  );
}

export default FindNearest;