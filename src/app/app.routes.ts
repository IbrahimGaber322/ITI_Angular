import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodoComponent } from './todo/todo.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    { path: 'portfolio', component: PortfolioComponent },
    { path: '',   redirectTo: '/portfolio', pathMatch: 'full' },
    { path: 'users', component: UsersComponent },
    { path: 'todo', component: TodoComponent    }
];
