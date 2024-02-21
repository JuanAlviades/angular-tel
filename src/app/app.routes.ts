import { Routes } from '@angular/router';
import { IphoneComponent } from './iphone/iphone.component';
import path from 'path';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RealmeComponent } from './realme/realme.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },

    {
        path: 'iphone', component: IphoneComponent,
    },
    {
        path: 'realme', component: RealmeComponent,
    }
    
];
