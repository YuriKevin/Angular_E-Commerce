import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        FeedbackComponent,
        NotFoundComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        FeedbackComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        FormsModule
    ]
})
export class SharedModule { }