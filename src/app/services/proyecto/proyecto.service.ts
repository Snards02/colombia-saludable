import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  collectionName = 'proyecto';
  constructor(private firestore: Firestore) { }


  // Agregar un nuevo proyecto
  addProyecto(proyecto: any) {
    const proyectosRef = collection(this.firestore, this.collectionName);
    return addDoc(proyectosRef, proyecto);
  }

  // Obtener todos los proyectos (en tiempo real)
  getProyectos(): Observable<any[]> {
    const proyectosRef = collection(this.firestore, this.collectionName);
    return collectionData(proyectosRef, { idField: 'id' }) as Observable<any[]>;
  }

    // Obtener un proyecto por ID
  async getProyectoById(id: string) {
    const proyectoDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    const docSnap = await getDoc(proyectoDoc);
    return docSnap.exists() ? docSnap.data() : null;
  }
}
