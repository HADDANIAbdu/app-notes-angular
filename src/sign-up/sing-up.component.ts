import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLock} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
    selector:'sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    imports: [FontAwesomeModule],
})
export class SignUpComponent {
    icon2=faUser;
    icon3=faEnvelope;
    icon4=faLock;
    constructor(private router: Router){}
    login(){
        this.router.navigate(['/log-in']);
    }
}