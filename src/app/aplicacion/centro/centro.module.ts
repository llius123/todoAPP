import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CentroComponent } from "./centro.component";
import { DragulaModule } from "ng2-dragula";
import { CentroService } from "./centro.service";
import { FormsModule } from '@angular/forms';
@NgModule({
	declarations: [CentroComponent],
	imports: [DragulaModule.forRoot(), BrowserModule, FormsModule],
	exports: [CentroComponent],
	providers: [CentroService]
})
export class CentroModule {}
