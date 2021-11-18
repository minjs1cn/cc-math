import { Line } from '.';
import { Point } from './point';

export class Ray extends Line {
	/** 某种计算意义上的长度 */
	public static LENGTH = 100_000_000;

	private _angle = 0.0;

	/**
	 * 角度
	 */
	public set angle(a: number) {
		this._angle = a;

		const { LENGTH } = Ray;

		this.end = new Point(
			LENGTH * Math.cos(this._angle) + this.start.x,
			LENGTH * Math.sin(this._angle) + this.start.y,
		);
	}

	public get angle() {
		return this._angle;
	}

	public constructor(public start: Point) {
		super(start, new Point());
		this.angle = this._angle;
	}
}
