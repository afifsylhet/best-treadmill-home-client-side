

import React from 'react';
import OffCanvas from '../OffCanvas/OffCanvas';

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-center my-2 text-success">Welcome to Best Treadmill Dashboard</h2>
            <div className="text-center m-3">
                <OffCanvas></OffCanvas>
            </div>

        </div >
    );
};

export default Dashboard;