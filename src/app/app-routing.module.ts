import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: CustomTableComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
