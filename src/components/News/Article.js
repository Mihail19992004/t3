import React from 'react'
import Img from '../../icon/background.jpg'
export function Article({news, setActiveNews, index}) {
    function getDate(e) {
        let a = e.split('T')
        a[1]=a[1].slice(0,-1);
        return a
    }
    return(
        <div className='main' onClick={()=> setActiveNews(index)}>
            <div className="description">
                <h2>{news.title}</h2>
                <div className="source">
                    <p>{news.source.name}</p>
                </div>

                <p className='news-p'>{news.description}</p>
                <a target='_blank' className='url-news' href={news.url}>См. источник</a>
            </div>
            <div className="left-block">
                {
                    news.urlToImage ? <img src={news.urlToImage} alt="No Image"/> : <img src={Img} alt=""/>
                }

                <div className="date">
                    <p>{getDate(news.publishedAt)[0]}</p>
                    <p>{getDate(news.publishedAt)[1]}</p>
                </div>

            </div>

        </div>
    )
}