import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //Esta vez la propiedad tiene que ser pública porque la vamos a bindear en el template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
