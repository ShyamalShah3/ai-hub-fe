import './dashboardComponent.css';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';

const DashboardComponent = () => {
    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/sign-in");
        }
    })

    if (!isLoaded) return <div className="loading">Loading . . .</div>;

    return (
        <div className="dashboardLayout">
            <div className="menu">MENU</div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardComponent;