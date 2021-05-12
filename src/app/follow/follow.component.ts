import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent  {

  ngAfterViewInit() {

  const triggers = Array.from(document.querySelectorAll('a'));
  const highlight = document.createElement('span');
  highlight.id='btn';
  highlight.classList.add('.highlight');
  document.body.appendChild(highlight);

  function highlightLink() {
    const linkCoords = this.getBoundingClientRect();

    highlight.classList.add('highlight');
    console.log(linkCoords, highlight);
     var myButtonClasses = document.getElementById("btn").classList;
    myButtonClasses.add("highlight");
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };
    highlight.style.background='white';
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  }

  triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
  }

}
