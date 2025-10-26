import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Cow } from '../models/cows.model';
import { RouterLink } from '@angular/router';
import { CowService } from '../service/cow-service';

@Component({
  selector: 'app-display-cow',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './display-cow.html',
  styleUrls: ['./display-cow.css']
})
export class DisplayCow {
  @Input() cow!: Cow;

  constructor(
    private route: ActivatedRoute,
    private cowService: CowService
  ) {}

}
