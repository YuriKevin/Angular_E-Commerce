import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecaoComponent } from './secao/secao.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SecaoComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SecaoComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule { }
