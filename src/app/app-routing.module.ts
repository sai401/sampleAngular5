import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './departments/department-detail/department-detail.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch:'full' },
    { path: 'departments-list', component: DepartmentsComponent },
    { path: 'departments-list/:id', component: DepartmentDetailComponent },
    { path: 'employees', component: EmployeeComponent },
    {path:'**',component:PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const appComponents = [DepartmentsComponent, EmployeeComponent,DepartmentDetailComponent];

