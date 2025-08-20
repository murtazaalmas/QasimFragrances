import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from 'emailjs-com';

@Injectable({ providedIn: 'root' })
export class EmailService {
  // IMPORTANT: Replace with your actual EmailJS credentials
  private serviceId = 'service_ii989ih';
  private templateId = 'template_wwbaajo';
  private publicKey = 'qb2HRfWMxpcTpsoEO';

  constructor() {}

  sendOrderEmail(subject: string, name: string, address: string, tillId: string, total: number, orderId: string): Promise<EmailJSResponseStatus> {
    const templateParams = {
      subject,
      name,
      address,
      tillId,
      total,
      orderId,
      to_email: 'mmurtazaalmas@gmail.com'
    };

    // Note: Ensure your EmailJS template has variables like {{subject}} and {{body_html}}
    return emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        return response;
      }, (error) => {
        console.log('FAILED...', error);
        throw error;
      });
  }
} 