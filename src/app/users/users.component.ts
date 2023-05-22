import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import areas from '../app-assets/areas.json';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  id: string | null = null;
  users = [
    { name: 'Bob', id: 1 },
    { name: 'Linda', id: 2 },
    { name: 'Teddy', id: 3 },
  ];
  areas = areas;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}