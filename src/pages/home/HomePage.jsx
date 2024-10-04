import { Link } from 'react-router-dom'
import './homePage.css'
import { IconButton } from '@mui/material'
import Fingerprint from '@mui/icons-material/Fingerprint'
import { TypeAnimation } from 'react-type-animation'

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'AI Hub',
                        1000,
                        'AI Agents',
                        1000,
                        'AI Tools',
                        1000,
                        'AI Services',
                        1000,
                        'AI Workflows',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </h1>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <IconButton aria-label='fingerprint' color='secondary' size='large' className='fingerprint-button'>
                    <Fingerprint />
                </IconButton>
            </Link>
        </div>
    )
}

export default HomePage