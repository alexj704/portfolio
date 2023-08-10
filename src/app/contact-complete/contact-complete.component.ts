import { Component } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-complete',
  templateUrl: './contact-complete.component.html',
  styleUrls: ['./contact-complete.component.scss'],
})
export class ContactCompleteComponent {
  faCheck = faCheck;
}
