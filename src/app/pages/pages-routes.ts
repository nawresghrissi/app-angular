import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageComponent } from "./page.component";
import { RegistreComponent } from "../auth/registre/registre.component";
import { StagiaireComponent } from "./stagiaire/stagiaire.component";

export default [
	{
		path: '',
		component: PageComponent,
        children: [
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'stagiaire',
				component: StagiaireComponent,
			},
			{ path: '**', redirectTo: 'home', pathMatch: 'full' },
			
		],
	},
] satisfies Routes;