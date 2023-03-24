import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { APIService, Flight } from '../../API.service'
@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent {
  constructor(private api: APIService) { }
  FlighDetail = new FormGroup({
    passengerName: new FormControl('', Validators.required),
    Tickets: new FormControl(0, Validators.required),
    flightId: new FormControl('', Validators.required),
  })

  passengerName: string = ''
  NoOfTicket: number = 0


  BookTickets() {
    if (this.FlighDetail.valid) {
      this.api
        .CreateTicket({ id: this.FlighDetail.value.flightId, passengerName: this.passengerName, noOfTicket: this.NoOfTicket, flightTicketId: this.FlighDetail.value.flightId, bookingid: 'fajf' })
        .then(event => {
          console.log(event)
        })
        .catch(err => {
          console.log("Error Message:", err)
        })
    }
  }



}
