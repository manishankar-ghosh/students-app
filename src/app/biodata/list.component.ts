import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public lst: Student[]=[
    {id:1, name: 'Ram', dob: '01 Jan 2020'},
    {id:2, name: 'Ajay', dob: '02 Feb 2021'}
  ];
  constructor(private apiService: ApiserviceService) { 
  }

  async ngOnInit(): Promise<void> {
    this.lst = await this.getList();
  }

  async getList(): Promise<Student[]>{
    let data: Student[] = [];
    try{
      let response = await firstValueFrom(this.apiService.get('Students'));
      data = <Student[]>response;
    }
    catch(error){
      console.error('Error fetching data:', error);
    }

    return data;
  }

}
