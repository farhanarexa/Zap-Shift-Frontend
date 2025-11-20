import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

const StaticSection = () => {
    // SVG icon for logistics (truck with location marker)
    

    const services = [
        {
            title: "Booking Pick & Drop",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            title: "Cash On Delivery",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            title: "Delivery Hub",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            title: "Booking SME & Corporate",
            description: "From personal packages to business shipments — we deliver on time, every time."
        }
    ];

    return (
        <div className=" py-16 px-5 text-center">
            <h2 className="text-3xl font-black mb-7 text-secondary">How it Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div 
                        className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center h-full" 
                        key={index}
                    >
                        <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-blue-50">
                            <TbTruckDelivery size={50} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaticSection;