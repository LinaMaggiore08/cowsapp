import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Cow } from '../models/cows.model';
import { CowService } from '../service/cow-service';

@Component({
  selector: 'app-edit-cow',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-cow.html',
  styleUrls: ['./edit-cow.css']
})
export class EditCow implements OnInit {
  cow: Cow = {
    id: 0,
    name: "",
    breed: "",
    age: 0,
    health_status: "",
    birth_date: "",
    milk_production: 0,
  };

  wasSubmitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CowService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCowById(id, (cow: Cow | null) => {
      if (cow) {
        this.cow = { ...cow };
      } else {
        console.error('Cow not found with ID:', id);
      }
    });
  }

  public onSubmit() {
    this.service.updateCow(this.cow, (success: boolean) => {
      if (success) {
        console.log("Cow updated successfully");
        this.wasSubmitted = true;
      } else {
        console.log("Failed to update cow");
        this.wasSubmitted = true;
      }
    });
  }

  public goBack() {
    this.router.navigate(['/all-cows']);
  }

  public editAnother() {
    this.router.navigate(['/all-cows']);
  }
}
