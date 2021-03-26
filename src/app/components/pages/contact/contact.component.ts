import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor() { }

  map: Mapboxgl.Map;

  ngOnInit(): void {

    Mapboxgl.accessToken = 'pk.eyJ1IjoiamQxMjEzMTQiLCJhIjoiY2ttZ3MyMDk3MDBkazJ5cXV5a3pnaGw5ZSJ9.6yzh6UvZt7vYwf2W1eDW4g';
    this.map = new Mapboxgl.Map({
      container: 'map-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.962014, 40.767812], // starting position [lng, lat]
      zoom: 12
    });
    this.map.addControl(new Mapboxgl.NavigationControl());
    this.map.addControl(new Mapboxgl.FullscreenControl());

    const marker = new Mapboxgl.Marker().setLngLat([-73.96191211948542, 40.76770402744008]).addTo(this.map);
  }

}
