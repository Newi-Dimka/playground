import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CellModel} from "../model/models";


@Component({
  selector: 'td[cell]',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  standalone: true,
  imports: [
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent {
  @Input() _cell!: CellModel;
}
