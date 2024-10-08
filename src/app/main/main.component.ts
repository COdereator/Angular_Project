import { Component, Input, Output } from '@angular/core';
import { MainComponentComponent } from '../main-component/main-component.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainComponentComponent,CommonModule,CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  school = "Kamlapati S.L.V Inter College "

  cardData = [
    {
      h1 : "Admission",
      p : "Explore our admissions page to learn about our programs, application process, and discover how to join our vibrant school community",
      a : "Enroll Today",
      bgcolor : "#D43C2B",
      bgImage : ""
    },
    {
      h1 : "Enhance Learning",
      p : "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      a : "View Programs",
      bgcolor : "",
      bgImage : "./assets/image2.png"
    },
    {
      h1 : "Latest News & Events",
      p : "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      a : "View All",
      bgcolor : "#A6180D",
      bgImage : ""
    },
    {
      h1 : "",
      p : "",
      a : "",
      bgcolor : "",
      bgImage : "./assets/image.png"
    },
    {
      h1 : "For the Parents",
      p : "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      a : "Get Informed",
      bgcolor : "#7D221A",
      bgImage : ""
    },
     {
      h1 : "",
      p : "",
      a : "",
      bgcolor : "",
      bgImage : "./assets/image3.png"
    },
  ]


  card2Data = [
    {
      svg : "",
      h1  : "60",
      p : "Years of Excellence",
      bgImage : ""
    },
    {
      svg : "",
      h1  : "25",
      p : "High Schools Enroll Our Graduates",
      bgImage : ""
    },
    {
      svg : "",
      h1  : "45",
      p : "Certified Teachers",
      bgImage : ""
    },
    {
      svg : "",
      h1  : "100",
      p : "Satisfied Parents",
      bgImage : ""
    },
    {
      svg : "",
      h1  : "",
      p : "",
      bgImage : "https://static.wixstatic.com/media/2feeec_4faa17fa414142a2847de78e84385829~mv2.jpg/v1/fill/w_416,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_4faa17fa414142a2847de78e84385829~mv2.jpg"
    },
    {
      svg : "",
      h1  : "75",
      p : "Athletic Participation",
      bgImage : ""
    }
  ]
}
