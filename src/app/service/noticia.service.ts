import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import { Noticia } from '../models/noticia';



@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private path: string = 'Noticia';
  constructor(private db: Firestore) { }
  getAll(): Observable<any> {
    const colle = collection(this.db, this.path);
    return collectionData<Noticia>(colle);
  }
    add(noticia: Noticia){
      const ref = collection(this.db, this.path);
      return addDoc(ref, noticia);
    }
}
