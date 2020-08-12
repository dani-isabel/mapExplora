import * as Leaflet from 'leaflet';
const medellin = {
    coords: new Leaflet.LatLng(6.270556, -75.565556),
    zoom: 16
};
const keyPoints = {
    coords2: new Leaflet.LatLng(6.270833, -75.564167),
    coords3: new Leaflet.LatLng(6.26706, -75.56941),
    coords4: new Leaflet.LatLng(6.26219, -75.576968),
    coords5: new Leaflet.LatLng(6.236667, -75.580278),
}
const icon = new Leaflet.Icon({
    iconUrl: 'https://image.flaticon.com/icons/svg/1397/1397891.svg',
    iconSize:     [38, 95], 
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76] 
});

export class LeafletMap {
    map: Leaflet.Map;
    constructor(id: string){
        this.map = Leaflet.map(id);
        Leaflet.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png')
        .addTo(this.map);
        this.addMarker();
        
        this.map.setView(medellin.coords, medellin.zoom);
    }
    addMarker() {
        const explora = Leaflet.marker([medellin.coords.lat,medellin.coords.lng],{icon: icon});
        const jardin = Leaflet.marker([keyPoints.coords2.lat,keyPoints.coords2.lng],{icon: icon});
        const udea = Leaflet.marker([keyPoints.coords3.lat,keyPoints.coords3.lng],{icon: icon});
        const unal = Leaflet.marker([keyPoints.coords4.lat,keyPoints.coords4.lng],{icon: icon});
        const pueblito = Leaflet.marker([keyPoints.coords5.lat,keyPoints.coords5.lng],{icon: icon});
            explora.addTo(this.map).bindPopup("Parque Explora").openPopup();
            jardin.addTo(this.map).bindPopup("Jardín Botánico").openPopup();
            udea.addTo(this.map).bindPopup("Universidad de Antioquia").openPopup();
            unal.addTo(this.map).bindPopup("Universidad Nacional").openPopup();
            pueblito.addTo(this.map).bindPopup("Universidad Nacional").openPopup();
        }
    }


