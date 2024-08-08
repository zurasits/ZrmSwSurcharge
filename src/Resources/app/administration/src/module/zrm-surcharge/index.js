import deDE from './snippet/de-DE';
import enGB from './snippet/en-GB';

/* register needed components */
Shopware.Component.register('zrm-surcharge-index', () => import('./page/zrm-surcharge-index'));
Shopware.Component.register('zrm-surcharge-detail', () => import('./page/zrm-surcharge-detail'));
Shopware.Component.extend('zrm-surcharge-create', 'zrm-surcharge-detail', () => import('./page/zrm-surcharge-create'));

/**
 *
 */
Shopware.Module.register('zrm-surcharge', {
    type: 'plugin',
    name: 'ZrmSurcharge',
    title: 'zrm-surcharge.general.mainMenuItemGeneral',
    description: 'zrm-surcharge.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'regular-plug',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        index: {
            path: 'index',
            component: 'zrm-surcharge-index'
        },
        create: {
            path: 'create',
            component: 'zrm-surcharge-create',
            meta: {
                parentPath: 'zrm.surcharge.index'
            },
        },
        'detail': {
            path: 'detail/:id',
            component: 'zrm-surcharge-detail',
            meta: {
                parentPath: 'zrm.surcharge.index'
            },
        },
    },

    navigation: [{
        id: 'zrm-surcharge',
        parent: 'sw-extension',
        label: 'zrm-surcharge.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'zrm.surcharge.index',
        icon: 'default-shopping-paper-bag-product',
        position: 100
    }]
});
