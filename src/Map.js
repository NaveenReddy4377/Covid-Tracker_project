import React from 'react';
import {  Map as LeafLet , TileLayer } from "react-leaflet";
import './Map.css'
import { showDataOnMap } from './utils';

function map({countries , casesType, center,zoom}) {
  return (
    <div className="map">
    <LeafLet center={center} zoom={zoom}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries,casesType)}
    </LeafLet>
</div>
  )
}

export default map
