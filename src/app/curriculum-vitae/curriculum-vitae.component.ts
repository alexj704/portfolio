import { Component } from '@angular/core';
import {
  faPhone,
  faEnvelope,
  faHome,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faAngular,
  faJs,
  faNode,
  faHtml5,
  faCss3,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss'],
})
export class CurriculumVitaeComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faHome = faHome;
  faStar = faStar;
  faReact = faReact;
  faAngular = faAngular;
  faJs = faJs;
  faNode = faNode;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
