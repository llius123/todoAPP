import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AplicacionComponent } from "./aplicacion/aplicacion.component";

const routes: Routes = [
	{
		path: "inicio",
		component: AplicacionComponent
	},
	{
		path: "",
		redirectTo: "/inicio",
		pathMatch: "full"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
