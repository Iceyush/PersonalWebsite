import { Component } from '@angular/core';
import Navbar from '../navbar/navbar';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  imports: [Navbar]
})
export default class Projects {}
