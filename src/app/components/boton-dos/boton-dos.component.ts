import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafeHtmlPipe } from '../../utils/safe-html.pipe';

@Component({
  selector: 'app-boton-dos',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './boton-dos.component.html',
  styleUrl: './boton-dos.component.scss'
})
export class BotonDosComponent {

  @Input() buttonText?: string = '';
  @Input() icon?: string = '';
  @Input() isDisabled: boolean = false;
  @Input() width: number = 0;

  @Output() event = new EventEmitter<any>();

  constructor(private sanitizer: DomSanitizer) {}

  public onClick(e: Event): void {
    if (!this.isDisabled) {
      this.event.emit(e);
    }
  }

  getIconUrl(): SafeResourceUrl | undefined {
    if (this.icon) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.icon);
    }
    return undefined;
  }

  get buttonWidth(): string {
    return this.width === 0 ? 'auto' : `${this.width}px`;
  }
  get shouldDisplayButton(): boolean {
    return !!this.buttonText || !!this.icon;
  }
}
