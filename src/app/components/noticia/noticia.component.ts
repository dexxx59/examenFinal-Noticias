import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/service/noticia.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  lista: Noticia[] = [];
  constructor(
    private notServicio: NoticiaService,
    @Inject(DOCUMENT) document:Document
    
  ){}

  ngOnInit(): void {
    this.notServicio.getAll().subscribe((datos) => {
     /* console.log('ini',datos[0].fecha.todate());
      datos.map((a: any) =>{
        a.fecha= a.fecha.toDate(); 
        return a;});
      */
      this.lista = datos;
      console.log('conver',datos);
  });
}
async nuevoNot(){
  const { value: formValues } = await Swal.fire({
    title: 'Multiple inputs',
    html: `<label for="">Titulo</label>
    <input required id="titulo" class="form-control" placeholder="Titulo" >
    <label for="">Noticia</label>
    <input required id="noticia" class="form-control" placeholder="noticia" >
    <label for="">Fecha</label>
    <input required id="fecha" type="date" class="form-control" placeholder="fecha" >
    <label for="">Autor</label>
    <input required id="autor" class="form-control" placeholder="autor" >
    <label for="">Categoria</label>
    <input required id="categoria"class="form-control" placeholder="categoria" >
    `,
    focusConfirm: false,
    preConfirm: () => {
      //validar

      let t: Noticia = {
        titulo: (<HTMLInputElement>document.getElementById('titulo')).value,
        noticia:(<HTMLInputElement>document.getElementById('noticia')).value,
       
        fecha: new Date(
          (<HTMLInputElement>(document.getElementById('fecha')
          )).value
          ),
           autor: (<HTMLInputElement>document.getElementById('autor')).value,
        categoria: (<HTMLInputElement>document.getElementById('categoria')).value, 
      };
      return t;
    },
  });

  if (formValues) {
    this.notServicio.add(formValues);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Noticia Agregada',
      showConfirmButton: false,
      timer: 1500,
    });
  }
 }
}

