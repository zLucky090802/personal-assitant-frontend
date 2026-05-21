import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  text = input<string>('Click here'); 
  
  // Emite el evento de clic hacia el padre
  btnClick = output<void>(); 

  onClick() {
    this.btnClick.emit();
  }
}
