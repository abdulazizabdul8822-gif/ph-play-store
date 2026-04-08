import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContest';
import { toast } from 'react-toastify';


const InstallApps = () => {
    const { installedApps, setInstalledApps } = useContext(InstallAppsContext);
    console.log(installedApps);

    const handleUninstall = (app) =>{
        console.log(app)
        
        const restApps = installedApps.filter((iApp) => iApp.id != app.id);
        console.log(restApps, "restApps")
        setInstalledApps(restApps);
        toast.warning(`${app.title} is uninstalled!`)
    };
    return (
        <div className=' container mx-auto my-10'>
            {
              installedApps.length === 0 ? (
                <h2 className=' font-bold text-3xl  text-center my-5'>No installed apps found</h2>
              ) :  installedApps.map((app, index) => {
                    return <div key={index} className=' flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4'>
                        <img src={app.image} alt={app.title}  className=' h-[120px] w-auto'/>
                        <h2 className=' font-semibold text-2xl'>{app.title}</h2>
                        <button onClick={()=> handleUninstall(app)} className=' btn btn-secondary'>Uninstall</button>
                    </div>
                })
            }
        </div>
    );
};

export default InstallApps;