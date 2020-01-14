import { FormGroup } from "@angular/forms";

export class FormUtils {
  static toFormGroup(fg: FormGroup, model: any): void {
    const formModel = fg.value;
    const tModel = {};
    for (const key in formModel) {
      tModel[key] = model[key];
    }

    fg.patchValue(tModel);
  }

  static toModel(fg: FormGroup, model: any): void {
    const formModel = fg.value;
    for (const key in formModel) {
      model[key] = formModel[key];
    }
  }
}
