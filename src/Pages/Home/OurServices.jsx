import React from 'react';
import serviceicon from '../../assets/service.png';

const OurServices = () => {
    const services = [
        {
            title: "Express & Standard Delivery",
            description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
        },
        {
            title: "Nationwide Delivery",
            description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
        },
        {
            title: "Fulfillment Solution",
            description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        },
        {
            title: "Cash on Home Delivery",
            description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product. ",
        },
        {
            title: "Corporate Service / Contract In Logistics",
            description: "Customized corporate services which includes warehouse and inventory management support.",
        },
        {
            title: "Parcel Return",
            description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        }
    ];

    return (
        <div className="bg-secondary rounded-3xl text-center py-16 px-5">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center">Our Services</h2>
                <p className='mb-10 text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. <br /> From personal packages to business shipments — we deliver on time, every time.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl p-6 shadow-md hover:bg-[#CAEB66]  transition-shadow duration-300">
                            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                                <div>
                                   <img src={serviceicon} alt="" />
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-secondary mb-2">{service.title}</h3>
                            <p className="">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;