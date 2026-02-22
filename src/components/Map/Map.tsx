"use client";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Plus, Minus, Maximize, X } from "lucide-react";

export const MapSection = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Coordinates for Al-Satwa, Dubai (near New Big Mosque)
        const coordinates: [number, number] = [25.2318, 55.2707];

        // Initialize map
        const map = L.map(mapRef.current, {
            zoomControl: false, // Disable default zoom control
            scrollWheelZoom: false, // Disable scroll zoom for better page scrolling
        }).setView(coordinates, 15);
        mapInstanceRef.current = map;

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add marker
        L.marker(coordinates)
            .addTo(map)
            .bindPopup("<b>Mobile Car Repair Service</b><br>Near New Big Mosque, Al-Satwa, Dubai")
            .openPopup();

        // Cleanup
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
    const handleZoomOut = () => mapInstanceRef.current?.zoomOut();
    const handlePan = (dx: number, dy: number) => {
        mapInstanceRef.current?.panBy([dx, dy]);
    };

    const toggleControls = () => {
        setShowControls(!showControls);
    };

    return (
        <section className="w-full relative group h-[200px] md:h-[300px]">
            <div ref={mapRef} className="w-full h-full" />

            {/* Info Box - Top Left */}
            <div className="absolute top-4 left-4 z-[999] bg-white p-2 shadow-lg border border-gray-200 rounded-sm w-[150px] lg:w-[300px] md:w-[300px] pointer-events-auto">
                <h4 className="font-bold text-[13px] leading-tight mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    Mobile Car Repairs Service in Dubai
                </h4>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=25.2318,55.2707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-[12px] hover:underline"
                >
                    View larger map
                </a>
            </div>

            {/* Controls Section - Bottom Right */}
            <div className="absolute bottom-8 right-8 z-[1000] flex flex-col md:flex-col items-end gap-3 pointer-events-auto">
                {/* Main Row: Toggle Button and Horizontal Controls on Mobile */}
                <div className="flex flex-row-reverse items-center gap-3 md:flex-col-reverse md:items-center">
                    {/* Main Toggle Button */}
                    <button
                        onClick={toggleControls}
                        className="bg-white shadow-xl border border-gray-400 rounded-lg w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-gray-100 transition-all duration-200"
                        aria-label="Toggle map controls"
                    >
                        {showControls ? <X size={16} className="text-gray-600 md:size-[18px]" /> : <Maximize size={16} className="text-gray-600 md:size-[18px]" />}
                    </button>

                    {/* Controls Container - Visible when showControls is true */}
                    {showControls && (
                        <div className="flex flex-row md:flex-col items-center gap-3 animate-in fade-in slide-in-from-right-4 md:slide-in-from-bottom-4 duration-200">
                            {/* Panning Controls - Scaled down on mobile */}
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white shadow-xl border border-gray-400 rounded-full flex items-center justify-center overflow-hidden scale-90 md:scale-110">
                                <button onClick={() => handlePan(0, -50)} className="absolute top-0.5 hover:bg-gray-100 p-0.5 md:p-1 rounded-full">
                                    <ChevronUp size={14} className="md:size-4" />
                                </button>
                                <button onClick={() => handlePan(0, 50)} className="absolute bottom-0.5 hover:bg-gray-100 p-0.5 md:p-1 rounded-full">
                                    <ChevronDown size={14} className="md:size-4" />
                                </button>
                                <button onClick={() => handlePan(-50, 0)} className="absolute left-0.5 hover:bg-gray-100 p-0.5 md:p-1 rounded-full">
                                    <ChevronLeft size={14} className="md:size-4" />
                                </button>
                                <button onClick={() => handlePan(50, 0)} className="absolute right-0.5 hover:bg-gray-100 p-0.5 md:p-1 rounded-full">
                                    <ChevronRight size={14} className="md:size-4" />
                                </button>
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full" />
                            </div>

                            {/* Zoom Controls - Scaled down on mobile */}
                            <div className="flex flex-row md:flex-col bg-white shadow-xl border border-gray-400 rounded-lg overflow-hidden shrink-0">
                                <button onClick={handleZoomIn} className="p-2 md:p-2.5 hover:bg-gray-100 border-r md:border-r-0 md:border-b border-gray-200 flex items-center justify-center">
                                    <Plus size={16} className="md:size-[18px]" />
                                </button>
                                <button onClick={handleZoomOut} className="p-2 md:p-2.5 hover:bg-gray-100 flex items-center justify-center">
                                    <Minus size={16} className="md:size-[18px]" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};