import React from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";

import {routeConfig} from "app/providers/router/config/routeConfig";

export function AppRouter() {
	return (
			<Routes>
				{
					Object.values(routeConfig).map(({path, element}: RouteProps) => (
						<Route
							key={path}
							path={path}
							element={element}
						/>
					))
				}
			</Routes>
	);
}