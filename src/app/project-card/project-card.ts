import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>{{ project.ProjectName }}</h3>
      <p>{{ project.ProjectDescription }}</p>
      <a [href]="project.GithubLink" target="_blank">GitHub →</a>
    </div>
  `,
  styleUrls: ['./project-card.css']
})
export default class ProjectCard {
  @Input() project: any;
}
