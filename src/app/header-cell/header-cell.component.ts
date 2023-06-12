import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ColumnModel} from "../model/models";

@Component({
  selector: 'th[cell]',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.css'],
  standalone: true,
  imports: [
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderCellComponent {
  @Input() column!: ColumnModel
}
