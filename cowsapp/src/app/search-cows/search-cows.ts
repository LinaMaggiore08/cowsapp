import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CowService } from '../service/cow-service';
import { Cow } from '../models/cows.model';
import { DisplayCow } from "../display-cow/display-cow";

@Component({
  selector: 'app-search-cows',
  standalone: true,
  imports: [DisplayCow, CommonModule, FormsModule],
  templateUrl: './search-cows.html',
  styleUrls: ['./search-cows.css']
})
export class SearchCows implements OnInit {
  cows: Cow[] = [];
  selectedCow: Cow | null = null;
  loading: boolean = false;
  searchTerm: string = '';
  searchType: 'breed' | 'health_status' = 'breed';
  hasSearched: boolean = false;

  constructor(private service: CowService) {}

  ngOnInit() {
  }

  public onSearch() {
    if (!this.searchTerm.trim()) {
      return;
    }

    this.loading = true;
    this.hasSearched = true;
    this.selectedCow = null;

    if (this.searchType === 'breed') {
      this.service.searchCowsByBreed(this.searchTerm, (cows: Cow[]) => {
        this.cows = cows;
        this.loading = false;
      });
    } else {
      this.service.searchCowsByHealthStatus(this.searchTerm, (cows: Cow[]) => {
        this.cows = cows;
        this.loading = false;
      });
    }
  }

  public onSelectCow(cow: Cow) {
    this.selectedCow = cow;
  }

  public goBack() {
    this.selectedCow = null;
  }

  public clearSearch() {
    this.searchTerm = '';
    this.cows = [];
    this.hasSearched = false;
    this.selectedCow = null;
  }
}
