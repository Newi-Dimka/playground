import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TableEditorComponent} from "./table-editor/table-editor.component";
import {RowComponent} from "./row/row.component";
import {CellComponent} from "./cell/cell.component";
import {FooterRowComponent} from "./footer-row/footer-row.component";
import {HeaderRowComponent} from "./header-row/header-row.component";
import {HeaderCellDirective} from "./header-cell/header-cell.directive";
import {CellDirective} from "./cell/cell.directive";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TableEditorComponent,
    FooterRowComponent,
    HeaderRowComponent,
    RowComponent,
    CellComponent,
    HeaderCellDirective,
    CellDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
