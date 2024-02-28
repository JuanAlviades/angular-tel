import { Routes } from '@angular/router';
import { IphoneComponent } from './iphone/iphone.component';
import path from 'path';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RealmeComponent } from './realme/realme.component';
import { HuaweiComponent } from './huawei/huawei.component';
import { SamsungComponent } from './samsung/samsung.component';
import { MotorolaComponent } from './motorola/motorola.component';
import { OppoComponent } from './oppo/oppo.component';

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
    }

    
];
