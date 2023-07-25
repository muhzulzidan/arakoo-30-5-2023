import React, { useState } from 'react';
import YouTube from 'react-youtube';

function TabPanel({ TabpanelValue }) {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col rounded-2xl p-1 bg-[url('/svg/heroGradient.svg')]">
                <div className='bg-white rounded-2xl w-full h-full'>
                    {activeTab === 1 &&
                        <div className='py-0' >
                            <div className="py-3 text-center bg-gray-800  text-white border-0 rounded-t-2xl border-b border-solid border-bgLight"></div>
    
                            <div className='aspect-w-16 aspect-h-9'> <iframe src={`https://www.youtube.com/embed/${TabpanelValue.tab1.youtube}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                        </div>
                    }
                    {activeTab === 2 &&
                        <div className='py-0' >
                            <div className="py-3 text-center bg-gray-800  text-white border-0 rounded-t-2xl border-b border-solid border-bgLight"></div>
    
                            <div className="aspect-w-16 aspect-h-9"> <iframe src={`https://www.youtube.com/embed/${TabpanelValue.tab2.youtube}`} title="Google — Year in Search 2022" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                        </div>
                    }
                    {activeTab === 3 &&
                        <div className='py-0' >
                            <div className="py-3 text-center bg-gray-800  text-white border-0 rounded-t-2xl border-b border-solid border-bgLight"></div>
    
                            <div className="aspect-w-16 aspect-h-9"> <iframe src={`https://www.youtube.com/embed/${TabpanelValue.tab2.youtube}`} title="Google — Year in Search 2022" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                        </div>
                    }
                </div>
            </div>
            <div className="flex w-full py-12 relative">
                <div className='bg-bgLight absolute top-12 z-0  w-full h-4 rounded-md'></div>
                <div className='absolute z-10 top-12 flex w-full '>
                    <button
                        className='border-transparent bg-transparent cursor-pointer  w-full p-0'
                        onClick={() => handleTabClick(1)}
                    >
                        <div>
                            <div className={`py-2 px-4 w-full bg-bgLight  ${activeTab === 1
                                ? 'font-medium w-full  bg-gray-800 rounded   border-0 '
                                : ' outline-0   focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700  font-regular transition ease-out duration-200  dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 '
                                }`}></div>
                            <p className='m-0 py-4'>
                                {TabpanelValue.tab1.title}
                            </p>
                        </div>
                    </button>
                    <button
                        className='border-transparent bg-transparent cursor-pointer w-full p-0'
                        onClick={() => handleTabClick(2)}
                    >
                        <div>
                            <div className={`py-2 px-4 w-full bg-bgLight   ${activeTab === 2
                                ? 'font-medium w-full  bg-gray-800 rounded border-0 '
                                : ' outline-0   focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700  font-regular transition ease-out duration-200  dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 '
                                }`}></div>
                            <p className='m-0 py-4'>
                                {TabpanelValue.tab1.title}
                            </p>
                        </div>
                    </button>
                    <button
                        className='border-transparent bg-transparent cursor-pointer  w-full p-0'
                        onClick={() => handleTabClick(3)}
                    >
                        <div>
                            <div className={`py-2 px-4 w-full bg-bgLight  ${activeTab === 3
                                ? 'font-medium w-full  bg-gray-800 rounded border-0 '
                                : ' outline-0   focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700  font-regular transition ease-out duration-200  dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 '
                                }`}></div>
                            <p className='m-0 py-4'>
                                {TabpanelValue.tab1.title}
                            </p>
                        </div>
                    </button>
                </div>


            </div>
        </div>
    );
}

export default TabPanel
