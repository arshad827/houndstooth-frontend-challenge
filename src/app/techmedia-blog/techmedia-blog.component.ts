import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techmedia-blog',
  templateUrl: './techmedia-blog.component.html',
  styleUrls: ['./techmedia-blog.component.css']
})
export class TechmediaBlogComponent implements OnInit {
  idShow = false;
  newSliderArray;
  sliderArray = [
    { img: 'Image 1.png', alt: '', text: 'Scaling subcription: An interview with a pioneering box company' },
    { img: 'Image 2.png', alt: '', text: 'Scaling subcription: An interview with a pioneering box company' },
    { img: 'Image 3.png', alt: '', text: 'Scaling subcription: An interview with a pioneering box company' },
  ];
  constructor() { }

  ngOnInit() {
  }
  isShow() {
    this.idShow = !this.idShow;
  }
  next() {
    const temp = this.sliderArray[0];
    this.sliderArray = this.sliderArray.filter((ele, i) => {
      if (i !== 0) {
        return ele;
      }
    });
    this.sliderArray.push(temp);
  }
  prev() {
    const temp = this.sliderArray[this.sliderArray.length - 1];
    this.sliderArray = this.sliderArray.filter((ele, i) => {
      if (i !== this.sliderArray.length - 1) {
        return ele;
      }
    });
    this.sliderArray.splice(0, 0, temp);
  }
}
