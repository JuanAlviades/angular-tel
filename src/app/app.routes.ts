import { Routes } from '@angular/router';
import { IphoneComponent } from './iphone/iphone.component';
import { HomeComponent } from './home/home.component';
import { RealmeComponent } from './realme/realme.component';
import { HuaweiComponent } from './huawei/huawei.component';
import { SamsungComponent } from './samsung/samsung.component';
import { MotorolaComponent } from './motorola/motorola.component';
import { OppoComponent } from './oppo/oppo.component';
import { CrudComponent } from './crud/crud.component';
import { BuscarComponent } from './crud/buscar/buscar.component';
import { EditarComponent } from './crud/editar/editar.component';
import { CrearComponent } from './crud/crear/crear.component';
import { EliminarComponent } from './crud/eliminar/eliminar.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'iphone', component: IphoneComponent,
    },
    {
        path: 'realme', component: RealmeComponent,
    },
    {
        path: 'huawei', component: HuaweiComponent,
    },
    {
        path: 'samsung', component: SamsungComponent,
    },
    {
        path: 'motorola', component: MotorolaComponent,
    },
    {
        path: 'oppo', component: OppoComponent,
    },
    {
        path: 'crud', 
        component: CrudComponent,
        children:[
            {   path:'', 
                redirectTo: '', 
                pathMatch: 'full' 
            },
            {
                path:'buscar',
                component: BuscarComponent
            },
            {
                path:'editar',
                component: EditarComponent
            },
            {
                path:'crear',
                component: CrearComponent
            },
            {
                path:'eliminar',
                component: EliminarComponent
            }
        ]
    }
];
