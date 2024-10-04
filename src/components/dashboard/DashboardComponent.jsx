import './dashboardComponent.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import SidebarComponent from '../sidebar/SidebarComponent';

const DashboardComponent = () => {
    const { userId, isLoaded } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/sign-in");
        }
    }, [isLoaded, userId, navigate]);

    if (!isLoaded) return <div className="loading">Loading . . .</div>;

    return (
        <div className="dashboard-layout">
            <SidebarComponent />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardComponent;