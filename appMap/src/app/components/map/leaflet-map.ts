import * as Leaflet from 'leaflet';
const medellin = {
    coords: new Leaflet.LatLng(6.230833, -75.590553),
    zoom: 15
};
const icon = new Leaflet.Icon({
    iconUrl: 'https://image.flaticon.com/icons/svg/3198/3198585.svg',
    iconSize:     [38, 95], 
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76] 
});
export class LeafletMap {
    map: Leaflet.Map;
    constructor(id: string){
        this.map = Leaflet.map(id);
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(this.map);
        this.addMarker();
        
        this.map.setView(medellin.coords, medellin.zoom);
    }
    addMarker() {
        const marker = Leaflet.marker([medellin.coords.lat,medellin.coords.lng],{icon: icon});
        marker.addTo(this.map);
    }
}

