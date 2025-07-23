import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import ProjectCard from '../project-card/project-card';
import { PROJECTSS } from './PROJECTSS';
import Navbar from '../navbar/navbar'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, ProjectCard, Navbar],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})


export default class Projects {
  projects = PROJECTSS;
}

