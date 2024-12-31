import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id =1;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log( this.route.snapshot.params['id']);

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }

}
