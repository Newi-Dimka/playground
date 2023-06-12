import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderRowComponent {
}
