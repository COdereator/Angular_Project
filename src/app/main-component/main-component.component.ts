import { Component } from '@angular/core';
import { SectionComponent } from "../section/section.component";

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {
  path = "https://scontent.fknu1-1.fna.fbcdn.net/v/t1.6435-9/94387682_101233634909544_8925360413852303360_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AxOngdzns1gQ7kNvgGTAlVd&_nc_ht=scontent.fknu1-1.fna&_nc_gid=AVQVDfRdSC9SOvcIBtEUdNo&oh=00_AYC3u8pXmMuAHm_9GA0YHRJVZRtNau5k5Y34lSS82bqssw&oe=6729A492"
}
