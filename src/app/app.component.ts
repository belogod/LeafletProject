import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
// import 'leaflet-ellipse';
import 'leaflet-lasso';

const options: LassoHandlerOptions = {
  polygon: {
    color: '#bf0202',
    weight: 2,
  },
  intersect: true,
};

interface LassoHandlerOptions {
  polygon?: L.PolylineOptions;
  intersect?: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  public map: any;

  public checkEllipse = false;
  public checkCircle = false;
  public checkMarker = false;
  public checkMarker2 = false;
  public checkLine = false;
  public checkPolygone = false;

  public coordEllipse = [
    [50.445036, 30.485600],
    [50.441005, 30.482981],
    [50.442990, 30.491796],
    [50.443990, 30.491896],
    [50.444990, 30.492096],
    [50.445990, 30.492196],
    [50.446990, 30.492796],
    [50.447990, 30.493896],
    [50.443190, 30.494996],
    [50.443290, 30.493296],
    [50.444490, 30.494396],
    [50.443490, 30.494896],
    [50.443590, 30.495496],
    [50.443690, 30.499196],
    [50.443790, 30.498696],
    [50.443890, 30.498496],
    [50.444290, 30.493496],
    [50.443090, 30.490296],
  ];
  public coordCircle = [
    [50.455036, 30.495600],
    [50.451005, 30.492981],
    [50.452990, 30.481796]
  ];
  public coordPolygone = [
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

  public infoEllipse;
  public infoCircle;
  public infoMarker;
  public infoMarker2;
  public infoPolyline;
  public infoPolygon;

  public qwerty1;
  public qwerty2;
  public qwerty3;
  public qwerty4;
  public qwerty5;
  public qwerty6;

  public groupEllipse;
  public groupCircle;
  public groupMarker;
  public groupMarker2;
  public groupPolyline;
  public groupPolygon;

  public latLon = [];

  public arrayEllipse = [];
  public arrayCircle = [];
  public arrayMarker = [];
  public arrayMarker2 = [];
  public arrayLine = [];
  public arrayPolygone = [];

  ngOnInit() {
    this.map = L.map('map', {
      center: [50.445036, 30.485600],
      zoom: 16,
      worldCopyJump: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
      .addTo(this.map);
    L.control.scale().addTo(this.map);

    const lasso = L.lasso(this.map, options);

    type LassoControlOptions = LassoHandlerOptions & L.ControlOptions;

    L.control.lasso(options).addTo(this.map);

    interface LassoHandlerFinishedEventData {
      latLngs: L.LatLng[];
      layers: L.Layer[];
    }

    this.map.on('lasso.finished', event => {
      this.setSelectedLayers(event.layers);

      for (let i = 0; i < event.layers.length; i++) {
        const arrayLayers = event.layers[i];
        this.latLon.push(Object.values(arrayLayers._latlng));
      }
    });

    this.addMarker();
  }


  setSelectedLayers(layers) {
    // this.addMarker();
    this.latLon = [];
    this.resetSelectedState();
    layers.forEach(layer => {
      if (layer instanceof L.Marker) {
        layer.setIcon(new L.Icon.Default({
          className: 'selected'
        }));
      } else if (layer instanceof L.Path) {
        layer.setStyle({color: '#ff4620'});
      }
    });
  }

  resetSelectedState() {
    this.map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        layer.setIcon(new L.Icon.Default({
          iconSize: [0, 0],
          shadowSize: [0, 0]
        }));
        // layer.setIcon(new L.Icon.Default());
      } else if (layer instanceof L.Path) {
        layer.setStyle({color: '#3388ff'});
      }
    });
  }

  addLine() {
    if (this.checkLine === false) {
      for (let i = 0; i < this.coordPolygone.length; i++) {
        this.infoPolyline = this.coordPolygone[i];
        this.groupPolyline = L.featureGroup();
        this.qwerty5 = L.polyline(this.infoPolyline, {
          color: '#FF0000',
          weight: 5,
          opacity: 0.6
        })
          .bindPopup('Line works')
          .addTo(this.groupPolyline);
        this.map.addLayer(this.groupPolyline);
        this.arrayLine.push(this.qwerty5);
      }
    }
    if (this.checkLine === true) {
      for (let i = 0; i < this.arrayLine.length; i++) {
        this.infoPolyline = this.arrayLine[i];
        this.map.removeLayer(this.arrayLine[i]);
      }
      this.arrayLine = [];
    }
  }

  addPolygone() {
    if (this.checkPolygone === false) {
      for (let i = 0; i < this.coordPolygone.length; i++) {
        this.infoPolygon = this.coordPolygone[i];
        this.groupPolygon = L.featureGroup();
        this.qwerty6 = L.polygon(this.infoPolygon,
          {
            color: '#0c7ff8',
            weight: 5,
            opacity: 0.6
          })
          .addTo(this.groupPolygon);
        this.map.addLayer(this.groupPolygon);
        this.arrayPolygone.push(this.qwerty6);
      }
    }
    if (this.checkPolygone === true) {
      for (let i = 0; i < this.arrayPolygone.length; i++) {
        this.infoPolygon = this.arrayPolygone[i];
        this.map.removeLayer(this.arrayPolygone[i]);
      }
      this.arrayPolygone = [];
    }
  }

  // addEllipse() {
  //   if (this.checkEllipse === false) {
  //
  //     for (let i = 0; i < this.coordEllipse.length; i++) {
  //       this.infoEllipse = this.coordEllipse[i];
  //       this.groupEllipse = L.featureGroup();
  //       // координаты
  //       // радиус по x,y
  //       // угол наклона
  //       // опции
  //       this.qwerty1 = L.ellipse(
  //         this.infoEllipse,
  //         [300, 100],
  //         180,
  //         {
  //           color: 'blue',
  //           fillColor: 'red',
  //           fillOpacity: 0.15
  //         })
  //         .addTo(this.groupEllipse);
  //       this.map.addLayer(this.groupEllipse);
  //
  //       this.arrayEllipse.push(this.qwerty1)
  //     }
  //   }
  //   if (this.checkEllipse === true) {
  //     for (let i = 0; i < this.arrayEllipse.length; i++) {
  //       this.infoEllipse = this.arrayEllipse[i];
  //       this.map.removeLayer(this.arrayEllipse[i]);
  //     }
  //     this.arrayEllipse = [];
  //   }
  // }

  addCircle() {
    if (this.checkCircle === false) {

      for (let i = 0; i < this.coordCircle.length; i++) {
        this.infoCircle = this.coordCircle[i];
        this.groupCircle = L.featureGroup();
        this.qwerty2 = L.circle(this.infoCircle, {
          stroke: false,
          fillColor: '#0750cd',
          fillOpacity: 0.25,
          radius: 200
        }).addTo(this.groupCircle);
        this.map.addLayer(this.groupCircle);

        this.arrayCircle.push(this.qwerty2)
      }
    }
    if (this.checkCircle === true) {
      for (let i = 0; i < this.arrayCircle.length; i++) {
        this.infoCircle = this.arrayCircle[i];
        this.map.removeLayer(this.arrayCircle[i]);
      }
      this.arrayCircle = [];
    }
  }

  addMarker() {
    this.addMarker3('Test', this.coordEllipse, this.infoMarker, this.arrayMarker, this.groupMarker, this.qwerty3, this.checkMarker)
  }

  addMarker2() {
    this.addMarker3('Testing', this.coordCircle, this.infoMarker2, this.arrayMarker2, this.groupMarker2, this.qwerty4, this.checkMarker2)
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
