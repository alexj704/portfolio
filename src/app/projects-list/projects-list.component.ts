import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ProjectsComponent } from '../projects/projects.component';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  constructor(private projectService: ProjectsService) {}

  projects!: Project[];

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
  }
}
