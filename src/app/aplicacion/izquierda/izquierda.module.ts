import { NgModule } from "@angular/core";
import { IzquierdaComponent } from "./izquierda.component";
import { ArribaComponent } from "./arriba/arriba.component";
import { AbajoComponent } from "./abajo/abajo.component";
import { PrimengModule } from "src/app/primeng.module";
import { CalendarioService } from "../services/calendario.service";
import { FilaComponent } from "./abajo/fila/fila.component";
import { ArribaService } from "./arriba/arriba.service";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
	declarations: [IzquierdaComponent, ArribaComponent, AbajoComponent, FilaComponent],
	imports: [PrimengModule, HttpClientModule],
	exports: [IzquierdaComponent],
	providers: [CalendarioService, ArribaService]
})
export class IzquierdaModule {}
