import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {AdminComponent} from './admin/admin.component';
import {ProductsComponent} from './products/products.component';
import {HeroImgComponent} from './heroImg/heroImg.component';
import {FeatureComponent} from './feature/feature.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AdminComponent,
    ProductsComponent,
    HeroImgComponent,
    FeatureComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
