import React, {useState, useEffect} from "react";

function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timeid = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => {
            clearInterval(timeid);
        }
    }, [])

    function formattime(){
        let hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            hours = hours % 12 || 12;
            hours = hours.toString().padStart(2, '0');
            return `${hours}:${addzero(minutes)}:${addzero(seconds)} ${hours < 12 ? 'AM': 'PM'} `
    }

    function addzero(time){
       return time < 10 ? '0' + time : '' + time; 
    }
        return (
            <div className="clock-container">
                <div className="clock-display">{formattime()}</div>
            </div>
        );
}

export default Clock;