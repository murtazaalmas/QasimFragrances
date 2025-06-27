import { Injectable } from '@angular/core';

export interface ContactInfo {
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
    address: 'Hassan Center, Hall Road, Lahore, Pakistan',
    phone: '+923476833344',
    phoneFormatted: '+92 347 6833344',
    email: 'MuhammadQasim@gmail.com',
    instagram: {
      url: 'https://www.instagram.com/attractionperfume007/?igsh=MWl3bTN2N2xha2J4Ng%3D%3D&utm_source=ig_contact_invite#',
      displayName: 'Attraction Perfume'
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