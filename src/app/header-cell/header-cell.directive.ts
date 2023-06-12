import {Directive, inject, TemplateRef} from "@angular/core";

@Directive({
  selector: '[headerCell]',
  standalone: true
})
export class HeaderCellDirective {


  readonly templateRef = inject(TemplateRef<unknown>);
}
