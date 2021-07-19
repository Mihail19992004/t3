import React, { useEffect, useRef, useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import CancelIcon from "@material-ui/icons/Cancel";
import "./main.css";
import {PhotoSlider} from "./PhotoSlider/PhotoSlider";
import {Search} from "./Search/Search";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Photos} from "./Photos/Photos";
import {VideoSlider} from "./VideoSlider/VideoSlider";
import {Video} from "./Video/Video";
import {ChangePage} from "./ChangePage/ChangePage";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Time} from "../Time/Time";
import {Valute} from "../Valute/Valute";

export function Main() {

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [imgs, setImgs] = useState([]);
  const [video, setVideo] = useState([]);
  const [cover, setCover] = useState("");
  const [slide, setSlide] = useState(false);
  const timerIdRef = useRef(null);
  const [cover2, setCover2] = useState("");
  const [length, setLength] = useState(20)
  // Фильтры
  const [onlyPhoto, setOnlyPhoto] = useState(true);
  const [onlyVideo, setOnlyVideo] = useState(true);

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function nextPage() {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
    if (page < 10) {
      setPage(page + 1);
      setCover("");
      setCover2("");
      nextImage("stop");
    }
  }

  function prevPage() {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
    if (page >= 1) {

      setPage(page - 1);
      setCover("");
      setCover2("");
      nextImage("stop");
    }
  }
  const styleDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "grey",
    cursor: "pointer",
    width: "20px",
    height: "10px",
    borderRadius: "40px",
  };

  function sendValue(e) {
    setSearch(e.target.value);
  }

  // https://pixabay.com/api/videos/?key=21790151-366f24d1b8589868b2f99a89c&q=yellow+flowers
  const getBackground = async () => {
    const response = await fetch(
      `https://pixabay.com/api/?key=21790151-366f24d1b8589868b2f99a89c&q=${query}&per_page=${length}&min_width=400&min_height=400&page=${page}&image_type=photo`
    );
    const response1 = await fetch(
      `https://pixabay.com/api/videos/?key=21790151-366f24d1b8589868b2f99a89c&q=${query}&per_page=${length}&page=${page}`
    );
    const dt = await response.json();
    const dt1 = await response1.json();
    setVideo(dt1.hits);
    setImgs(dt.hits);
  };
  function submitForm(e) {
    e.preventDefault();
    setQuery(search);
    setPage(1);
    setCover("");
    setCover2("");
    nextImage("stop");
  }
  useEffect(() => {
    getBackground();
  }, [query, page,length]);
  const photoDiv = {
    height: cover ? null : '0',


  };
  const videoDiv = {
    display: cover2 ? "flex" : "none",
  };
  function getFilter(e) {
    console.log(e.target.value);
    if (e.target.value === "Videos") {
      setOnlyVideo(true);
      setOnlyPhoto(false);
    }
    if (e.target.value === "All") {
      setOnlyVideo(true);
      setOnlyPhoto(true);
    }
    if (e.target.value === "Images") {
      setOnlyVideo(false);
      setOnlyPhoto(true);
    }
  }
  function nextImage(e) {
    let test = imgs.map((e, i) => e.largeImageURL === cover);
    let index = test.indexOf(true);
    if (e === "prev") {
      if (index === 0) {
        return null;
      }
      nextImage("stop");
      setCover(imgs[index - 1].largeImageURL);
    }
    if (e === "next") {
      console.log(index)
      if (index === imgs.length - 1) {
        return
      }
      nextImage("stop");
      setCover(imgs[index + 1].largeImageURL);
    }

    if (e === "slide") {
      setSlide(true);
      timerIdRef.current = setInterval(function () {
        setCover(imgs[index + 1].largeImageURL);
        index++;
        if (index === 19) {
          index = -1;
        }
      }, 3000);
    }
    if (e === "stop") {
      setSlide(false);
      clearInterval(timerIdRef.current);
    }
  }
  function nextVideo(e) {
    let test = video.map((e, i) => e.videos.tiny.url === cover2);
    let index = test.indexOf(true);
    if (e === "prev") {
      if (index === 0) {
        index = imgs.length -1;
      }

      setCover2(video[index - 1].videos.tiny.url);
    }
    if (e === "next") {
      if (index === imgs.length -1) {
        index = -1;
      }

      setCover2(video[index + 1].videos.tiny.url);
    }
  }
  function getFilter2(e) {
    if (e.target.value === "20") {
      setLength(20)
    }
    if (e.target.value === "40") {
      setLength(40)
    }
    if (e.target.value === "60") {
      setLength(60)
    }
  }


  return (
    <div className='all-photos'>
      <Time />
      <Valute />
      <Header name='Photo & Video Search'/>
      <Search getFilter2={getFilter2} submitForm={submitForm} search={search} sendValue={sendValue} getFilter={getFilter} />

      <PhotoSlider photoDiv={photoDiv} imgs={imgs} nextImage={nextImage} setCover={setCover} cover={cover} slide={slide}/>

      <Photos imgs={imgs} onlyPhoto={onlyPhoto} setCover2={setCover2} setCover={setCover}/>

      <VideoSlider videoDiv={videoDiv} cover2={cover2} nextVideo={nextVideo} setCover2={setCover2} />
      <Video setCover2={setCover2} onlyVideo={onlyVideo} setCover={setCover} video={video} />
      <ChangePage page={page} setCover={setCover} number={number} imgs={imgs} nextPage={nextPage} prevPage={prevPage} setPage={setPage} styleDiv={styleDiv}/>
      <Footer />
    </div>
  );
}
