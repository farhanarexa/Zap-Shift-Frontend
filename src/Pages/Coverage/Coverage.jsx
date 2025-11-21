import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { FaSearch } from 'react-icons/fa';

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);

    const handleSearch = (event) => {
        event.preventDefault();
        const location = event.target.location.value;
        const district = serviceCenters.find(center => center.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            const coOrdinates = [district.latitude, district.longitude];
            console.log(district, coOrdinates);
            mapRef.current.flyTo(coOrdinates, 14);
        };
    };

    return (
        <div className="bg-white rounded-xl pb-10 pt-10 my-16 mx-5">
            <h2 className="text-4xl font-black mb-3 text-secondary px-10">We are available in 64 districts</h2>

            {/* search bar */}
            <div className="px-10 py-4">
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                    {/* Search Input */}
                    <div className="input input-bordered flex items-center gap-2 w-full max-w-md bg-gray-50 rounded-full px-4">
                        <FaSearch className="text-gray-500" size={16} />
                        <input
                            type="search"
                            name="location"
                            placeholder="Search here"
                            className="grow bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        type="submit"
                        className="btn bg-[#CAEB66] rounded-full px-6 font-bold text-secondary hover:bg-[#b1cd5e] transition-colors"
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* map */}
            <div className='mt-10 w-full h-[800px]'>
                <MapContainer center={position} zoom={8} scrollWheelZoom={false}
                    style={{ height: "100%" }}
                    className='mx-10 rounded-xl'
                    ref={mapRef}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenters.map((center, index) => <Marker key={index}
                            position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};


export default Coverage;