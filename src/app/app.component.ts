import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'time-tracker-app';

  ngOnInit(): void {
    // removed antiforgery token fetching for now
    // Uncomment if you need to fetch the anti-forgery token
    // this.http.get(`${environment.apiBaseUrl}/anti-forgery/xsrf-token`).subscribe(data => {
    //   console.log(data);
    //   sessionStorage.setItem('xsrf-token', JSON.stringify(data));
    // });
  }

}
