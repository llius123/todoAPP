import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PrimengModule } from "./primeng.module";
import { AplicacionComponent } from "./aplicacion/aplicacion.component";
import { IzquierdaModule } from "./aplicacion/todo/izquierda/izquierda.module";
import { DerechaModule } from "./aplicacion/todo/derecha/derecha.module";
import { CentroModule } from "./aplicacion/centro/centro.module";
import { ServiceModule } from "./aplicacion/services/services.module";

@NgModule({
	declarations: [AppComponent, AplicacionComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PrimengModule,
		IzquierdaModule,
		DerechaModule,
		CentroModule,
		ServiceModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
