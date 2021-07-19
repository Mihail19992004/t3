import React from 'react'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIosOutlined";
import CancelIcon from "@material-ui/icons/Cancel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIosOutlined";

export function VideoSlider({videoDiv, nextVideo , setCover2, cover2}) {
    return (
        <div className="test" style={videoDiv}>
            <div className="cover2">
                <div className="">
                    <ArrowBackIosIcon onClick={() => nextVideo("prev")} />
                </div>
                <CancelIcon className="cross-ico" onClick={() => setCover2("")} />
                <video className="bigVideo" autoPlay="true" controls src={cover2} />
                <div className="">
                    <ArrowForwardIosIcon onClick={() => nextVideo("next")} />
                </div>
            </div>
        </div>
    )
}