import { Component } from '@angular/core'
import { BasePageCheck } from '@model/appDecorators'

@Component({})
@BasePageCheck
abstract class BasePage {

	ngOnInit() {
		console.log(this.getPageName() + (Object.getPrototypeOf(this).isAdminPage() ? " is admin page" : " is not admin page"))
	}

	getPageName() {
		return Object.getPrototypeOf(this).constructor.name;
	}
}

export { BasePage }
