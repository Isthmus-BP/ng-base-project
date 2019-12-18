import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-profile-chip',
  templateUrl: './profile-chip.component.html',
  styleUrls: ['./profile-chip.component.scss']
})
export class ProfileChipComponent implements OnInit {
  @Input() userName = '';
  @Output() goToProfile: EventEmitter<string>;

  constructor() {
    this.goToProfile = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onChipClick() {
    this.goToProfile.emit(this.userName);
  }
}
