import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { AchievementComponent } from './achievement/achievement.component';
import {MatTableModule} from '@angular/material/table';
import { ProductListComponent } from './product-list/product-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PhotosComponent } from './photos/photos.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import {MatCardModule} from '@angular/material/card';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

import { ServiceEnquiryService } from './enquiry/service-enquiry.service';
import { converttoupper } from './admin/DeleteSymbols';
import { FeespageComponent } from './feespage/feespage.component';
import { FeesformComponent } from './feesform/feesform.component';
import { PaymentformComponent } from './paymentform/paymentform.component';


const routes: Routes = [{path:'one',component:HomeComponent},
{path:'second',component:CourseComponent},
{path:'achievement',component:AchievementComponent},
{path:'sidenav',component:SidenavComponent},
{path:'login',component:LoginComponent},{path:'Photo',component:PhotosComponent},
{path:'enquiry',component:EnquiryComponent},{path:'admin',component:AdminComponent},
{path:'fees',component:FeespageComponent},{path:'feesform',component:FeesformComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    DataBindingComponent,
    SidenavComponent,
    LoginComponent,
    AchievementComponent,
    ProductListComponent,
    PhotosComponent,
    EnquiryComponent,
    AdminComponent,converttoupper, FeespageComponent, FeesformComponent, PaymentformComponent
  ],
  imports: [
    HttpClientModule,FormsModule,ReactiveFormsModule,
    BrowserModule,MatBadgeModule,MatExpansionModule,MatProgressSpinnerModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatTableModule,
    BrowserAnimationsModule,MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,
    RouterModule.forRoot(routes),MatCardModule,MatSliderModule
  ],
  providers: [ServiceEnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
