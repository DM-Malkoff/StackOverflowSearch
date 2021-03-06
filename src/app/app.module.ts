import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar'

import {AppComponent} from './app.component';
import {LoginPageComponent} from './authorize/login-page/login-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {RegisterPageComponent} from './authorize/register-page/register-page.component';
import {SearchComponent} from './overview/search/search.component';
import {SearchResultsPageComponent} from './overview/search-results-page/search-results-page.component';
import {QuestionInfoPageComponent} from './overview/question-info-page/question-info-page.component';
import {PageNotFoundComponentComponent} from './page-not-found-component/page-not-found-component.component';
import {AuthorModalComponent} from './overview/search-page-modal/author-modal/author-modal.component';
import {TagModalComponent} from './overview/search-page-modal/tag-modal/tag-modal.component';
import {PasswordRecoveryComponent} from './authorize/password-recovery/password-recovery.component';
import {InterceptorService} from "./shared/services/loader/interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    SearchComponent,
    QuestionInfoPageComponent,
    SearchResultsPageComponent,
    PageNotFoundComponentComponent,
    AuthorModalComponent,
    TagModalComponent,
    PasswordRecoveryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
