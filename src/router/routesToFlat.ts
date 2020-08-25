export default function routesToFlat(routesConfig: any[]): any[] {
    const newRoutes: any[] = [];
    routesConfig.forEach((element: any) => {
        if (element.children) {
            for (const i of element.children) {
                newRoutes.push(i);
                if (i.children) {
                    for (const j of i.children) {
                        newRoutes.push(j)
                    }
                }
            }
        }
    })
    return newRoutes.concat(routesConfig)
}
