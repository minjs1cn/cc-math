export interface IPoint {
	x: number;
	y: number;
}

export interface ILine {
	start: IPoint;
	end: IPoint;
}

export interface ITriangle {
	a: IPoint;
	b: IPoint;
	c: IPoint;
}

export interface IRect {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface ICircle {
	x: number;
	y: number;
	r: number;
}

export interface IEllipse {
	x: number;
	y: number;
	a: number;
	b: number;
}
