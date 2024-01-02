import { query } from '@angular/animations';
import { Injectable, inject } from '@angular/core';
import { Firestore, getDocs, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firestore: Firestore = inject(Firestore)
  session: any;

  constructor(private router: Router) {}



  async getAll(){

  const querySnapshot = await getDocs(this.getUserRef());
  let accountArray: any = [];
  
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    accountArray.push(doc.data())   
    });
  return accountArray
  }


  getUserRef(){
    return collection(this.firestore, 'accounts')
  }


  async login(nickname: string, password: string){
    let accounts = await this.getAll(); 
    let admin = accounts.find((u)=> u.nickname === nickname && u.password === password);
    if(admin){
      this.session = admin;
      localStorage.setItem('session', JSON.stringify(this.session))      
    }

    return admin
  }


  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl("/")
  }
}
