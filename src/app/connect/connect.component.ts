import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent {

  name: string="";
  email: string="";
  mob: string="";
  subject: string="";
  message: string="";

  sendmail(){
    const templateParams = {
      name: this.name,
      email: this.email,
      mob: this.mob,
      subject: this.subject,
      message: this.message,
    };

    emailjs
      .send(
        'service_6tyyien', //service id
        'template_ggwvbky', //template id
        templateParams,
        'ChP5GY3L0RVpqNC7s' //account id
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send the email. Please try again.');
        }
      );
  }

}
