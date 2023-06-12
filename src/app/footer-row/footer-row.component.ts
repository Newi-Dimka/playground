import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CellModel} from "../model/models";

@Component({
  selector: 'app-footer-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-row.component.html',
  styleUrls: ['./footer-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterRowComponent {
}
