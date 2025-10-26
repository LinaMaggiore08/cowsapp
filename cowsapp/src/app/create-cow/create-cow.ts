import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cow } from '../models/cows.model';
import { Characteristics } from '../models/characteristics.model';
import { CowService } from '../service/cow-service';

@Component({
  selector: 'app-create-cow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-cow.html',
  styleUrls: ['./create-cow.css']
})
export class CreateCow implements OnInit {

  cow: Cow = {
    id: Math.floor(Math.random() * 1000000),
    name: "",
    breed: "",
    age: 0,
    health_status: "",
    birth_date: "",
    milk_production: 0,
  };

  characteristicsRaw: string = "";
  wasSubmitted: boolean = false;

  constructor(private service: CowService) { }

  ngOnInit() {
  }

  public onSubmit() {
    // Parse the Characteristics and add to the Cow then call the Service to create the new Cow
    let characteristics: Characteristics[] = [];
    let characteristicsAll = this.characteristicsRaw.split('\n');
    for (let i = 0; i < characteristicsAll.length; ++i) {
      let name = "";
      let value = "";
      let description = "";
      let characteristicInfo = characteristicsAll[i];
      let characteristicParts = characteristicInfo.split(':');
      if (characteristicParts.length == 3) {
        name = characteristicParts[0];
        value = characteristicParts[1];
        description = characteristicParts[2];
      }
      else if (characteristicParts.length == 2) {
        name = characteristicParts[0];
        value = characteristicParts[1];
      }
      else {
        name = characteristicParts[0];
      }
      characteristics.push(
        { characteristicId: Math.floor(Math.random() * 1000000), name, value, description }
      );
    }
    console.log(this.cow);
    this.service.createCow(this.cow, (success: boolean) => {
      if (success) {
        console.log("Cow created successfully");
        this.wasSubmitted = true;
      } else {
        console.log("Failed to create cow");
        // Still show submitted state but could add error handling
        this.wasSubmitted = true;
      }
    });
  }
}
