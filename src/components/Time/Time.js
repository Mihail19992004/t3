import React, {useEffect, useState} from 'react'
import './time.css'
export function Time() {
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState('')
    const [hour, setHour] = useState()
    const date = new Date()
    function getTime () {
        setTimeout(()=> {
            setSecond(date.getSeconds()+'')
            setMinute(date.getMinutes() +'')
            setHour(date.getHours()+'')
        }, 1000)
    }
    useEffect(()=> {
        getTime()
    }, [second, minute, hour])





 return (
     <div className='date'>
         <h1>{new Date().toDateString()}</h1>
         <h2>{hour}:{minute}:{(second.length===1)? '0'+second : second }</h2>
     </div>
 )
}