import { Link } from 'react-router-dom'
import './homePage.css'
import { IconButton } from '@mui/material'
import Fingerprint from '@mui/icons-material/Fingerprint'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="left">
                <h1>AI Hub</h1>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <IconButton aria-label='fingerprint' color='secondary' size='large' className='fingerprint-button'>
                        <Fingerprint />
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default HomePage