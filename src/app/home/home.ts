import { Component } from '@angular/core';
import Navbar from '../navbar/navbar';
import { RouterLink } from '@angular/router';
import { LottieComponent } from 'ngx-lottie';
import Footer from "../footer/footer";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [RouterLink, Navbar, LottieComponent, Footer],

})
export default class Home {
totoroOptions = {
  path: 'totoro-walk.json', // now at root of public/
  autoplay: true,
  loop: true,
};

}
