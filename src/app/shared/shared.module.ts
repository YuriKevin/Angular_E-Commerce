import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecaoComponent } from './secao/secao.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SecaoComponent,
        FeedbackComponent,
        NotFoundComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SecaoComponent,
        FeedbackComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule { }