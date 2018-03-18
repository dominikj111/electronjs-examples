import { BasePage } from '@pages/BasePage';
import { AdminPage } from '@model/appDecorators';
import { Component } from '@angular/core';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
@AdminPage
export class AboutPage extends BasePage {

}