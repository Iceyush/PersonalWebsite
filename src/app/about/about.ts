import { Component } from '@angular/core';
import Navbar from '../navbar/navbar';


@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [Navbar]
})
export default class About {}
