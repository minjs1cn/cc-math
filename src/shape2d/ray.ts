import { Point } from './point';

export class Ray {
	public static MAX = Infinity;

	private _end!: Point;

	public get end() {
		return this._end;
	}

	private _angle = 0.0;

	public set angle(a: number) {
		this._angle = a;

		const { MAX } = Ray;
		this._end = new Point(
			MAX * Math.cos(this._angle),
			MAX * Math.sin(this._angle),
		);
	}

	public get angle() {
		return this._angle;
	}

	public constructor(public start: Point, angle = 0.0) {
		this.angle = angle;
	}
}
