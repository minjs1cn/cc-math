import { ILine, IPoint } from './types';

export class Line implements ILine {
	/**
	 * 线段长度
	 */
	public get length() {
		return lineLength(this.start, this.end);
	}

	public constructor(public start: IPoint, public end: IPoint) {}
}

/**
 * 两点之间的距离
 * @param a
 * @param b
 * @returns
 */
export function lineLength(a: IPoint, b: IPoint) {
	return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}
