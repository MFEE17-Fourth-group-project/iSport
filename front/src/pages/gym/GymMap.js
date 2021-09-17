import React, { Component, useState, useEffect } from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import L from '../../../node_modules/leaflet';

class GymMap extends Component {
    //static指的是這函式不屬於以這個class被宣告出來的單一物件
    //地圖
    constructor(props) {
        super(props);
        this.mapid = null;
    }
    //建立組件
    componentDidMount() {
        // 引入地圖
        const mymap = L.map('mapid').setView(
            [this.props.lat, this.props.lng],
            13
        );
        // 引入圖資
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mymap);
        //建立座標
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
        //定位座標
        const marker = L.marker([this.props.lat, this.props.lng], {
            icon: greenIcon,
        }).addTo(mymap);
        marker.bindPopup('<b>健身房在這!</b>').openPopup();
    }
    //重新渲染比較前後的值是否有差異，如果有差異的話才做新的一次網路請求
    componentDidUpdate(prevProps, prevState) {
        console.log(
            'componentDidUpdate',
            prevProps.lat,
            this.props.lat,
            prevProps.lng,
            this.props.lng
        );
        if (
            prevProps.latitude !== this.props.latitude ||
            prevProps.longitude !== this.props.longitude
        ) {
            this.mapid();
        }
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
