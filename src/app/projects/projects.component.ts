import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private projectsService: ProjectsService) {}

  @Input() project!: Project;
}
