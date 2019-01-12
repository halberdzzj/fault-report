import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { UserMgnComponent } from '../components/home/user-mgn/user-mgn.component';
import { ReportMgnComponent } from '../components/home/report-mgn/report-mgn.component';

const APPROUTES: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: 'user', component: UserMgnComponent},
            {path: 'report', component: ReportMgnComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APPROUTES)],
    exports: [RouterModule]
})

export class AppRouteModule { }