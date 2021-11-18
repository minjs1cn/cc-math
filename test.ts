import { Point, Line, intersect, Ray, Circle, Rect } from './src/main';

const ca = document.createElement('canvas') as HTMLCanvasElement;
ca.width = window.innerWidth;
ca.height = window.innerHeight;

document.body.appendChild(ca);

const ctx = ca.getContext('2d') as CanvasRenderingContext2D;

const circle = new Circle(100, 100, 30);

const circleBoundingBox = circle.getBoundingBox();
ctx.beginPath();
ctx.rect(
	circleBoundingBox.x,
	circleBoundingBox.y,
	circleBoundingBox.width,
	circleBoundingBox.height,
);
ctx.stroke();

ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
ctx.stroke();

ca.addEventListener('click', e => {
	if (ctx.isPointInPath(e.pageX, e.pageY)) {
		console.log('in');
	}
});

const line1 = new Line(new Point(0, 0), new Point(4, 0));

const line2 = new Ray(new Point(3, -1));
line2.angle = Math.PI / 2;

console.log(line2);

console.log(intersect(line1, line2));
