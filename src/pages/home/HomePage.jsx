import { Link } from 'react-router-dom'
import './homePage.css'

const HomePage = () => {
    return (
        <div className='homepage'>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}

export default HomePage