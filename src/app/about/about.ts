import { Component } from '@angular/core';
import Navbar from '../navbar/navbar';
import { NgIf } from '@angular/common';
import Footer from '../footer/footer';


@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [Navbar, NgIf,Footer]
})
export default class About {
 showText = false;
  showImage = false;

  ngOnInit() {
    // Reveal paragraph first
    setTimeout(() => {
      this.showText = true;
    }, 600); // slight delay after route load

    // Reveal image a bit after paragraph
    setTimeout(() => {
      this.showImage = true;
    }, 1000); // adjust timing if needed
  }
}
