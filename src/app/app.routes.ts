import { Routes } from '@angular/router';
import { IphoneComponent } from './iphone/iphone.component';
import path from 'path';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { HuaweiComponent } from './huawei/huawei.component';
=======
import { RealmeComponent } from './realme/realme.component';
>>>>>>> 31bbcc0a117864aeafd8b4d5fbc2aa93d5c9f9a2

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },

    {
        path: 'iphone', component: IphoneComponent,
    },
    {
<<<<<<< HEAD
      path:'huawei', component: HuaweiComponent,
=======
        path: 'realme', component: RealmeComponent,
>>>>>>> 31bbcc0a117864aeafd8b4d5fbc2aa93d5c9f9a2
    }

];
