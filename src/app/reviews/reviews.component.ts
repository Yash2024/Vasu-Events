import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  ngOnInit():void{
    const swiper = new Swiper('.reivew .review-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        // When window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // When window width is <= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
   }
}
