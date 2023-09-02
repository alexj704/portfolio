import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactCompleteComponent } from './contact-complete/contact-complete.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsListComponent,
  },
  {
    path: 'contact',
    component: ContactFormComponent,
  },
  {
    path: 'contact-complete',
    component: ContactCompleteComponent,
  },
  {
    path: 'curriculum-vitae',
    component: CurriculumVitaeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
