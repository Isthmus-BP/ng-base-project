import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmptyComponent} from './empty/empty.component';
import {ProfileChipComponent} from './profile-chip/profile-chip.component';

@NgModule({
  declarations: [
    EmptyComponent,
    ProfileChipComponent
  ],
  imports: [CommonModule],
  exports: [
    EmptyComponent,
    ProfileChipComponent
  ]
})
export class ComponentsModule {
}
