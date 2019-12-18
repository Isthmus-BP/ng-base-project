import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmptyComponent} from './empty/empty.component';
import {ProfileChipComponent} from './profile-chip/profile-chip.component';
import {ButtomComponent} from '@ui/shared/components/buttom/buttom.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    EmptyComponent,
    ProfileChipComponent,
    ButtomComponent
  ],
  imports: [CommonModule
    , MatButtonModule],
  exports: [
    EmptyComponent,
    ProfileChipComponent,
    ButtomComponent
  ]
})
export class ComponentsModule {
}
