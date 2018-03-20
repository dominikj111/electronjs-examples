import { BasePage } from '@pages/BasePage';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var require: any;
let p5 = require("p5");

@Component({
	selector: 'page-threed-graphics',
	styleUrls: ['style.css'],
	templateUrl: 'page.html'
})
export class ThreeDGraphicPage extends BasePage {

	@ViewChild('myId') myId: ElementRef;

	ngOnInit(){

		let p = new p5((p) => {

			let canvas;

			p.preload = () => { };

			p.setup = () => {
				canvas = p.createCanvas(600, 400, p.WEBGL);
				this.myId.nativeElement.append(canvas.elt);
			};

			p.draw = () => {

				p.background(250);

				p.translate(-240, -100, 0);
				p.normalMaterial();
				p.push();
				p.rotateZ(p.frameCount * 0.01);
				p.rotateX(p.frameCount * 0.01);
				p.rotateY(p.frameCount * 0.01);
				p.plane(70);
				p.pop();

				p.translate(240, 0, 0);
				p.push();
				p.rotateZ(p.frameCount * 0.01);
				p.rotateX(p.frameCount * 0.01);
				p.rotateY(p.frameCount * 0.01);
				p.box(70, 70, 70);
				p.pop();

				p.translate(240, 0, 0);
				p.push();
				p.rotateZ(p.frameCount * 0.01);
				p.rotateX(p.frameCount * 0.01);
				p.rotateY(p.frameCount * 0.01);
				p.cylinder(70, 70);
				p.pop();

				p.translate(-240 * 2, 200, 0);
				p.push();
				p.rotateZ(p.frameCount * 0.01);
				p.rotateX(p.frameCount * 0.01);
				p.rotateY(p.frameCount * 0.01);
				p.cone(70, 70);
				p.pop();

				p.translate(240, 0, 0);
				p.push();
				p.rotateZ(p.frameCount * 0.01);
				p.rotateX(p.frameCount * 0.01);
				p.rotateY(p.frameCount * 0.01);
				p.torus(70, 20);
				p.pop();

				p.translate(240, 0, 0);
				p.push();
				p.rotateZ(p.frameCount * 0.01);
				p.rotateX(p.frameCount * 0.01);
				p.rotateY(p.frameCount * 0.01);
				p.sphere(70);
				p.pop();
			};
		});
	}
}
