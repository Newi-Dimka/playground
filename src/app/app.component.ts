import { Component } from '@angular/core';
import {TableModel} from "./model/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  table: TableModel = {
    columns: [ { key: 'A', width: '100px', label: 'A' }, {key: 'B', width: '200px', label: 'B'}, { key: 'C', width: '300px', label: 'C' } ],
    rows: [
      { cells: [ { key: 'A', value: 100 }, { key: 'B', value: 200 },{ key: 'C', value: 300 } ] },
      { cells: [ { key: 'A', value: 1000 }, { key: 'B', value: 2000 },{ key: 'C', value: 3000 } ] }
    ],
    footerRows: [
      { cells: [ { key: 'A', value: 1 }, { key: 'B', value: 2 },{ key: 'C', value: 3 } ] },
    ]
  }
}
