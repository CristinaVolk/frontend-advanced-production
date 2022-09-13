import webpack from "webpack";


type buildResolversType = () => webpack.ResolveOptions;

export const buildResolvers: buildResolversType = () =>{
	return {
		extensions: ['.tsx', '.ts', '.js']
	};
}
