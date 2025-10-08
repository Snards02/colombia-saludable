import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',

    styleUrls: ['./signup.component.css'],
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule ]

})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus: any;
    focus1: any;
    email = '';
    password = '';
    error = '';
    
    constructor(private authService: AuthService, private router:Router) { }
    
    ngOnInit() {
        
    }
    onloggen() {
        try {
            this.authService.login(this.email, this.password).then( () => {
                this.router.navigate (['landing']);
            }).catch( error => {
                this.error = error;
                console.log('Error en login', error);
                alert('Error en inicio de sesión: ' + error.message);
            });
            // Redirige o muestra mensaje de éxito
            
        } catch (err: any) {
            this.error = err.message;
        }
    }
}
