import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContest';


const InstallApps = () => {
    const contextData = useContext(InstallAppsContext);
    console.log(contextData);
    return (
        <div>
            Install Apps
        </div>
    );
};

export default InstallApps;