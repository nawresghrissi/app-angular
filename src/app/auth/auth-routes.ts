import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistreComponent } from "./registre/registre.component";

export default [
	// {
	// 	path: 'login',
	// 	component: LoginComponent,
	// },
	// {
	// 	path: 'registre',
	// 	component: RegistreComponent,
	// },
	{ path: '**', redirectTo: 'login' },
] satisfies Routes;
