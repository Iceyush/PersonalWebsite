import { Component } from '@angular/core';
import Navbar from '../navbar/navbar';
import { NgIf } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [Navbar, NgIf]
})
export default class About {

  showImage = false;

  ngOnInit() {
    // trigger the animation after a slight delay
    setTimeout(() => {
      this.showImage = true;
    }, 100); // give the route time to load
  }
}
