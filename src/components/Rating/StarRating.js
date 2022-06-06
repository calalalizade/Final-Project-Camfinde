import React , {useState} from 'react'
import { Stack, Rating , Tooltip } from "@mui/material"
import "./StarRating.css"

function StarRating() {
    const [ratingValue,setRatingValue] = useState(0)

    return (
        <div className="star_container">
            <Tooltip title="rate" arrow followCursor={true}>
                <Stack spacing={2}>
                    <Rating 
                        name="half-rating" 
                        precision={0.5} 
                        onChange={(event, newValue) => {
                            setRatingValue(newValue);
                        }}
                        />
                </Stack>  
            </Tooltip>
            <span className="star_value">{ratingValue.toFixed(1)}</span>
        </div>
    )
}

export default StarRating