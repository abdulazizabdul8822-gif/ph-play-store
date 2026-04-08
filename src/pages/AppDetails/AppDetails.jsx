import React, { useState } from 'react';
import { useParams } from 'react-router';
import UseAppHook from '../../Hooks/UseAppHook/UseAppHook';
import { RingLoader } from 'react-spinners';

const AppDetails = () => {
    const { id } = useParams();

    const { apps, loading } = UseAppHook();

    const [installedApps, setInstalledApps] = useState([]);

    
    if (loading) {
        return <div className=' flex justify-center items-center '>
            <RingLoader color='#ad46ff' />
        </div>
    }

    
    const expectedApp = apps.find(
        (app) => String(app.id) === id
    );

    
    if (!expectedApp) {
        return <p className='text-center mt-10'>App not found</p>;
    }

    const handleInstallApp = () => {
        setInstalledApps([...installedApps, expectedApp]);
    }
    console.log(installedApps)
    
    return (
        <div className='container mx-auto'>
            <div className='shadow p-6 space-y-2 text-center'>
                <img className=' h-[300px] w-auto mx-auto'
                    src={expectedApp.image}
                    alt={expectedApp.title}
                />

                <h2 className='font-semibold text-3xl'>
                    {expectedApp.title}
                </h2>

                <p>
                    Developed by:
                    <span className='font-semibold text-3xl text-purple-500'>
                        {expectedApp.companyName}
                    </span>
                </p>
                <button onClick={handleInstallApp} className=' btn bg-purple-600 text-white font-semibold'>Install now</button>
            </div>
        </div>
    );
};

export default AppDetails;