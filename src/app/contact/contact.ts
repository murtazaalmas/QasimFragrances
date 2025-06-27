import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';
  submitted = false;

  constructor(private contactInfoService: ContactInfoService) {}

  get contactInfo() {
    return this.contactInfoService.getContactInfo();
  }

  submitForm() {
    fetch('http://localhost:8000/api/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.submitted = true;
        } else {
          alert('There was an error sending your message.');
        }
      })
      .catch(() => {
        alert('There was an error sending your message.');
      });
  }
} 