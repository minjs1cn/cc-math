import { IRect } from '.';

export class Rect implements IRect {
	public constructor(
		public x: number = 0.0,
		public y: number = 0.0,
		public width = 1.0,
		public height = 1.0,
	) {}
}

export function rectArea(width: number, height: number) {
	return width * height;
}

export function rectPerimeter(width: number, height: number) {
	return width * 2 + height * 2;
}
