export type Modes = Record<string, boolean | undefined>;

export function classNames(
    className: string,
    modes: Modes | undefined = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(modes)
            .filter(([className, value]) => (value ? className : null))
            .map(([className]) => className),
    ].join(' ');
}
