import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public icon: string = 'moon';

  constructor() {}

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      return (this.icon = 'sun');
    } else {
      return (this.icon = 'moon');
    }
  }
}
