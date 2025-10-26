import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-cow-data.json';
import { Farm } from './../models/farms.model';
import { Cow } from '../models/cows.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CowService {

  private host = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  cows: Cow[] = exampledata;

  // Get all cows - matches your /cows GET endpoint
  public getCows(callback: (cows: Cow[]) => void): void {
    this.http.get<Cow[]>(this.host + "/cows")
      .subscribe({
        next: (cows: Cow[]) => {
          console.log('Successfully fetched cows:', cows);
          callback(cows);
        },
        error: (error) => {
          console.error('Error fetching cows:', error);
          // Fallback to sample data if API fails
          callback(this.cows);
        }
      });
  }

  // Get cow by ID - matches your /cows?id=X endpoint
  public getCowById(id: number, callback: (cow: Cow | null) => void): void {
    this.http.get<Cow[]>(this.host + "/cows?id=" + id)
      .subscribe({
        next: (cows: Cow[]) => {
          console.log('Successfully fetched cow by ID:', cows);
          // Your API returns an array, so get the first cow or null
          const cow = cows.length > 0 ? cows[0] : null;
          callback(cow);
        },
        error: (error) => {
          console.error('Error fetching cow by ID:', error);
          callback(null);
        }
      });
  }

  // Get cows by breed - matches your /cows/:breed endpoint
  public getCowsByBreed(breed: string, callback: (cows: Cow[]) => void): void {
    this.http.get<Cow[]>(this.host + "/cows/" + breed)
      .subscribe({
        next: (cows: Cow[]) => {
          console.log('Successfully fetched cows by breed:', cows);
          callback(cows);
        },
        error: (error) => {
          console.error('Error fetching cows by breed:', error);
          callback([]);
        }
      });
  }

  // Search cows by breed - matches your /cows/breed/search/:search endpoint
  public searchCowsByBreed(search: string, callback: (cows: Cow[]) => void): void {
    this.http.get<Cow[]>(this.host + "/cows/breed/search/" + search)
      .subscribe({
        next: (cows: Cow[]) => {
          console.log('Successfully searched cows by breed:', cows);
          callback(cows);
        },
        error: (error) => {
          console.error('Error searching cows by breed:', error);
          callback([]);
        }
      });
  }

  // Search cows by health status - matches your /cows/search/health_status/:search endpoint
  public searchCowsByHealthStatus(search: string, callback: (cows: Cow[]) => void): void {
    this.http.get<Cow[]>(this.host + "/cows/search/health_status/" + search)
      .subscribe({
        next: (cows: Cow[]) => {
          console.log('Successfully searched cows by health status:', cows);
          callback(cows);
        },
        error: (error) => {
          console.error('Error searching cows by health status:', error);
          callback([]);
        }
      });
  }

  // Create cow - matches your /cows POST endpoint
  public createCow(cow: Cow, callback: (success: boolean) => void): void {
    this.http.post<{okPacket: any}>(this.host + "/cows", cow)
      .subscribe({
        next: (response) => {
          console.log('Successfully created cow:', response);
          callback(true);
        },
        error: (error) => {
          console.error('Error creating cow:', error);
          callback(false);
        }
      });
  }

  // Update cow - matches your /cows PUT endpoint
  public updateCow(cow: Cow, callback: (success: boolean) => void): void {
    this.http.put<{okPacket: any}>(this.host + "/cows", cow)
      .subscribe({
        next: (response) => {
          console.log('Successfully updated cow:', response);
          callback(true);
        },
        error: (error) => {
          console.error('Error updating cow:', error);
          callback(false);
        }
      });
  }

  // Delete cow - matches your /cows/:id DELETE endpoint
  public deleteCow(id: number, callback: (success: boolean) => void): void {
    this.http.delete<{response: any}>(this.host + "/cows/" + id)
      .subscribe({
        next: (response) => {
          console.log('Successfully deleted cow:', response);
          callback(true);
        },
        error: (error) => {
          console.error('Error deleting cow:', error);
          callback(false);
        }
      });
  }

  // Legacy methods for backward compatibility
  public getFarms(callback: (farms: Farm[]) => void): void {
    // Since there's no farms endpoint, we'll extract unique breeds from cows
    this.getCows((cows: Cow[]) => {
      const uniqueBreeds = [...new Set(cows.map(cow => cow.breed))];
      const farms: Farm[] = uniqueBreeds.map(breed => ({ farm: breed }));
      console.log('Generated farms from breeds:', farms);
      callback(farms);
    });
  }

  public getCowsOfFarm(farmName: String, callback: (cows: Cow[]) => void): void {
    // Treat farm as breed
    this.getCowsByBreed(farmName.toString(), callback);
  }
}
