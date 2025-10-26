import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CowService } from '../service/cow-service';
import { Cow } from '../models/cows.model';
import { DisplayCow } from "../display-cow/display-cow";

@Component({
  selector: 'app-all-cows',
  standalone: true,
  imports: [DisplayCow, CommonModule, RouterLink],
  templateUrl: './all-cows.html',
  styleUrls: ['./all-cows.css']
})
export class AllCows implements OnInit {
  cows: Cow[] = [];
  selectedCow: Cow | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(private service: CowService) {}

  ngOnInit() {
    this.loadCows();
  }

  loadCows() {
    this.loading = true;
    this.error = null;

    this.service.getCows((cows: Cow[]) => {
      this.cows = cows;
      this.loading = false;
      if (cows.length === 0) {
        this.error = 'No cows found in the API';
      }
    });
  }

  public onSelectCow(cow: Cow) {
    this.selectedCow = cow;
  }

  public goBack() {
    this.selectedCow = null;
  }

  public refreshCows() {
    this.loadCows();
  }
}
