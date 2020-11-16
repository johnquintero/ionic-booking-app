import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(private _authService : AuthService,
              private _router : Router,
              private _loadCtrl : LoadingController) { }

  ngOnInit() {
  }

  logIn(){
    this.isLoading=  true;
    this._authService.logIn();
    this._loadCtrl.create({
      keyboardClose: true, 
      message:"Logging in ..."
    })
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(()=> {
        this.isLoading = false;
        loadingEl.dismiss();
        this._router.navigateByUrl('/places/tabs/discover');
      }, 1500);
    })
  }

  onSwitchMode(){
    this.isLogin = !this.isLogin;
  }

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const pass = form.value.pass;

    if(this.isLogin){
      //Send a request to login servers
    } else {
      //send a request to signup servers
    }
  }

}
