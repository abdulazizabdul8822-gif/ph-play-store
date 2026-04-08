import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { InstallAppsContext } from '../../context/InstallAppsContest';
import UseAppHook from '../../Hooks/UseAppHook/UseAppHook';



const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6b6b'];

const Dashboard = () => {

     const {installedApps} = useContext(InstallAppsContext);
     const {apps} = UseAppHook();


     const uninstalledApps = apps.length - installedApps.length;


     const data = [
    { name: 'Installed', value: installedApps.length },
    { name: 'Uninstalled', value: uninstalledApps },
];
    
    return (

        <div className=' container mx-auto shadow p-10 border-slate-300 rounded-md border mt-10
        '>
            <h2 className=' font-semibold text-3xl mt-10 text-center'>Installed and uninstalled apps</h2>
            <div className="flex justify-center items-center my-10">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;