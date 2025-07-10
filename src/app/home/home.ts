import { Component } from '@angular/core';
import Navbar from '../navbar/navbar';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [ Navbar],

})
export default class Home {}
