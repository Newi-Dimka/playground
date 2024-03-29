import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent {
}
