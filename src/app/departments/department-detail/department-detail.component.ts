import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department with id={{deptId}}
    </p>
    <div (click)="goToBack()">Back</div>
    <span (click)="goToPrevious()">Previous</span> | <span (click)="goToNext()">Next</span>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public deptId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.deptId = id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.deptId = id;
    }) ;
  }
  goToPrevious() {
    let prevId = this.deptId - 1;
    // this.router.navigate(['/departments', prevId]);
    this.router.navigate(['../',prevId],{relativeTo:this.route});
  }
  goToNext() {
    let nextId = this.deptId + 1;
    // this.router.navigate(['/departments', nextId]);
    this.router.navigate(['../',nextId],{relativeTo:this.route});
  }
  goToBack() {
    // this.router.navigate(['/departments',{id: this.deptId }]);
    this.router.navigate(['../',{id: this.deptId }],{relativeTo:this.route});
  }

}
