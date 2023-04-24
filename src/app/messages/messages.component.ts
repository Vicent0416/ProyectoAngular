import { Component, OnInit } from '@angular/core';

import { MessageService } from '../messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent  implements OnInit{
  constructor(public messageService: MessageService) {}// publico en el constructor se puede acceder a ella desde el modelo de vista

  ngOnInit() {

  }
}
