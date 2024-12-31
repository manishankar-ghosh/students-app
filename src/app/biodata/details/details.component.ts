import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Student } from 'src/app/models/student';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  msg!: string ;
  data!: Student;
  constructor(private route: ActivatedRoute,
    private apiService: ApiserviceService
  ) { 
    
  }

  async ngOnInit(): Promise<void> {
    //console.log( this.route.snapshot.params['id']);

    this.route.params.subscribe(async params => {
      let id = params['id'];
      this.data = await firstValueFrom(this.apiService.get(`Students/${id}`));
      this.msg = "";
    });
  }

  async update(): Promise<void>{
    let answer = confirm("Are you sure?");
    if(answer){
      try{
        await firstValueFrom(this.apiService.put(`Students/${this.data?.id}`, this.data));
        this.msg = " Saved";
      }
      catch(error){
        console.error("Error while updating data:", error);
      }

    }
  }
}
