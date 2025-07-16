import { Component } from '@angular/core';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  imports: [Navbar, Footer]
})
export default class Projects {}
