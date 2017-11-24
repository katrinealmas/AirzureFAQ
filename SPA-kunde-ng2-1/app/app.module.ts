import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { FaqComponent } from './faq.component'; 
import { CustomerService } from './customerservice.component';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { OrderByPipe } from './orderby.pipe';
import { SearchPipe } from './search.pipe';
import { RegisterComponent } from './register.component';
import { ShowFaqComponent } from './showFaq.component';


const appRoutes: Routes = [
    { path: 'faq', component: FaqComponent },
    { path: 'customerservice', component: CustomerService },
    { path: '', redirectTo: '/faq', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
        , BrowserModule, ReactiveFormsModule, HttpModule, JsonpModule, FormsModule],
    declarations: [FaqComponent, CustomerService, AppComponent, OrderByPipe, SearchPipe, RegisterComponent, ShowFaqComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

