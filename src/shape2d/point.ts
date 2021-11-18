import { IPoint } from './types';

export class Point implements IPoint {
	public constructor(public x: number = 0.0, public y: number = 0.0) {}
}
