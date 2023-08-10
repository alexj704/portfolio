import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { HtmlParser } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  FormData!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contact: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmitForm(FormData: FormData) {
    const errorMsg: HTMLParagraphElement =
      document.querySelector('.error-msg')!;
    this.contact.PostMessage(FormData).subscribe(
      (response) => {
        if (response.success === 'true') {
          this.router.navigateByUrl('contact-complete');
        } else {
          errorMsg.textContent = `Erreur: "${response.message}"`;
        }
      },
      (error) => {
        errorMsg.textContent = `Erreur: "${error.message}"`;
      }
    );
  }
}
