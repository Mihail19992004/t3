import React, {useState} from "react";

import CancelIcon from "@material-ui/icons/Cancel";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import "./PhotoSlider.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIosOutlined";
export function PhotoSlider({
  photoDiv,
  nextImage,
  setCover,
  cover,
  slide,
  imgs,
}) {
    const [isActive, setIsActive] = useState(false)
  function getSmallImg(e) {
    let test = imgs.map((e, i) => e.largeImageURL === cover);
    let index = test.indexOf(true);
        console.log(index)


      return((imgs[index + e]) ?(imgs[index + e].largeImageURL) : null);

  }
  const hoverStyle = {
        display : isActive && cover ? null : 'none',
      transitionDuration: '0.5s'
  }
  const openDiv = {
        width : cover ? null : '0'
  }
  const hideDiv = {
        display: cover ? null : 'none'
  }
  return (
    <div className="test" name='gothere' style={photoDiv}>
      <div className="cover" onMouseEnter={()=>setIsActive(true)} onMouseLeave={()=> setIsActive(false)}>
        {!slide ? (
          <div className="button1" style={hoverStyle} onClick={() => nextImage("slide")}>
            <p>Play</p>
            <PlayArrowIcon />
          </div>
        ) : (
          <div className="button1" style={hoverStyle} onClick={() => nextImage("stop")}>
            <p>Stop</p>
            <StopIcon />
          </div>
        )}

          { cover !== imgs[0]?.largeImageURL ?
              <div className="arrow_slider" style={hoverStyle} onClick={() => nextImage("prev")}>
              <ArrowBackIosIcon/>
          </div> : null
          }

        <img className="bigImg" src={cover} style={hideDiv} alt="" />

          {cover !== imgs[imgs.length -1]?.largeImageURL ? <div className="arrow_slider1" style={hoverStyle} onClick={() => nextImage("next")}>
              <ArrowForwardIosIcon/>
          </div> : null}
      </div >
      <div className="photo_selector" style={openDiv}>

          {
              getSmallImg(1) ?  <div className="small-img" >
                  <img src={getSmallImg(1)} alt="" onClick={()=> setCover(getSmallImg(1))} />
              </div> : null
          }


          {
              getSmallImg(2) ?  <div className="small-img" >
                  <img src={getSmallImg(2)} alt="" onClick={()=> setCover(getSmallImg(2))} />
              </div> : null
          }{
          getSmallImg(3) ?  <div className="small-img" >
              <img src={getSmallImg(3)} alt="" onClick={()=> setCover(getSmallImg(3))} />
          </div> : null
      }{
          getSmallImg(4) ?  <div className="small-img" >
              <img src={getSmallImg(4)} alt="" onClick={()=> setCover(getSmallImg(4))} />
          </div> : null
      }

      </div>
      <CancelIcon style={hideDiv} className="cross-ico"  onClick={() => setCover("")} />
    </div>
  );
}
