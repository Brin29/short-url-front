import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShortenUrlService } from '../services/shorten-url-service';

@Component({
  selector: 'app-shorten-url',
  imports: [ReactiveFormsModule],
  templateUrl: './shorten-url.component.html',
  styleUrl: './shorten-url.component.css'
})
export class ShortenUrlComponent {

  constructor(private shortenService: ShortenUrlService) {}

  formShorten = new FormControl("", Validators.required);

  url = [];

  shortenUrl(){
    this.shortenService.shortenUrl({
      longUrl: "https://github.com/Brin29/auth-register-login-front/blob/main/src/app/app.config.ts"
    }).subscribe({
      next: (data) => {
        this.url = data;
        console.log(this.url);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}