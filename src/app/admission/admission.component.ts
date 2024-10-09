import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})
export class AdmissionComponent {
   common = {
      path : "https://static.wixstatic.com/media/2feeec_54cc94e5673243a4843eafb567842e1d~mv2.jpg/v1/fill/w_547,h_743,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2feeec_54cc94e5673243a4843eafb567842e1d~mv2.jpg",
      h1 : "Admissions",
      h2  : "",
      p : "We nurture a love for learning in a supportive and inclusive environment. Our dedicated staff promotes academic excellence while fostering character development, respect, and collaboration. We celebrate diversity and encourage students to embrace challenges. With a dynamic curriculum that includes rigorous academics and diverse extracurricular activities, [School Name] prepares students to thrive in a changing world, helping them reach their full potential as responsible global citizens."
    }
  
}
