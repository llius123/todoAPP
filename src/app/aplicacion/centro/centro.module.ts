import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CentroComponent } from "./centro.component";
import { DragulaModule } from "ng2-dragula";
import { CentroService } from "./centro.service";
import { FormsModule } from '@angular/forms';
import { PrimengModule } from "src/app/primeng.module";
import { CentroModalEditarTodoComponent } from "./modal-editar-todo/modal-editar-todo.component";
@NgModule({
	declarations: [CentroComponent, CentroModalEditarTodoComponent],
	imports: [DragulaModule.forRoot(), BrowserModule, FormsModule, PrimengModule],
	exports: [CentroComponent],
	providers: [CentroService]
})
export class CentroModule {}
