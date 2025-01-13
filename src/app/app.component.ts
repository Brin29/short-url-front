import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShortenUrlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'short-url-front';
}
