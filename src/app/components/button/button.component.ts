import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() buttonText = '';

  @Input() isDisabled = false;

  /*   @Input()
  icon: string | null = null; */
  @Input() icon = false ;
  @Input() fullWidth = false ;

  @Output() onClick = new EventEmitter<Event>();

}
