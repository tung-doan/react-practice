import React, {useState} from 'react';


const colorPicker = () => {
    const [color, setcolor] = useState('#000000');

    const colorhandler = (event) => {
        setcolor(event.target.value)
    }
    return (
        <div className='colorpicker-container'>
            <h2>Color Picker</h2>
            <label className='color-display' style={{ backgroundColor: color }}>Selected color: {color}</label>
            <p>select a color</p>
            <input type='color' onChange={colorhandler}/>
        </div>
    );
}

export default colorPicker;
