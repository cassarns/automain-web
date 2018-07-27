import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maintenance-tasks',
  templateUrl: './maintenance-tasks.component.html',
  styleUrls: ['./maintenance-tasks.component.scss']
})
export class MaintenanceTasksComponent implements OnInit {

  maintenancetasks$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMaintenanceTasks().subscribe(
      data => this.maintenancetasks$ = data
    )
  }

}
