import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import './Video.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
export function Video({ video, onlyVideo, setCover2, setCover }) {
  return (
    <div className="content">
      <div className="container">
        {video && onlyVideo ? (
          <div className="cont">
            <h2>Videos</h2>
            <div className="line"></div>
          </div>
        ) : null}

        {video && onlyVideo
          ? video.map((e) => (
              <div className="video_block">
                  <div className='play-block' >
                      <PlayArrowIcon className='play-ico' onClick={() => {
                          setCover2(e.videos.large.url);

                          setCover("");
                          window.scrollTo({
                              top: 1335,
                              behavior: "smooth",
                          });
                      }}/>
                  </div>

                <video
                  src={e.videos.tiny.url}
                  onClick={() => {
                    setCover2(e.videos.large.url);

                    setCover("");
                    window.scrollTo({
                      top: 1335,
                      behavior: "smooth",
                    });
                  }}
                  muted
                  loop
                />
                <div className="block-author">

                    {
                        e.userImageURL ? <img className='author' src={e.userImageURL} alt=''/>
                        : <div className="no_author"><PersonIcon/></div>
                    }

                    <h3>{e.user}</h3>
                </div>

              </div>
            ))
          : null}
      </div>
    </div>
  );
}
