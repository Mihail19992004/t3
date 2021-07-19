import React from 'react'
import './Photos.css'
export function Photos({imgs,onlyPhoto,setCover2,setCover}) {
        return (
            <div className="content">
                <div className="container">
                    {imgs && onlyPhoto ? (
                        <div className="cont">
                            <h2>Images</h2>
                            <div className="line"></div>
                        </div>
                    ) : null}
                    {imgs && onlyPhoto
                        ? imgs.map((e) => (
                            <img
                                onClick={() => {
                                    setCover2("");
                                    setCover(e.largeImageURL);
                                    window.scrollTo({
                                        top: 190,
                                        behavior: "smooth",
                                    });
                                }}
                                src={e.largeImageURL}
                                href='#goThere'
                            />
                        ))
                        : null}
                </div>
            </div>
        )
}