import { ICircle } from './types';
import { Rect } from './rect';

export class Circle implements ICircle {
	public constructor(
		public x: number = 0.0,
		public y: number = 0.0,
		public r = 1.0,
	) {}

	/**
	 * 包围盒
	 * @returns
	 */
	public getBoundingBox() {
		return getCircleBoundingBox(this);
	}
}

export function getCircleBoundingBox({ x, y, r }: ICircle) {
	return new Rect(x - r, y - r, r * 2, r * 2);
}

/**
 * 面积
 * @param r
 * @returns
 */
export function circleArea(r: number) {
	return Math.PI * r * r;
}

/**
 * 周长
 * @param r
 * @returns
 */
export function circlePerimeter(r: number) {
	return 2 * Math.PI * r;
}
