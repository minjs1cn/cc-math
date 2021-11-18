import { Point } from '.';
import { triangleArea } from './triangle';
import { ILine } from './types';

/**
 * 求线段交点
 * @param line1
 * @param line2
 * @returns
 */
export function intersect(line1: ILine, line2: ILine) {
	const { start: a, end: b } = line1;
	const { start: c, end: d } = line2;

	const tri_abc = {
		a,
		b,
		c,
	};

	const tri_abd = {
		a,
		b,
		c: d,
	};

	const area_abc = triangleArea(tri_abc);
	const area_abd = triangleArea(tri_abd);

	if (area_abc * area_abd >= 0) return false;

	const tri_cda = {
		a: c,
		b: d,
		c: a,
	};

	const tri_cdb = {
		a: c,
		b: d,
		c: b,
	};

	const area_cda = triangleArea(tri_cda);
	const area_cdb = triangleArea(tri_cdb);

	if (area_cda * area_cdb >= 0) return false;

	//计算交点坐标
	const t = area_cda / (area_abd - area_abc);
	const dx = t * (b.x - a.x),
		dy = t * (b.y - a.y);

	return new Point(a.x + dx, a.y + dy);
}
