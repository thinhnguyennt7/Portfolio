import { HeaderComponent } from "./header/header.component";
import { provideRouter } from "@angular/router";

const APP_ROUTES = [
	{ path: 'header', component: HeaderComponent }
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES);
];