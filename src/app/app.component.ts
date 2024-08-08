import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BotonDosComponent } from './components/boton-dos/boton-dos.component';
import { BotonTresComponent } from './components/boton-tres/boton-tres.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, MatButtonModule, MatExpansionModule,BotonDosComponent,BotonTresComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-storybook';
  readonly panelOpenState = signal(false);

  iconExample = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L15 8H21L16 12L18 18L12 14L6 18L8 12L3 8H9L12 2Z" fill="white"/>
</svg>
`;
}
