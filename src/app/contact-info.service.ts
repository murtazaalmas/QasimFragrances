import { Injectable } from '@angular/core';

export interface ContactInfo {
  name: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  instagram: {
    url: string;
    displayName: string;
  };
  businessHours: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  private contactInfo: ContactInfo = {
    name: 'Ahmad Daas',
    address: 'People Colony Gujranwa;a, Pakistan',
    phone: '+923216467893',
    phoneFormatted: '+92 321 6467893',
    email: 'daas@gmail.com',
    instagram: {
      url: '',
      displayName: 'Daas Perfume'
    },
    businessHours: 'Mon - Sat: 9:00 AM - 8:00 PM'
  };

  getContactInfo(): ContactInfo {
    return this.contactInfo;
  }

  getAddress(): string {
    return this.contactInfo.address;
  }

  getPhone(): string {
    return this.contactInfo.phone;
  }

  getPhoneFormatted(): string {
    return this.contactInfo.phoneFormatted;
  }

  getEmail(): string {
    return this.contactInfo.email;
  }

  getInstagram(): { url: string; displayName: string } {
    return this.contactInfo.instagram;
  }

  getBusinessHours(): string {
    return this.contactInfo.businessHours;
  }
} 