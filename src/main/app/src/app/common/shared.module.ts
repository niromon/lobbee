import {RatingComponent} from "./rating.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RatingComponent
    ],
    exports: [
        RatingComponent
    ]
})
export class SharedModule {}
