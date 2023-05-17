import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input() data = [
    { title: 'home', url: '/home', isActive: true },
    { title: 'services', url: '/services' },
    { title: 'news', url: '/news' },
    { title: 'blog', url: '/blog' },
    { title: 'contact', url: '/contact' },
  ];

  isShow = true;

  onToggle() {
    this.isShow = !this.isShow;
  }
}
