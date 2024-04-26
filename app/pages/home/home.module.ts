import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { FourSectionComponent } from './four-section/four-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { FooterComponent } from './footer/footer.component';
import { LastComponent } from './last/last.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardComponent,
    SectionThreeComponent,
    FourSectionComponent,
    FifthSectionComponent,
    FooterComponent,
    LastComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
