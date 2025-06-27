"use client";
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const DUMMY_DATA = {
    property: { lat: 32.7767, lng: -96.797, title: 'Subject Property' },
    comps: [
        { lat: 32.777, lng: -96.796, title: 'Comp 1' },
        { lat: 32.775, lng: -96.798, title: 'Comp 2' },
    ],
    trafficCounts: [
        { lat: 32.7768, lng: -96.7965, value: "12k", history: [11000, 11500, 12000] },
        { lat: 32.7765, lng: -96.7975, value: "8k", history: [7000, 7500, 8000] },
    ],
    permits: [
        { lat: 32.7772, lng: -96.7972, title: 'Permit 1' },
    ],
};

const containerStyle = {
    width: '100%',
    height: '400px',
};

export const PropertyDetailMap = () => {
    const [radiusCount, setRadiusCount] = useState(5);
    const [radius, setRadius] = useState(20 - radiusCount + 1);
    const [selectedTraffic, setSelectedTraffic] = useState<number | null>(null);
    const center = DUMMY_DATA.property;


    // create an object with the radius count as the key and the value as the radius minus radiusCount from 20 then start from that number for creating object like this {15: 0, 16: 1, 17: 2, 18: 3}
    // the first key should be 20 - radiusCount + 1 and value should be index of the array it should be dynamic
    const radiusOptions = Array.from({ length: radiusCount }, (_, i) => i).reduce((acc, curr, index) => {
        acc[20 - radiusCount + index + 1] = index + 1;
        return acc;
    }, {} as Record<number, number>);

    // Custom marker icons (use string for icon, omit scaledSize for now for compatibility)
    const icons = {
        property: `data:image/svg+xml;utf-8,<svg width='32' height='40' viewBox='0 0 32 40' xmlns='http://www.w3.org/2000/svg'><circle cx='16' cy='20' r='12' fill='blue' stroke='white' stroke-width='2'/></svg>`,
        comp: `data:image/svg+xml;utf-8,<svg width='32' height='40' viewBox='0 0 32 40' xmlns='http://www.w3.org/2000/svg'><circle cx='16' cy='20' r='12' fill='red' stroke='white' stroke-width='2'/></svg>`,
        permit: `data:image/svg+xml;utf-8,<svg width='32' height='40' viewBox='0 0 32 40' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='12' width='16' height='16' fill='orange' stroke='white' stroke-width='2'/></svg>`,
        traffic: `data:image/svg+xml;utf-8,<svg width='40' height='40' xmlns='http://www.w3.org/2000/svg'><circle cx='20' cy='20' r='16' fill='green' stroke='white' stroke-width='3'/></svg>`
    };

    return (
        <div className="relative w-full h-full">
            <LoadScript googleMapsApiKey="AIzaSyBE8Ll3UulgRBHWCGyyTLghsROB3-ZZNPc">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={radius}
                    options={{
                        disableDefaultUI: true,
                        minZoom: 1,
                        maxZoom: 20,
                        draggableCursor: 'default',
                    }}
                >
                    {/* Property Pin */}
                    <Marker position={DUMMY_DATA.property} icon={icons.property} title="Property" onClick={() => alert("Property")} />
                    {/* Comps Pins */}
                    {DUMMY_DATA.comps.map((comp, idx) => (
                        <Marker key={idx} position={comp} icon={icons.comp} title={comp.title} onClick={() => setSelectedTraffic(idx)} />
                    ))}
                    {/* Permits Pins */}
                    {DUMMY_DATA.permits.map((permit, idx) => (
                        <Marker key={idx} position={permit} icon={icons.permit} title={permit.title} onClick={() => setSelectedTraffic(idx)} />
                    ))}
                    {/* Traffic Counts Pins (show value) */}
                    {DUMMY_DATA.trafficCounts.map((tc, idx) => (
                        <Marker
                            key={idx}
                            position={tc}
                            label={{ text: tc.value.toString(), color: 'white', fontWeight: 'bold', fontSize: '14px' }}
                            icon={icons.traffic}
                            onClick={() => setSelectedTraffic(idx)}
                        />
                    ))}
                    {/* InfoWindow for traffic count history */}
                    {selectedTraffic !== null && (
                        <InfoWindow
                            position={DUMMY_DATA.trafficCounts[selectedTraffic]}
                            onCloseClick={() => setSelectedTraffic(null)}
                        >
                            <div>
                                <div className="font-bold mb-1">Traffic Count History</div>
                                <ul className="list-disc ml-4">
                                    {DUMMY_DATA.trafficCounts[selectedTraffic].history.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
            {/* Controls */}
            <div className="bg-white p-2 rounded shadow flex flex-col gap-1">

                <div className="flex gap-4">
                    <div className="flex-1 flex flex-col gap-1">
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-sm">Radius Distance (miles)</p>
                            <span className="ml-2">{radiusOptions[radius as keyof typeof radiusOptions] || 0}/{radiusCount}</span>
                        </div>
                        <input
                            type="range"
                            min={20 - radiusCount}
                            max={20}
                            step={1}
                            value={radius}
                            onChange={e => setRadius(Number(e.target.value))}
                            className="flex-1"
                        />
                    </div>
                    <input
                        type="number"
                        min={1}
                        max={20}
                        step={1}
                        value={radiusCount}
                        onChange={e => setRadiusCount(Number(e.target.value))}
                        className="border-2 border-gray-300 rounded-md px-2 min-w-20"
                    />
                </div>
            </div>
        </div>
    );
};