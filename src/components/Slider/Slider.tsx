import './Slider.scss'
import { useState } from 'react';

//TODO: Opacity doesn't change until I move mouse 

type SliderProps = {
    initialValue?: number,
    step?: number,
    min?: number,
    max?: number,
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const Slider = (props : SliderProps) => {
    const [value, setValue] = useState(props.initialValue);

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        setValue(value);
        props.onChange?.(e);
    }
    
    const {step, min, max} = props;

    return(
        <div className="rangeSlider">
            <input type="range" min={min} max={max} step={step} value={value} className="slider" onChange={handleOnChange}/>
        </div>
    )
}

export default Slider