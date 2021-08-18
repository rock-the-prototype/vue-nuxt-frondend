import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
    const options = routerOptions || createDefaultRouter(ssrContext).options;
    const hostname = ssrContext ? ssrContext.req.headers.host : location.hosts;
    const prefix = ssrContext ? ssrContext.url : location.pathname;
    return new Router({
        ...options,
        routes: fixRoutes(options.routes, hostname, prefix),
    });
}

function fixRoutes(defaultRoutes, hostname, prefix) {
    if (hostname.includes('design')) return designRoutes(defaultRoutes, prefix);
    if (hostname.includes('development')) return developmentRoutes(defaultRoutes, prefix);
    return mvpRoutes(defaultRoutes);
}

function mvpRoutes(defaultRoutes) {
    return defaultRoutes.filter(r => r.name !== 'design' && 'development');
}

function designRoutes(defaultRoutes, prefix) {
    const namespace = 'design'
    return subdomainRoutes(defaultRoutes, namespace, prefix)

}

function developmentRoutes(defaultRoutes, prefix) {
    const namespace = 'development'
    return subdomainRoutes(defaultRoutes, namespace, prefix)

}

function subdomainRoutes(defaultRoutes, namespace, prefix) {
    const routes = defaultRoutes.filter(r => r.name.includes(namespace));
    if (prefix.length > 1) {
        const route = routes.find(r => r.path === '/' + namespace + prefix);
        route.path = prefix
        return [route];
    } else {
        const route = routes.find(r => r.path === '/' + namespace);
        route.path = prefix
        return [route];
    }
}