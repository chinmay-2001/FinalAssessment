import { Component, OnInit } from '@angular/core';
import { APIService, Ticket } from 'src/app/API.service';
@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})

export class ViewDetailComponent implements OnInit {
  Tickets: Ticket[] = []

  constructor(private api: APIService) {
    this.api.OnCreateTicketListener()
      .subscribe(event => {
        console.log(event)
      })
  }

  ngOnInit(): void {
    this.api
      .ListTickets()
      .then(event => {
        this.Tickets = event.items as Ticket[]
      })


  }





}
