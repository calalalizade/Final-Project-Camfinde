import "./InfoCard.css"
import React , {useState} from 'react'
import { useDispatch} from 'react-redux';
import { addBookmarks, removeBookmarks } from "../../stores/bookmarkReducer";
import { useInView } from 'react-intersection-observer';
import StarRating from '../Rating/StarRating';
import { Tooltip } from "@mui/material"
import bookmarkNormal from "../../images/bookmarkNormal.png"
import bookmarkChecked from "../../images/bookmarkChecked.png"

function InfoCard(props) {
    const dispatch = useDispatch();

    const { ref, inView: isVisible } = useInView({
        triggerOnce: true,
    });

    const [bookmarked,setBookmarked] = useState(false);


    const handleBookmarkChange = () => {
        setBookmarked(prev => !prev)

        if(bookmarked){
            dispatch(removeBookmarks(props))
        }else{
            dispatch(addBookmarks(props))
        }
    }

    
    return (
      <div ref={ref} className={`card ${isVisible ? "animate" : "animateBack"}`}>
          <div className='info'>

              <div className="info_top">
                <h4 className="info_title">{props.uni}</h4>

                <div className="info_location">
                    <img className='info_location_mark' src='locationMark.png' alt='locationMark'></img>
                    <span>Baku, Azerbaijan</span>
                </div>

                <p className="info_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla at neque eget sem eleifend pretium a vel orci. Quisque vitae consectetur ligula, nec maximus risus. </p>
              </div>

              <div className="info_bottom">
                <Tooltip title="bookmark" arrow>
                    <img 
                        onClick={handleBookmarkChange} 
                        className='info_bookmark' 
                        src={bookmarked ? bookmarkChecked : bookmarkNormal} 
                        alt="bookmark icon"
                    />
                </Tooltip>
                <StarRating />
              </div>

          </div>
          <div className="poster_img">
              <img src={props.img} alt="not available"></img>
          </div>
      </div>
    )
}

export default InfoCard;




