import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {antPath} from 'leaflet-ant-path';
import 'leaflet-ellipse';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    public map: any;

    public findMap = false;
    public findMap2 = false;
    public findMarker = false;
    public findMarker2 = false;
    public findLine = false;
    public findPolygone = false;
    public zooms = 14;

    public maping = [
        [50.445036, 30.485600],
        [50.441005, 30.482981],
        [50.442990, 30.491796]
    ];
    public maping2 = [
        [50.455036, 30.495600],
        [50.451005, 30.492981],
        [50.452990, 30.481796]
    ];
    public maping3 = [
        [
            [50.445036, 30.485600],
            [50.441005, 30.482981],
            [50.442990, 30.491796]
        ],
        [
            [50.455036, 30.495600],
            [50.451005, 30.492981],
            [50.452990, 30.481796]
        ]

    ];

    public info;
    public info2;
    public info3;
    public info4;
    public info5;
    public info6;

    public qwerty1;
    public qwerty2;
    public qwerty3;
    public qwerty4;
    public qwerty5;
    public qwerty6;

    public group1;
    public group2;
    public group3;
    public group4;
    public group5;
    public group6;

    public rtis = [];
    public rtis2 = [];
    public rtis3 = [];
    public rtis4 = [];
    public rtis5 = [];
    public rtis6 = [];

    ngOnInit() {
        this.map = L.map('map', {
            center:[50.445036, 30.485600],
            zoom: 14,
            worldCopyJump: true,
            watch: true
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
            .addTo(this.map);
        L.control.scale().addTo(this.map);

        this.findMaping();
    }

    addLine() {
        if (this.findLine === false) {
            for (let i = 0; i < this.maping3.length; i++) {
                this.info5 = this.maping3[i];
                this.group5 = L.featureGroup();
                this.qwerty5 = L.polyline(this.info5, {
                    color: '#FF0000',
                    weight: 5,
                    opacity: 0.6
                })
                    .bindPopup('Line works')
                    .addTo(this.group5);
                this.map.addLayer(this.group5);
                this.rtis5.push(this.qwerty5);
            }
        }
        if (this.findLine === true) {
            for (let i = 0; i < this.rtis5.length; i++) {
                this.info5 = this.rtis5[i];
                this.map.removeLayer(this.rtis5[i]);
            }
            this.rtis5 = [];
        }
    }

    addPolygone() {
        if (this.findPolygone === false) {
            for (let i = 0; i < this.maping3.length; i++) {
                this.info6 = this.maping3[i];
                this.group6 = L.featureGroup();
                this.qwerty6 = L.polygon(this.info6,
                    {
                        color: '#0c7ff8',
                        weight: 5,
                        opacity: 0.6
                    })
                    .addTo(this.group6);
                this.map.addLayer(this.group6);
                this.rtis6.push(this.qwerty6);
            }
        }
        if (this.findPolygone === true) {
            for (let i = 0; i < this.rtis6.length; i++) {
                this.info6 = this.rtis6[i];
                this.map.removeLayer(this.rtis6[i]);
            }
            this.rtis6 = [];
        }
    }

    findMaping() {
        if (this.findMap === false) {

            for (let i = 0; i < this.maping.length; i++) {
                this.info = this.maping[i];
                this.group1 = L.featureGroup();
                this.qwerty1 = L.ellipse(
                    this.info,
                    [300, 100],
                    180,
                    {
                        color: 'blue',
                        fillColor: 'red',
                        fillOpacity: 0.15
                    })
                    .addTo(this.group1);
                this.map.addLayer(this.group1);

                this.rtis.push(this.qwerty1)
            }
        }
        if (this.findMap === true) {
            for (let i = 0; i < this.rtis.length; i++) {
                this.info2 = this.rtis[i];
                this.map.removeLayer(this.rtis[i]);
            }
            this.rtis = [];
        }
    }

    findMaping2() {
        if (this.findMap2 === false) {

            for (let i = 0; i < this.maping2.length; i++) {
                this.info2 = this.maping2[i];
                this.group2 = L.featureGroup();
                this.qwerty2 = L.circle(this.info2, {
                    stroke: false,
                    fillColor: '#0750cd',
                    fillOpacity: 0.25,
                    radius: 200,
                    fillRule: 'Hello'
                }).addTo(this.group2);
                this.map.addLayer(this.group2);

                this.rtis2.push(this.qwerty2)
            }
        }
        if (this.findMap2 === true) {
            for (let i = 0; i < this.rtis2.length; i++) {
                this.info2 = this.rtis2[i];
                this.map.removeLayer(this.rtis2[i]);
            }
            this.rtis2 = [];
        }
    }

    addMarker() {
        this.addMarker3('QQQQQQQQQ', this.maping, this.info3, this.rtis3, this.group3, this.qwerty3, this.findMarker)
    }

    addMarker2() {
        this.addMarker3('qwerty', this.maping2, this.info4, this.rtis4, this.group4, this.qwerty4, this.findMarker2)
    }

    addMarker3(xx, zzz, ccc, vvv, bbb, nnn, qqq) {
        if (qqq === false) {
            for (let i = 0; i < zzz.length; i++) {
                ccc = zzz[i];
                bbb = L.featureGroup();
                nnn = L.marker(ccc,)
                    .bindPopup(xx)
                    .on('mouseover', (ev) => {
                        ev.target.openPopup();
                    })
                    .on('mouseout', (ev) => {
                        ev.target.closePopup();
                    })
                    .addTo(this.map);

                this.map.addLayer(bbb);
                vvv.push(nnn);
            }
        }
        if (qqq === true) {
            for (let i = 0; i < vvv.length; i++) {
                ccc = vvv[i];
                this.map.removeLayer(vvv[i]);
            }
            vvv = [];
        }

    }


}
