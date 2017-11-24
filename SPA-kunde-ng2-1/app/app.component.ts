import { Component } from '@angular/core';

@Component({
    selector: 'min-app',
    template: `
    <div class="container">
        <div class="row">
            <nav class="nav navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar navbar-inverse faq-nav navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                        <a class="navbar-brand">
                            <img src="Images/airline_logo.png" width="110" alt="Airzure logo" />
                        </a>
                    </div>
                    <div class="navbar-collapse collapse pull-right">
                    <ul class="nav navbar-nav">
                        <li><a routerLink="/faq" routerLinkActive="active">FAQ</a></li>
                        <li><a class="active" routerLink="/customerservice" routerLinkActive="active">Kundeservice</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    </div>
    <router-outlet></router-outlet>
`
})

export class AppComponent { }