import {transformationDirective, TransformationComponent} from "./transformation/index";

/*
 * Export angular functionality directives,components, services e.t.c
 * This are components that are not part of any other component within the plugin
 * and are going to be available in global scope of the app.
 */
export const pluginStructure = [
    TransformationComponent
];

/*
 * Export your available routes. Note components that are routes should be excluded from above structure e.t.c
 * Angular2 uses a component router hence this components will already be imported when defining routes
 */
export const pluginRoutes = [];

/*
 * Export menus that should be made available in admin. Note two types supported right, left, & dropdown. Dropdown
 * menu ideally appears in settings menu dropdown on top right corner. Main is append next to last menu
 * item from left to right.
 *
 * This menu items will simply be iterated over by NavbarComponent that is responsible for displaying menus
 */
export const pluginMenus = [];

export function initFramework(app) {
    app.component("transformation", transformationDirective);
    
    console.log("initFramework for OF-QAL plugin was run");
}
