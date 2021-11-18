import { IEllipse } from './types';
import { Rect } from './rect';

export class Ellipse implements IEllipse {
	public constructor(
		public x = 0.0,
		public y = 0.0,
		public a = 2.0,
		public b = 1.0,
	) {}

	/**
	 * 包围盒
	 * @returns
	 */
	public getBoundingBox() {
		return getEllipseBoundingBox(this);
	}
}

/**
 * 面积
 * @param a
 * @param b
 * @returns
 */
export function ellipseArea(a: number, b: number) {
	return Math.PI * a * b;
}

/**
 * 周长
 * @param a
 * @param b
 * @returns
 */
export function ellipsePerimeter(a: number, b: number) {
	return (Math.PI * (a * 2) * (b * 2)) / 4;
}

export function getEllipseBoundingBox({ x, y, a, b }: IEllipse) {
	return new Rect(x - a, y - b, a * 2, b * 2);
}
