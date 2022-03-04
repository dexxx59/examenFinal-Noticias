import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { NoticiaComponent } from "./components/noticia/noticia.component";

const routes: Routes =[
{path:'noticia',component:NoticiaComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}