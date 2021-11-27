import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { navigationSidebar, NavItem } from './shared/interface/nav-item';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {

  title = 'angular-documentation';

  @ViewChild('appDrawer') appDrawer!: ElementRef;

  navItems: NavItem[] = navigationSidebar

  constructor(private nav: NavigationService) {
  }

  ngAfterViewInit() {
    this.nav.appDrawer = this.appDrawer;
  }
}
