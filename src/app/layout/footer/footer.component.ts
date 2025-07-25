import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerInfo: any;

  ngOnInit(): void {
    this.footerInfo = {
      company: 'TimeTracker Inc.',
      version: 'v1.0.3',
      year: new Date().getFullYear()
    };
  }
}

