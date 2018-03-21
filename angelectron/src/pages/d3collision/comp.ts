import { BasePage } from '@pages/BasePage';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var require: any;
var d3 = require("d3");

@Component({
	selector: 'dthree-collision-page',
	templateUrl: 'page.html',
	styleUrls: ['./style.css']
})
export class DThreeCollisionPage extends BasePage {

	ngOnInit(){

		var width = window.innerWidth
		var height = window.innerHeight

		var nodes = d3.range(200).map(function() { return {r: Math.random() * 12 + 4}; }),
			root = nodes[0];

		var color = d3.scaleOrdinal().range(d3.schemeCategory20)

		root.radius = 0;
		root.fixed = true;

		const forceX = d3.forceX(width / 2).strength(0.015)
		const forceY = d3.forceY(height / 2).strength(0.015)

		var force = d3.forceSimulation()
			.velocityDecay(0.2)
			.force("x", forceX)
			.force("y", forceY)
			.force("collide",
				d3.forceCollide().radius(
					function(d){
						if(d === root){
							return Math.random() * 50 + 100;
						}
						return d.r + 0.5;
					}
				).iterations(5)
			)
			.nodes(nodes).on("tick", ticked);

		var svg = d3.select("svg")
			.attr("width", width)
			.attr("height", height);

		svg.selectAll("circle")
			.data(nodes.slice(1))
			.enter().append("circle")
			.attr("r", function(d) { return d.r; })
			.style("fill", function(d, i) { return color(i % 3); });

		function ticked(e) {
			svg.selectAll("circle")
				.attr("cx", function(d) { return d.x; })
				.attr("cy", function(d) { return d.y; });
		};

		svg.on("mousemove", function() {
			var p1 = d3.mouse(this);
			root.fx = p1[0];
			root.fy = p1[1];
			force.alphaTarget(0.3).restart();//reheat the simulation
		});
	}
}
