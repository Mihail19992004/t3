import React, { useEffect, useState } from "react";
import { Article } from "./Article";
import "./News.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import {Catalog} from "./Catalog";
export function News() {
  const [news, setNews] = useState([]);
  const [activeTopic, setActiveTopic] = useState("business");
  const [activeNews, setActiveNews] = useState(0)
  const [activePage, setActivePage] = useState(1);
  const [activeCountry, setActiveCountry] = useState("ru");
  const [source, setSource] = useState("");
  let category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  let lang = ["ru", "us", "gb"];
  let sourcesEn = ["business-insider", "fox-news", "usa-today", "engadget"];
  let sources = ["rt", "lenta", "rbc"];
  let activeSources;
  const getNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?${
        !source
          ? `&country=${activeCountry}&category=${activeTopic}`
          : `&sources=${source}`
      }&pageSize=50&page=${activePage}&apiKey=553c8b01a1da420d937de05eb58db23d`
    );

    const dt = await response.json();
    if (dt.status) {
      setNews(dt.articles);
    }
  };
  useEffect(() => {
    getNews();
  }, [activeTopic, activeCountry, source]);
  console.log(activeTopic);
  const activeDiv = {
    background: "black",
    color: "white",
    cursor: "default",
  };
  return (
    news ? <div className='back-news'>
      <Header name="News" />
      <div className="flex-test" >
          <div className="left-news-block">
              {news.length && (
                  <div className="active-news" >
                      <div className="left-block">
                          <h2>{news[activeNews].title}</h2>
                          <p>{news[activeNews].description}</p>
                          <div className="slide-box">
                              {
                                  news.map((e,i)=> i !== activeNews ?(<div className="slide-el"  onClick={()=> setActiveNews(i)}></div>) : (<div className="slide-el"  style={{background: 'black'}}></div>))


                              }
                          </div>
                      </div>
                      <img src={news[activeNews].urlToImage} alt="" />
                  </div>
              )}
          </div>
          <div className="right-menu">
              <Catalog activeCountry={activeCountry} activeDiv={activeDiv} activeTopic={activeTopic} category={category} sourcesEn={sourcesEn}
                       setActiveCountry={setActiveCountry} lang={lang} setActiveTopic={setActiveTopic} setSource={setSource} source={source} sources={sources}  />
          </div>
      </div>
              <div className="fix"></div>

              <div className="news">
                  {news && news.map((e,i) => <Article news={e} setActiveNews={setActiveNews} index={i}/>)}
              </div>




      <Footer />
    </div> : <h1>aaaa</h1>
  );
}
