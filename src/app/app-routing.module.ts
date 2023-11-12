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
    title: 'Accueil | Alexandre JOIGNANT',
  },
  {
    path: 'projects',
    component: ProjectsListComponent,
    title: 'Mes projets | Alexandre JOIGNANT',
  },
  {
    path: 'contact',
    component: ContactFormComponent,
    title: 'Me Contacter | Alexandre JOIGNANT',
  },
  {
    path: 'contact-complete',
    component: ContactCompleteComponent,
    title: 'Merci pour votre message | Alexandre JOIGNANT',
  },
  {
    path: 'curriculum-vitae',
    component: CurriculumVitaeComponent,
    title: 'Mon CV | Alexandre JOIGNANT',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
