import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mobileQuery: MediaQueryList;

  fillerNav = [
    { link: "home", label: "Home"},
    { link: "lsys", label: "L-System"},
    { link: "threed", label: "Three D"},
    { link: "flocking", label: "Flocking"},
    { link: "jqwdashb", label: "JQW Dashboard"},
    { link: "jqwkanban", label: "JQW Kanban"}
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
