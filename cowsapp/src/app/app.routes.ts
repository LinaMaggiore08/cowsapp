import { Routes } from '@angular/router';
import { CreateCow } from './create-cow/create-cow';
import { ListFarms } from './list-farms/list-farms';
import { ListCows } from './list-cows/list-cows';
import { DisplayCow } from './display-cow/display-cow';
import { EditCow } from './edit-cow/edit-cow';
import { DeleteCow } from './delete-cow/delete-cow';
import { AllCows } from './all-cows/all-cows';
import { SearchCows } from './search-cows/search-cows';
import { BrowseBreeds } from './browse-breeds/browse-breeds';
import { ManageCows } from './manage-cows/manage-cows';

export const routes: Routes = [
  { path: '', redirectTo: '/manage-cows', pathMatch: 'full' },
  { path: 'manage-cows', component: ManageCows },
  { path: 'create', component: CreateCow },
  { path: 'list-farms', component: ListFarms },
  { path: 'list-cows', component: ListCows },
  { path: 'all-cows', component: AllCows },
  { path: 'search-cows', component: SearchCows },
  { path: 'browse-breeds', component: BrowseBreeds },
  { path: 'display/:id', component: DisplayCow },
  { path: 'edit/:id', component: EditCow },
  { path: 'delete/:id', component: DeleteCow }
];
