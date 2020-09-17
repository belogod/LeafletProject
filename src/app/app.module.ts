import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {icon, Marker} from 'leaflet';
const iconUrl = 'assets/leaflet/marker-icon-2x.png';

const iconDefault = icon({
  iconUrl,
  iconSize: [25, 25],
  iconAnchor: [13, 24],
  popupAnchor: [0, -15],
  tooltipAnchor: [0, 0],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
