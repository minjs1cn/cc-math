import { ILine } from './types';

export class Path<T extends ILine> {
	public constructor(public paths: T[] = []) {}

	public add(line: T) {
		this.paths.push(line);
	}
}
