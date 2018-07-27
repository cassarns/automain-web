import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private route: ActivatedRoute, private dataService: DataService ) {
    this.route.params.subscribe()
  }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      odometerReading: ['', Validators.required],
      type: ['', Validators.required]
    });

  }

  // onSubmit() {
  //   this.dataService.createCar(this.addForm.value)
  //     .subscribe( data => {
  //       this.router.navigate(['cars']);
  //     });
  // }

}
