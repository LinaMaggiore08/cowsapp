import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Cow } from '../models/cows.model';
import { CowService } from '../service/cow-service';

@Component({
  selector: 'app-delete-cow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-cow.html',
  styleUrls: ['./delete-cow.css']
})
export class DeleteCow implements OnInit {
  cow: Cow | null = null;
  wasDeleted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CowService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCowById(id, (cow: Cow | null) => {
      if (cow) {
        this.cow = cow;
      } else {
        console.error('Cow not found with ID:', id);
      }
    });
  }

  public onConfirmDelete() {
    if (this.cow) {
      this.service.deleteCow(this.cow.id, (success: boolean) => {
        if (success) {
          console.log("Cow deleted successfully");
          this.wasDeleted = true;
          setTimeout(() => {
            this.router.navigate(['/all-cows']);
          }, 2000);
        } else {
          console.log("Failed to delete cow");
          this.wasDeleted = true;
        }
      });
    }
  }

  public onCancel() {
    this.router.navigate(['/all-cows']);
  }
}
