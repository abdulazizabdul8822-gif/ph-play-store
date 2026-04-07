import React, { useEffect, useState } from 'react';

import AppCart from '../Ui/AppCart/AppCart';



// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {

    // const apps = use(appsPromise);
    // console.log(apps);

    // const data = useLoaderData()
    // console.log(data, "data from homepage")


    const [apps, setApps] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            console.log(data);
            setApps(data);
        };
        fetchData();
    }, []);

    return (
        <div className=' container mx-auto my-[60px]'>
            <div className=' mb-8 text-center space-y-6 container mx-auto'>
                <h2 className=' font-bold text-4xl'> Trending Apps</h2>
                <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Maxime, quo eum. Esse modi similique corrupti corporis molestias magnam autem. Nobis deleniti eveniet hic! <br /> Dolores culpa fugiat ipsam aliquam enim quisquam.</p>
            </div>

            <div className=' grid grid-cols-3 gap-5'>
                {apps.map((app, index) => {
                    return <AppCart app={app} key={index}/>
                })}
            </div>

        </div>
    );
};

export default TrendingApps;