import React from 'react';
import { FaDownload, FaRegStar } from 'react-icons/fa6';

const AppCart = ({app}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={app.image}
                                alt={app.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{app.title}</h2>
                            <div className=' flex justify-between items-center gap-4'>
                                <span className=' bg-green-100 text-green-500 flex items-center py-1 px-2 gap-1 font-semibold rounded-md'><FaDownload />{app.downloads}</span>
                                <span className=' bg-amber-100 text-amber-500 flex items-center py-1 px-2 gap-1 font-semibold rounded-md'><FaRegStar />{app.ratingAvg}</span>
                            </div>
                        </div>
                    </div>
    );
};

export default AppCart;