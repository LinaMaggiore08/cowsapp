import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CowService } from '../service/cow-service';
import { Cow } from '../models/cows.model';
import { DisplayCow } from "../display-cow/display-cow";

@Component({
  selector: 'app-browse-breeds',
  standalone: true,
  imports: [DisplayCow, CommonModule],
  templateUrl: './browse-breeds.html',
  styleUrls: ['./browse-breeds.css']
})
export class BrowseBreeds implements OnInit {
  allCows: Cow[] = [];
  availableBreeds: string[] = [];
  selectedBreed: string | null = null;
  cowsOfBreed: Cow[] = [];
  selectedCow: Cow | null = null;
  loading: boolean = true;

  constructor(private service: CowService) {}

  ngOnInit() {
    this.loadAllCowsAndBreeds();
  }

  loadAllCowsAndBreeds() {
    this.loading = true;
    this.service.getCows((cows: Cow[]) => {
      this.allCows = cows;
      // Extract unique breeds
      this.availableBreeds = [...new Set(cows.map(cow => cow.breed))].sort();
      this.loading = false;
    });
  }

  onSelectBreed(breed: string) {
    this.selectedBreed = breed;
    this.selectedCow = null;
    this.loading = true;

    // Use your exact API endpoint for getting cows by breed
    this.service.getCowsByBreed(breed, (cows: Cow[]) => {
      this.cowsOfBreed = cows;
      this.loading = false;
    });
  }

  onSelectCow(cow: Cow) {
    this.selectedCow = cow;
  }

  goBackToBreeds() {
    this.selectedBreed = null;
    this.cowsOfBreed = [];
    this.selectedCow = null;
  }

  goBackToCows() {
    this.selectedCow = null;
  }

  getBreedCount(breed: string): number {
    return this.allCows.filter(cow => cow.breed === breed).length;
  }
}
