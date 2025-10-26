import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CowService } from '../service/cow-service';
import { Farm } from '../models/farms.model';
import { ListCows } from "../list-cows/list-cows";

@Component({
  selector: 'app-list-farms',
  imports: [ListCows, CommonModule],
  templateUrl: './list-farms.html',
  styleUrls: ['./list-farms.css']
})
export class ListFarms implements OnInit {
  selectedFarm: Farm | null = null;
  farms: Farm[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: CowService
  ) {}

  ngOnInit() {
    console.log("Getting data....");
      this.service.getFarms((farms: Farm[]) => {
        this.farms = farms;
        console.log('this.farms', this.farms);
    });
  }

  onSelectFarm(farm: Farm) {
    this.selectedFarm = farm;
  }
}
