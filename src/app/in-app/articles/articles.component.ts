import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../../services/travel-app.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public travelAppArticlesSource1: any = null;
  public travelAppArticlesSource2: any = null;
  public travelAppArticlesSource3: any = null;
  public travelAppArticlesSource4: any = null;
  public travelAppSelectedArticles: any = null;

  constructor(
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppService.getData('Articles Source 1').subscribe(data => this.travelAppArticlesSource1 = data);
    this.travelAppService.getData('Articles Source 2').subscribe(data => this.travelAppArticlesSource2 = data);
    this.travelAppService.getData('Articles Source 3').subscribe(data => this.travelAppArticlesSource3 = data);
    this.travelAppService.getData('Articles Source 4').subscribe(data => this.travelAppArticlesSource4 = data);
    this.travelAppService.getData('Selected Articles').subscribe(data => this.travelAppSelectedArticles = data);
  }
}
