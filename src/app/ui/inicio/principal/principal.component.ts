import { Component, OnInit } from "@angular/core";
import {MatDialog, MatDialogRef} from '@angular/material';
import {TimePickerComponent} from '@ui/shared/time-picker/time-picker.component';

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.scss"]
})
export class PrincipalComponent implements OnInit {
  show: boolean = false;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 2000);
  }

  openTimePicker() {
    this.dialog.open(TimePickerComponent);
  }
}
