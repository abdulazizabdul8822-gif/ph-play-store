
import { RingLoader } from 'react-spinners';
import AppCart from '../../components/Ui/AppCart/AppCart';
import UseAppHook from '../../Hooks/UseAppHook/UseAppHook';

const Apps = () => {

    const {apps,loading} = UseAppHook();
    
    console.log(apps, loading)

    return (

        <div className=' container mx-auto my-10'>
            <div className=' mb-12 text-center max-w-[50%] mx-auto '>
                <h2 className=' font-bold text-4xl'>All Apps</h2>
                <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Maxime, quo eum. Esse modi similique corrupti corporis molestias magnam autem.</p>
            </div>
            {loading ? (
                <div className=' flex justify-center items-center '>
                    <RingLoader color='#ad46ff' />
                </div>
            ) : <div className=' grid grid-cols-3 gap-5'>
                {apps.map((app, index) => {
                    return <AppCart app={app} key={index} />
                })}
            </div>}
        </div>
    );
};

export default Apps;