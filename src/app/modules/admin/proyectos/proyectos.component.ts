import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../../services/proyecto/proyecto.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Proyecto } from '../../../models/proyecto.model';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponentAdmin implements OnInit {
  pagina = 1;
  proyecto: Proyecto = {
    nombre: '',
    descripcion: '',
    parrafo: '',
    URLMultimedia: [],
  };
  proyectoForm: FormGroup
  constructor(private serviceProyecto: ProyectoService, private fb: FormBuilder) {
    this.proyectoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      parrafo: ['', Validators.required],
      URLMultimedia: [[]],
    });
  }

  ngOnInit(): void {

    this.serviceProyecto.getProyectos().subscribe(proyectos => {
      console.log('Proyectos obtenidos:', proyectos);
    });
  }

  onFileChange(event: any) {
  const files = event.target.files;
  const base64Arr: string[] = [];

  if (files && files.length > 0) {
    (Array.from(files as File[])).forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        base64Arr.push(e.target.result);
        // Cuando todas las imágenes estén listas, actualiza el formControl
        if (base64Arr.length === files.length) {
          this.proyectoForm.patchValue({ URLMultimedia: base64Arr });
        }
      };
      reader.readAsDataURL(file);
    });
  }
}

  agregarProyecto() {
    if (this.proyectoForm?.valid) {
      const nuevoProyecto: Proyecto = {
        nombre: this.proyectoForm.value.nombre,
        descripcion: this.proyectoForm.value.descripcion,
        parrafo: this.proyectoForm.value.parrafo,
        URLMultimedia: this.proyectoForm.value.URLMultimedia,
      };
      this.serviceProyecto.addProyecto(nuevoProyecto).then(() => {
        console.log('Proyecto agregado con éxito');
        this.proyectoForm.reset();
        alert('Proyecto agregado con éxito');
      }).catch(error => {
        console.error('Error al agregar proyecto:', error);
        alert('Error al agregar proyecto: ' + error.message);
      });
    }
  }
}
