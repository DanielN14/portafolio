import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/pages/about/about.component';
import { BlogPostComponent } from './components/pages/blog-post/blog-post.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { ProductItemComponent } from './components/pages/product-item/product-item.component';

const appRoutes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'productItem', component: ProductItemComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-post', component: BlogPostComponent },
    { path: 'contact', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' } // Cuando la direccion no sea ninguna de las anteriores
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
