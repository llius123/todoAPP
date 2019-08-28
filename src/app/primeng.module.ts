import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarModule } from "primeng/calendar";
import { ButtonModule } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
@NgModule({
	imports: [BrowserAnimationsModule, CalendarModule, ButtonModule, DialogModule],
	exports: [BrowserAnimationsModule, CalendarModule, ButtonModule, DialogModule],
	providers: []
})
export class PrimengModule {}
