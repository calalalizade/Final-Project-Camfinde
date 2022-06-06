import React , {useState} from 'react';
import "./Badge.css"
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import {useSelector } from 'react-redux';
import { Tooltip } from "@mui/material"




export default function BadgeVisibility() {
  const [toggleList, setToggleList] = useState(false)

  const data = useSelector((state) => state.bookmarkData.bookmarks);
  const count = useSelector((state) => state.bookmarkData.count);
  console.log(count)


  function handleClick(){
    setToggleList(prev => !prev);
  }


  return (
    <>
      <div className="badge">
        <div className={`bookmark_list_holder ${toggleList ? '' : "hide"} `}>

              <ul className='bookmark_list'>
                {data.length > 0 ? "" : <p className="list_empty_message">The list is empty ...</p>}
                {data && data.map((item) => {
                  return (
                    <li className='bookmark_card'>
                      <img className='bookmarked_image' src={item.img} alt='uni'></img>
                      <div className='bookmarked_info'>
                        <h3>{item.uni}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare cursus mauris laoreet pharetra. </p>
                      </div>
                    </li>               
                  )
                })}
                
              </ul>

          </div>

        <Tooltip title="Bookmark List"  placement="left">
            <Box onClick={handleClick} className="badgeBox"
              sx={{
                  color: 'action.active',
                  display: 'flex',
                  flexDirection: 'column',
                  '& > *': {
                  marginBottom: 2,
                  },
                  '& .MuiBadge-root': {
                  marginRight: 2,
                  },
              }}
            >

            <div>
                <Badge 
                color="secondary" 
                badgeContent={count}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                >
                <BookmarksIcon sx={{ 
                    fontSize: 60 , 
                    color: "white" , 
                    background: "#9C27B0" , 
                    padding: "10px" , 
                    borderRadius: "50%" , 
                    boxShadow: " 0 10px 20px #2e2e31, 0 10px 80px #2e2e31;" }}/>
                </Badge>
            </div>
            </Box>
      </Tooltip>
      </div>

    </>
  );
}