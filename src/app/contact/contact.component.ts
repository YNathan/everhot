import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  messages: Message[] = [];
  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private httpPost: HttpClient, private globals: Globals) {
    this.createForm();
  }

  ngOnInit() {
  }

  contact(params) {
    return this.httpPost.post('https://us-central1-everhotbucket-e4287.cloudfunctions.net/contact', params).subscribe(function (data) {
      return data;
    });
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    const {name, email, message} = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = {name, email, message, date, html};
    this.contact(formRequest);
    this.db.list('/messages').push({ formRequest });
    this.form.reset();
  }

}
interface Message {
  name: string;
  email: string;
  date: string;
  html: string;
}
