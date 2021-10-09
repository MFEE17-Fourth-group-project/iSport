import React, { Component, useState, useEffect } from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import L from '../../../node_modules/leaflet';
import { WrldMap } from 'wrld-react';

class GymMap extends Component {
    //地圖
    constructor(props) {
        super(props);
    }

    //重新渲染比較前後的值是否有差異，如果有差異的話才做新的一次網路請求
    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.lat !== this.props.lat ||
            prevProps.lng !== this.props.lng
        ) {
            this.mymap.setView([this.props.lat, this.props.lng], 18);
            L.popup()
                .setLatLng([this.props.lat, this.props.lng]) //設置彈出窗口將打開的地理點。
                .addTo(this.mymap) //將彈出窗口添加到地圖。
                .setContent(
                    `<h1>${this.props.name}</h1>
                      <p>${this.props.address}</p>
                      <img class="img-fluid" src="${this.props.image}">`
                ) //設置彈出窗口的 HTML 內容。
                .openOn(this.mymap); //將彈出窗口添加到地圖並關閉前一個。
        }
    }

    render() {
        return (
            <>
                <WrldMap
                    apiKey={'1a8fa4272abbebc6f73c74d65e8ecf63'}
                    containerStyle={{
                        width: '600px',
                        height: '400px',
                    }}
                    mapOptions={{
                        center: [this.props.lat, this.props.lng],
                        indoorsEnabled: true,
                    }}
                    onInitialStreamingComplete={(map) => {
                        map.openPopup(
                            `<h1>${this.props.name}</h1>
                      <p>${this.props.address}</p>
                      <img class="img-fluid" src="${this.props.image}">`,
                            [this.props.lat, this.props.lng]
                        );
                    }}
                >
                    <div />
                </WrldMap>
            </>
        );
    }
}

export default GymMap;
