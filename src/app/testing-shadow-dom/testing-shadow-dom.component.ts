import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testing-shadow-dom',
  templateUrl: './testing-shadow-dom.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TestingShadowDomComponent {
  constructor() {}
}
