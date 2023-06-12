import {ChangeDetectionStrategy, Component, ContentChild, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModel} from "../model/models";
import {HeaderCellDirective} from "../header-cell/header-cell.directive";
import {HeaderCellComponent} from "../header-cell/header-cell.component";
import {CellDirective} from "../cell/cell.directive";
import {CellComponent} from "../cell/cell.component";

@Component({
  selector: 'app-table-editor',
  standalone: true,
  imports: [CommonModule, HeaderCellComponent, CellComponent],
  templateUrl: './table-editor.component.html',
  styleUrls: ['./table-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TableEditorComponent {
  @Input() table!: TableModel;

  @ContentChild(HeaderCellDirective) headerCellDirective!: HeaderCellDirective;
  @ContentChild(CellDirective) cellDirective!: CellDirective;
}
