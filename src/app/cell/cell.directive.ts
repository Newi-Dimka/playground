import {Directive, inject, TemplateRef} from "@angular/core";

@Directive({
  selector: '[cell]',
  standalone: true
})
export class CellDirective {
  readonly templateRef = inject(TemplateRef<unknown>);
}
