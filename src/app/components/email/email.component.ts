import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  constructor(private email:EmailService , private sank:MatSnackBar){  }

data={
  to:'',
  subject:'',
  message:''
}

  spinerFlag:boolean =  true;
  doSubmitForm(){
    console.log("try to sumit form");
    console.log("Data : ",this.data);

    if(this.data.to=='' || this.data.subject =='' || this.data.message==''){
      this.sank.open("Fields can not be empty", "OK");
      return;
    }
    this.spinerFlag = false;
    this.email.sendEmail(this.data).subscribe(
    response=>{
      console.log(response);  
      const res = response;
      this.sank.open("Email Send Successfully", "OK");
      this.spinerFlag= true;
      
    },
    error=>{
    console.log(error);
    this.sank.open("Error occured while Sending Email ","OK");
    this.spinerFlag= true;
  }
    
    )    
    
  }



}
