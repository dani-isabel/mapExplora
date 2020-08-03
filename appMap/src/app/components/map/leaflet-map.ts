import * as Leaflet from 'leaflet';
const medellin = {
    coords: new Leaflet.LatLng(6.230833, -75.590553),
    zoom: 15
};
export class LeafletMap {
    map: Leaflet.Map;
    constructor(id: string){
        this.map = Leaflet.map(id);
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(this.map);
        
        this.map.setView(medellin.coords, medellin.zoom);
    }
}
