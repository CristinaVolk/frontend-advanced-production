export type BuildMode = 'development' | 'production';

export type BuildEnvVar = {
	mode: BuildMode;
	port: number;
	apiURL: string;
}

export type BuildPaths = {
	entry: string;
	dist: string;
	html: string;
	src: string
}

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths,
	isDev: boolean,
	port: number,
	apiURL: string;
}
