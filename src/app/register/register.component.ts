import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      supportTable: ['', Validators.required]
    });
  }

  send() {
    console.log(this.registerForm);
    console.log(this.registerForm.get('userName').value);
    console.log(this.registerForm.get('supportTable').value);
  }

}
