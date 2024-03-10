import { Routes } from '@angular/router';
import { IphoneComponent } from './iphone/iphone.component';
import { HomeComponent } from './home/home.component';
import { RealmeComponent } from './realme/realme.component';
import { HuaweiComponent } from './huawei/huawei.component';
import { SamsungComponent } from './samsung/samsung.component';
import { MotorolaComponent } from './motorola/motorola.component';
import { OppoComponent } from './oppo/oppo.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


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
    }
]


@NgModule({
  providers: [InMemoryDataService],
  declarations: [
  ],
  imports: [
    HttpClientModule,
    HomeComponent,
    IphoneComponent,
    HuaweiComponent,
    SamsungComponent,
    MotorolaComponent,
    OppoComponent
  ],
})

export class AppRoutes { }
