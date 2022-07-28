import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-site-kinologist';
  IsMobile: boolean = false;
  isInBurger: boolean = true;
  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void { }

  imgCollection = [
    {
      image: 'assets/images/Feedback.png',
      thumbImage: 'assets/images/Feedback.png',
      alt: 'Image 1'
    }, {
      image: 'assets/images/Feedback2.png',
      thumbImage: 'assets/images/Feedback2.png',
      alt: 'Image 2'
    }, {
      image: 'assets/images/Feedback3.png',
      thumbImage: 'assets/images/Feedback3.png',
      alt: 'Image 3'
    }, {
      image: 'assets/images/Feedback4.png',
      thumbImage: 'assets/images/Feedback4.png',
      alt: 'Image 4'
    }, {
      image: 'assets/images/Feedback5.png',
      thumbImage: 'assets/images/Feedback5.png',
      alt: 'Image 5'
    }
  ];

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    if (window.innerWidth <= 768) {
      this.IsMobile = true;
    }
  }

  changeBurger(): void{
    this.isInBurger = !this.isInBurger;
  }
}
