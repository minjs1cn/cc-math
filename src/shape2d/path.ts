import { Line } from './line';

export class Path {
	public constructor(public paths: Line[] = []) {}

	public add(line: Line) {
		this.paths.push(line);
	}
}
