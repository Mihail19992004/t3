import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "./valute.css";

export function Valute() {
  const [valute, setValute] = useState([]);
  const [count, setCount] = useState(0);
  const getValue = async () => {
    const response = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`);
    const data = await response.json();
    await setValute(Object.entries(data.Valute));
  };
  useEffect(() => {
    getValue();
  }, []);
  console.log(count);
  return (
    <div >

        {valute[0] ?
            <div className="valute-block">


            <ArrowBackIosIcon className='arr-ico' onClick={() => setCount(count === 0 ? valute.length-1 : count -1)}/>
            <div style={{display : 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}} >
            <p>{valute[count][0]}</p>
                <p>{valute[count][1].Value.toFixed(2)} RUB</p>
            </div>
            <ArrowForwardIosIcon className='arr-ico'  onClick={() => setCount( count === valute.length -1 ? 0 : count + 1)} />
            </div>: null
        }

    </div>
  );
}
