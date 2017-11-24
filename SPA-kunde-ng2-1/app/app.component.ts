import { Component } from '@angular/core';

@Component({
    selector: 'min-app',
    template: `
<div class="container">
<div class="row">
<nav class="navbar navbar-inverse faq-nav">
  <div class="container-fluid">
    <div class="navbar-header">
<a class="navbar-brand">
                    <img src="Images/airline_logo.png" width="110" alt="Airzure logo" />
                </a>
    </div>
    <ul class="nav navbar-nav">
                <li><a class="faq-link active" routerLink="/faq" routerLinkActive="active">FAQ</a></li>
                <li><a class="faq-link active" routerLink="/customerservice" routerLinkActive="active">Kundeservice</a></li>
    </ul>
  </div>
</nav>
</div>
</div>
<router-outlet></router-outlet>

`
})
export class AppComponent { }