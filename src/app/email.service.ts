import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private apiKey = 'DAC1A343B660EEE1630429BA57A14BCDE03ED936A1BA505707C32AC762988380061DFC77FD13B2A6BDB02D5251E2504D'; // <-- Replace with your Elastic Email API key
  private fromEmail = 'mmurtazaalmas@gmail.com'; // Use a verified sender
  private toEmail = 'mmurtazaalmas@gmail.com';

  constructor(private http: HttpClient) {}

  sendOrderEmail(subject: string, body: string) {
    const url = 'https://api.elasticemail.com/v2/email/send';
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const payload = new URLSearchParams({
      apikey: this.apiKey,
      from: this.fromEmail,
      to: this.toEmail,
      subject,
      bodyHtml: body
    });
    return firstValueFrom(this.http.post(url, payload.toString(), { headers }));
  }
} 