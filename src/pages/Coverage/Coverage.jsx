import React, { useRef } from "react";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
    const position = [23.6850, 90.3563];

    const serviceCenters = useLoaderData();

    const mapRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();

        const location = e.target.location.value.trim();

        if (!location) return;

        const district = serviceCenters.find((center) =>
            center.district
                ?.toLowerCase()
                .includes(location.toLowerCase())
        );

        if (district) {
            const coord = [
                Number(district.latitude),
                Number(district.longitude),
            ];

            mapRef.current?.flyTo(coord, 14);
        } else {
            alert("District not found!");
        }
    };

    return (
        <div className="p-8">

            {/* Heading */}
            <h2 className="text-5xl font-bold mb-8">
                We are available in 64 districts
            </h2>

            {/* Search */}
            <div className="mb-6">
                <form onSubmit={handleSearch}>
                    <label className="input input-bordered flex items-center gap-2 w-full max-w-md">

                        {/* Search Icon */}
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="8"
                                />
                                <path d="m21 21-4.3-4.3" />
                            </g>
                        </svg>

                        <input
                            type="search"
                            className="grow"
                            name="location"
                            placeholder="Search district..."
                        />

                        <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                        >
                            Search
                        </button>

                    </label>
                </form>
            </div>

            {/* Map */}
            <div className="border w-full h-[800px] rounded-lg overflow-hidden">

                <MapContainer
                    center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    className="h-full w-full"
                    ref={mapRef}
                >

                    {/* OpenStreetMap */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Markers */}
                    {Array.isArray(serviceCenters) &&
                        serviceCenters.map((center, index) => {

                            const latitude = Number(center.latitude);
                            const longitude = Number(center.longitude);

                            return (
                                <Marker
                                    key={center._id || index}
                                    position={[
                                        latitude,
                                        longitude,
                                    ]}
                                >
                                    <Popup>

                                        <strong className="text-lg">
                                            {center.district}
                                        </strong>

                                        <br />

                                        <span>
                                            Service Area:{" "}
                                            {Array.isArray(
                                                center.covered_area
                                            )
                                                ? center.covered_area.join(
                                                      ", "
                                                  )
                                                : "Not available"}
                                        </span>

                                    </Popup>
                                </Marker>
                            );
                        })}

                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;


// import React, { useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import { useLoaderData } from "react-router";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl,
//   iconUrl,
//   shadowUrl: iconShadow,
// });

// const FlyToLocation = ({ position }) => {
//   const map = useMap();

//   React.useEffect(() => {
//     map.flyTo(position, 10, {
//       duration: 2,
//     });
//   }, [position, map]);

//   return null;
// };

// const Coverage = () => {
//   const serviceCenters = useLoaderData();

//   const [position, setPosition] = useState([23.685, 90.3563]);

//   const handleSearch = (e) => {
//     e.preventDefault();

//     const value = e.target.location.value.trim().toLowerCase();

//     const district = serviceCenters.find((item) =>
//       item.district.toLowerCase().includes(value)
//     );

//     if (district) {
//       setPosition([district.latitude, district.longitude]);
//     } else {
//       alert("District not found!");
//     }
//   };

//   return (
//     <div className="p-6">

//       <h2 className="text-3xl font-bold mb-5">
//         We are available in 64 Districts
//       </h2>

//       <form onSubmit={handleSearch} className="mb-5">
//         <input
//           name="location"
//           type="text"
//           placeholder="Search District..."
//           className="input input-bordered w-full"
//         />
//       </form>

//       <div className="h-[700px] rounded-xl overflow-hidden">

//         <MapContainer
//           center={[23.685, 90.3563]}
//           zoom={7}
//           scrollWheelZoom={true}
//           className="h-full w-full"
//         >

//           <FlyToLocation position={position} />

//           <TileLayer
//             attribution="&copy; OpenStreetMap contributors"
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {serviceCenters.map((center) => (
//             <Marker
//               key={center.id}
//               position={[center.latitude, center.longitude]}
//             >
//               <Popup>
//                 <div className="space-y-1">

//                   <h2 className="font-bold text-lg">
//                     {center.district}
//                   </h2>

//                   <p>
//                     <strong>Region:</strong> {center.region}
//                   </p>

//                   <p>
//                     <strong>City:</strong> {center.city}
//                   </p>

//                   <p>
//                     <strong>Coverage:</strong> {center.coverer_area}
//                   </p>

//                   <p>
//                     <strong>Status:</strong> {center.status}
//                   </p>

//                   <a
//                     href={center.flowchart}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-blue-600 underline"
//                   >
//                     View Flowchart
//                   </a>

//                 </div>
//               </Popup>
//             </Marker>
//           ))}

//         </MapContainer>

//       </div>
//     </div>
//   );
// };

// export default Coverage;