import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CowService } from '../service/cow-service';
import { Farm } from '../models/farms.model';
import { Cow } from '../models/cows.model';
import { DisplayCow } from "../display-cow/display-cow";

@Component({
  selector: 'app-list-cows',
  imports: [DisplayCow, CommonModule],
  templateUrl: './list-cows.html',
  styleUrl: './list-cows.css'
})
export class ListCows implements OnInit {
  @Input() farm!: Farm;
  cows: Cow[] = [];
  selectedCow: Cow | null = null;

  constructor(private service: CowService) {}

  ngOnInit() {
    this.service.getCowsOfFarm(this!.farm!.farm, (cows: Cow[]) => this.cows = cows);
  }

  public onSelectCow(cow: Cow) {
    this.selectedCow = cow;
  }
}
