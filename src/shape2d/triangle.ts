import { lineLength } from './line';
import { IPoint, ITriangle } from './types';

export class Triangle {
	public constructor(public a: IPoint, public b: IPoint, public c: IPoint) {}
}

/**
 * 求三角形面积
 * @param param0
 * @returns
 */
export function triangleArea({ a, b, c }: ITriangle) {
	return ((a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x)) / 2;
}

export function trianglePerimeter({ a, b, c }: ITriangle) {
	return lineLength(a, b) + lineLength(b, c) + lineLength(c, a);
}
