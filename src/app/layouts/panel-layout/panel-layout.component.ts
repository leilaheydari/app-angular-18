import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';

@Component({
  selector: 'app-panel-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  templateUrl: './panel-layout.component.html',
  styleUrl: './panel-layout.component.scss'
})
export class PanelLayoutComponent {

}
