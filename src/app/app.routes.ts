import { Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { LandingComponentAdmin } from './modules/admin/landing/landing.component';
import { LandingComponent } from './modules/landing/landing.component';
import { ProyectosComponentAdmin } from './modules/admin/proyectos/proyectos.component';
import { ServiciosComponent } from './modules/admin/components/servicios/servicios.component';
import { CampanasComponent } from './modules/admin/components/campanas/campanas.component';
import { InicioComponent } from './modules/admin/components/inicio/inicio.component';
import { ReportesComponent } from './modules/admin/reportes/reportes.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent},
    { path: 'admin-root', component: AdminComponent },
    { path: 'landing', component: LandingComponentAdmin, children: [
        { path: 'inicio', component: InicioComponent },
        { path: 'analitica', component: DashboardComponent },
        { path: 'servicios', component: ServiciosComponent },
        { path: 'campana', component: CampanasComponent },
        { path: 'reportes', component: ReportesComponent },
        { path: 'proyectos', component: ProyectosComponentAdmin },
        { path: '**', redirectTo: 'inicio' }

    ]},
    { path: 'nosotros', component: NosotrosComponent },
    
    { path: '**', redirectTo: 'home' }
    
];
