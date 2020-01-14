import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ILogin } from "@app/domain";
import { FormUtils } from "@app/ui/_util";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  mainForm = this.fb.group({
    user: [
      "",
      Validators.compose([Validators.required, Validators.maxLength(80)])
    ],
    password: [
      "",
      Validators.compose([Validators.required, Validators.maxLength(80)])
    ]
  });

  private _model: ILogin = <ILogin>{};
  public set model(value: ILogin) {
    this._model = value;
    FormUtils.toFormGroup(this.mainForm, value);
  }
  public get model(): ILogin {
    return this._model;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  hasError(controlName: string, errorName: string) {
    return this.mainForm.get(controlName).hasError(errorName);
  }

  onSubmit(): void {
    if (this.mainForm.valid) {
      FormUtils.toModel(this.mainForm, this.model);
      console.log("this.model", this.model);
    }
  }
}
