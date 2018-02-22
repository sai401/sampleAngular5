import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  deptId:number;
  constructor(private router:Router,private route:ActivatedRoute) { }
  departments=[
    {id:1,name:'angular'},
    {id:2,name:'Node'},
    {id:3,name:'MongoDB'},
    {id:4,name:'Ruby'}
  ]
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.deptId = id;
    });
  }
  onSelect(id)
  {
    // this.router.navigate(['/departments',id]);
    this.router.navigate([id],{relativeTo:this.route});
  }
  isSelected(department){
    return department.id===this.deptId;
  }

}
