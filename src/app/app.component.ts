import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent,MatButtonModule,MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-storybook';
  readonly panelOpenState = signal(false);
}
