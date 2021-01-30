import { FunctionComponent } from 'react'
import './Card.scss'

const Card: FunctionComponent = ({children}) => {
    return(
        <div className="card">
            {children}
        </div>
    )
}

export default Card