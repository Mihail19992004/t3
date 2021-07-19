import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import './ChangePage.css'
export function ChangePage({prevPage, imgs, number, styleDiv, setPage,setCover, nextPage, page}) {
  return (
    <div className="button">
      <div className="border">
        <ArrowBackIosIcon className="btn" onClick={prevPage} />
      </div>
      {imgs[2]?.webformatURL
        ? number.map((e, i) =>
            e === page ? (
              <div className="roll" style={styleDiv}>
                <p>{e}</p>
              </div>
            ) : (
              <div
                onClick={() => {
                  setPage(e);
                  setCover("");
                }}
                className="roll"
              >
                <p>{e}</p>
              </div>
            )
          )
        : ""}
      <div className="border">
        <ArrowForwardIosIcon className="btn" onClick={nextPage} />
      </div>
    </div>
  );
}
