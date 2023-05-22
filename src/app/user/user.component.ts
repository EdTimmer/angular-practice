import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import areas from '../app-assets/areas.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private route: ActivatedRoute) { }
  id = this.route.snapshot.paramMap.get('id');
  getName() {
    return areas.find(area => area.id === Number(this.id))?.name;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']; // 'id' should match the parameter name defined in your routing configuration
      console.log(id); // You can do further processing with the ID here
    });
  }

}
