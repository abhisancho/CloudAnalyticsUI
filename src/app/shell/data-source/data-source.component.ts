import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.scss']
})
export class DataSourceComponent implements OnInit {
  datasources: any[];
  constructor() { }

  ngOnInit() {
    this.datasources = [{
      name: "population",
      type: "excel"
    },
    {
      name: "gender",
      type: "excel"
    }]
  }
  onAddSource(event) {
    debugger;
    var file = event;
    let fileReader = new FileReader();
    fileReader.onloadend = function (this, e) {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file);
  }
}
