import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-cows',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './manage-cows.html',
  styleUrls: ['./manage-cows.css']
})
export class ManageCows {

}
