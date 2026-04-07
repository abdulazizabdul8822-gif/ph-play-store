

import AppCart from '../Ui/AppCart/AppCart';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router';
import UseAppHook from '../../Hooks/UseAppHook/UseAppHook';



// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {

    // const apps = use(appsPromise);
    // console.log(apps);

    // const data = useLoaderData()
    // console.log(data, "data from homepage")


   const {apps,loading} = UseAppHook();

    return (
        <div className=' container mx-auto my-[60px]'>
            <div className=' mb-8 text-center space-y-6 container mx-auto'>
                <h2 className=' font-bold text-4xl'> Trending Apps</h2>
                <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Maxime, quo eum. Esse modi similique corrupti corporis molestias magnam autem. Nobis deleniti eveniet hic! <br /> Dolores culpa fugiat ipsam aliquam enim quisquam.</p>
            </div>

            {loading ? ( 
                <div className=' flex justify-center items-center '>
                    <RingLoader color='#ad46ff' />
                    </div>  
            ) : <div className=' grid grid-cols-3 gap-5'>
                {apps.slice(0,9).map((app, index) => {
                    return <AppCart app={app} key={index} />
                })}
            </div>}

              <div className=' text-center mt-4'>
                 <Link to={"/apps"}>
                     <button className=' btn bg-purple-500 text-white'>View All</button>
               </Link>
              </div>
        </div>
    );
};

export default TrendingApps;