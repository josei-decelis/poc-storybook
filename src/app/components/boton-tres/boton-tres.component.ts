import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SafeHtmlPipe } from '../../utils/safe-html.pipe';

@Component({
  selector: 'app-boton-tres',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe,HttpClientModule],
  templateUrl: './boton-tres.component.html',
  styleUrls: ['./boton-tres.component.scss']
})
export class BotonTresComponent {
  @Input() buttonText?: string = '';
  @Input() iconUrl?: string = '';
  @Input() isDisabled: boolean = false;
  @Input() width: number = 0;

  @Output() event = new EventEmitter<Event>();

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  public onClick(e: Event): void {
    if (!this.isDisabled) {
      this.event.emit(e);
    }
  }

  get buttonWidth(): string {
    return this.width === 0 ? 'auto' : `${this.width}px`;
  }

  get shouldDisplayButton(): boolean {
    return !!this.buttonText || !!this.iconUrl;
  }

  get icon(): SafeHtml | undefined {
    if (this.iconUrl) {
      this.http.get(this.iconUrl, { responseType: 'text' }).subscribe(svg => {
        return this.sanitizer.bypassSecurityTrustHtml(svg);
      });
    }
    return undefined;
  }
}
