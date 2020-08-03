import { Component, OnInit, AfterViewInit } from '@angular/core';
import {LeafletMap} from './leaflet-map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  map: LeafletMap;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  this.map = new LeafletMap('map');
  }
}
