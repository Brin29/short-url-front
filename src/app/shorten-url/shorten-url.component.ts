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

  shortUrl = [];
  
  shortenUrl(url:any){
    this.shortenService.shortenUrl({longUrl: "https://youtube.com"}).subscribe({
      next: (data) => {
        this.shortUrl = data;
        console.log(this.shortUrl);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}