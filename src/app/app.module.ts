import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import 'leaflet/dist/images/marker-shadow.png';
import {icon, Marker} from 'leaflet';

const iconRetinaUrl = 'marker-icon-2x.png';
const iconUrl = 'marker-icon.png';
const shadowUrl = 'marker-shadow.png';

const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [0, 0],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [0, 0],
});
Marker.prototype.options.icon = iconDefault;

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
