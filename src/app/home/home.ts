import { Component } from '@angular/core';
import Navbar from '../navbar/navbar';
import { RouterLink } from '@angular/router';
import { LottieComponent } from 'ngx-lottie';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [RouterLink, Navbar, LottieComponent],

})
export default class Home {
totoroOptions = {
  path: 'totoro-walk.json', // now at root of public/
  autoplay: true,
  loop: true,
};

}
