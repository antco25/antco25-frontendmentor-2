import './Toggle.scss'
import { useState } from 'react';

type ToggleProps = {
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const Toggle = ( {onChange} : ToggleProps) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked);
        onChange?.(e);
    }

    return(
        <div className="toggle">
            <label className="switch">
             <input type="checkbox" role="switch" aria-checked={isChecked} onChange={handleOnChange}/>
             <span className="slider round"></span>
            </label>
        </div>
    )

}

export default Toggle