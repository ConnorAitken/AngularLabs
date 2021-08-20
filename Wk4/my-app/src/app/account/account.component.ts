import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router'; 

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
    email="JohnDoe@gmail.com";
    upwd="Password"
    // paramsub;
    constructor( private route:ActivatedRoute, private router:Router ) { }

    ngOnInit() {
        if (this.route.snapshot.params.email) {
            this.email = this.route.snapshot.params.email;
        }
        if (this.route.snapshot.params.upwd) {
            this.upwd = this.route.snapshot.params.upwd;
        }
        // this.paramsub = this.route.paramMap.subscribe(params => {
        //     this.email = params.get('email');
        //     this.upwd = params.get('upwd');
        // });
    }

    return() {
        this.router.navigateByUrl('/login');
    }

    // unsub() {
    //     this.paramsub.unsubscribe();
    // }

    // ngOnDestroy() {
    //     if(this.paramsub) {
    //         this.paramsub.unsubscribe();
    //     }
    // }


}