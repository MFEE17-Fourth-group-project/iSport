import React, { Component } from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import L from '../../../node_modules/leaflet';

class GymMap extends Component {
    //地圖
    constructor() {
        //初始化
        super();
        this.mapid = null;
    }
    //建立組件
    componentDidMount() {
        const mymap = L.map('mapid').setView([24.9970214, 121.5574843], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mymap); //建立地圖
        const greenIcon = new L.Icon({
            iconUrl:
                'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl:
                'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });

        const marker = L.marker([24.9970214, 121.5574843], {
            icon: greenIcon,
        }).addTo(mymap);
        marker.bindPopup('<b>健身房在這!</b>').openPopup();
    }

    render() {
        return (
            <>
                <div id="mapid" style={{ height: '100%', width: '100%' }} />
            </>
        );
    }
}

export default GymMap;
