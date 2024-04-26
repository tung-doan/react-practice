import react, {useState, useEffect, useRef} from 'react'


function Stopwatch() {
    const  [isrunning, setisrunning] = useState(false);
    const [elapsedtime, setelapsedtime] = useState(0);
    const starttimeref = useRef(0);
    const intervalid = useRef(null);

    useEffect(() => {
        if(isrunning){
            intervalid.current = setInterval(() => {
                setelapsedtime(Date.now()- starttimeref.current)
            }, 10)
        }

        return ()=> {
            clearInterval(intervalid.current);
        }
    }, [isrunning])

    const starttime = () => {
        setisrunning(true);
        const time = Date.now() - elapsedtime;
        starttimeref.current = time;
    }

    const stoptime = () => {
        setisrunning(false);
    }

    const resettime = () => {
        setisrunning(false);
        setelapsedtime(0);
    }

    const formattime = () => {
    
        let hours = Math.floor(elapsedtime/(1000*60*60));
        let minutes = Math.floor(elapsedtime/(1000*60)) % 60;
        let second = Math.floor(elapsedtime/1000) % 60;
        let miliseconds = Math.floor(elapsedtime) % 100;
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        second = second.toString().padStart(2, '0');
        miliseconds = miliseconds.toString().padStart(2, '0');

        return `${hours}:${minutes}:${second}:${miliseconds}`
    }

    return(
        <div className='clock-container'>
            <div className='clock-display'>{formattime()}</div>
            <button className='start' onClick={starttime}>Start</button>
            <button className='stop' onClick={stoptime}>Stop</button>
            <button className='reset' onClick={resettime}>Reset</button>
        </div>
    );
}

export default Stopwatch