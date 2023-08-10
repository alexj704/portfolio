import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://formsubmit.co/ajax/753cdd2d655a65db883d3ae230097527';

  constructor(private http: HttpClient) {}

  PostMessage(formData: FormData) {
    return this.http.post(this.api, formData).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
        },
        (error: Error) => {
          return error;
        }
      )
    );
  }
}
