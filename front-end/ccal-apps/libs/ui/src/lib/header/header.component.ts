/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';

@Component({
  selector: '[ccalAppsHeader]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  static defaultTitle = 'idea-board';
  @Input()
  title: string = HeaderComponent.defaultTitle;
}
