import path from "path";

export const routePathFromName = (name: string) =>
    path.join(__dirname, '../../mocks/routes', `${name}.js`)