import { Component, Inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLock} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { user } from '../users-list/User.model';
import { users } from '../users-list/mock-users';
import { Router } from '@angular/router';

@Component({
    selector: 'log-in',
    standalone: true,
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css'],
    imports : [FontAwesomeModule, ReactiveFormsModule],
})
export class LogInComponent {
    icon1 = faEnvelope;
    icon2 = faLock;
    isModaltrue1 : boolean = false;
    isModaltrue2 : boolean = false;
    constructor(@Inject(Router) private router:Router){}
    user : user = {
        email:'',
        password:'',
    }
    LogInForm = new FormGroup({
        email : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required),
    })
    login(){
        let email = this.LogInForm.value.email;
        let password = this.LogInForm.value.password;
        this.user = users.find((user) => user.email === email) as user;
        if(this.user != undefined){
            if(this.user.password === password) this.router.navigate(['/home']);
            else this.isModaltrue2 = true;
        }
        else{
            this.isModaltrue1 = true;
        }
    }
    signup(){
        this.router.navigate(['/sign-up']);
    }
    Cancel(){
        this.isModaltrue1 = false;
    }
    Retry(){
        this.isModaltrue2 = false;
    }
}
