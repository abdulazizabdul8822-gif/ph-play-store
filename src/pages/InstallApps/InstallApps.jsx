import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContest';


const InstallApps = () => {
    const { installedApps = setInstalledApps } = useContext(InstallAppsContext);
    console.log(installedApps);
    return (
        <div className=' container mx-auto my-10'>
            {
                installedApps.map((app, index) => {
                    return <div key={index} className=' flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-4'>
                        <img src={app.image} alt={app.title}  className=' h-[120px] w-auto'/>
                        <h2 className=' font-semibold text-2xl'>{app.title}</h2>
                    </div>
                })
            }
        </div>
    );
};

export default InstallApps;