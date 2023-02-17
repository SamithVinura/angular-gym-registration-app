import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public userDetails!:User
  public userId!:number
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.userId = val['id']
      this.fetchUserDetails(this.userId)
    })
  }

  fetchUserDetails(userId:number){
    this.api.getRegisterUserId(userId).subscribe(res=>{
      this.userDetails = res
    })
  }

}
