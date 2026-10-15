import { Component, input, InputSignal, output, OutputEmitterRef, Signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-confirm',
  styleUrl: './confirm.scss',
  templateUrl: './confirm.html',
})
export class Confirm {

  productName: InputSignal<string> = input.required<string>();
  confirm: OutputEmitterRef<boolean> = output<boolean>();
}
