type Modes = Record<string, string | boolean>;

export function classNames(cls: string, modes: Modes, additional: string[]): string {
	return [
		cls,
	    ...additional,
	    ...Object.entries(modes)
			.filter(([className, value]) => value ? className : null)
			.map(([className]) => className)
		].join(' ');
}