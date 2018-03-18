
export function BasePageCheck(constructor: Function) {
	constructor.prototype.isAdminPage = () => false
}

export function AdminPage(constructor: Function) {
	constructor.prototype.isAdminPage = () => true
}
