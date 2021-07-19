import React from 'react'

export function Catalog({category, activeTopic,activeDiv,setSource,setActiveTopic,lang,activeCountry,setActiveCountry,sources,sourcesEn,source}) {
    return(
        <div>
            <div className="catalog">
                {category.map((e) =>
                    e === activeTopic ? (
                        <div style={activeDiv} className="catalog-item">
                            <h2>{e.toUpperCase()}</h2>
                        </div>
                    ) : (
                        <div
                            onClick={() => {
                                setSource("");
                                setActiveTopic(e);
                            }}
                            className="catalog-item"
                        >
                            <h2>{e.toUpperCase()}</h2>
                        </div>
                    )
                )}
            </div>
            <div className="catalog">
                {lang.map((e) =>
                    e === activeCountry ? (
                        <div style={activeDiv} className="catalog-item">
                            <h2>{e.toUpperCase()}</h2>
                        </div>
                    ) : (
                        <div
                            onClick={() => {
                                setSource("");
                                setActiveCountry(e);
                            }}
                            className="catalog-item"
                        >
                            <h2>{e.toUpperCase()}</h2>
                        </div>
                    )
                )}
            </div>
            <div className="catalog">
                {activeCountry === "ru"
                    ? sources.map((e) =>
                        e === source ? (
                            <div style={activeDiv} className="catalog-item">
                                <h2>{e.toUpperCase()}</h2>
                            </div>
                        ) : (
                            <div
                                onClick={() => {
                                    setActiveTopic("");
                                    setActiveCountry("");
                                    setSource(e);
                                }}
                                className="catalog-item"
                            >
                                <h2>{e.toUpperCase()}</h2>
                            </div>
                        )
                    )
                    : sourcesEn.map((e) =>
                        e === source ? (
                            <div style={activeDiv} className="catalog-item">
                                <h2>{e.toUpperCase()}</h2>
                            </div>
                        ) : (
                            <div
                                onClick={() => {
                                    setActiveTopic("");
                                    setActiveCountry("");
                                    setSource(e);
                                }}
                                className="catalog-item"
                            >
                                <h2>{e.toUpperCase()}</h2>
                            </div>
                        )
                    )}
            </div>
        </div>
    )
}