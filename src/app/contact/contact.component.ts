import { AfterViewInit, Component } from '@angular/core';
import { animateContact } from '../../animations';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  loading = false;
  success = false;
  error = false;

  contactData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    event_type: '',
    guests: '',
    event_date: '',
    location: '',
    message: ''
  };

  ngAfterViewInit(): void {
    animateContact();
  }

  async sendContactForm() {

    this.loading = true;
    this.error = false;

    try {

      await emailjs.send(
        'service_v4f79s4',
        'template_tvuagqm',
        {
          name: this.contactData.name,
          company: this.contactData.company,
          email: this.contactData.email,
          phone: this.contactData.phone,
          event_type: this.contactData.event_type,
          guests: this.contactData.guests,
          event_date: this.contactData.event_date,
          location: this.contactData.location,
          message: this.contactData.message
        },
        '7F4zacMm0xX_RdPvT'
      );

      this.success = true;

      this.contactData = {
        name: '',
        company: '',
        email: '',
        phone: '',
        event_type: '',
        guests: '',
        event_date: '',
        location: '',
        message: ''
      };

    } catch (error) {

      console.error(error);

      this.error = true;

    } finally {

      this.loading = false;

    }
  }
}