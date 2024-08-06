import deDE from './snippet/de-DE';
import enGB from './snippet/en-GB';

/* register needed components */
Shopware.Component.register('zrm-surcharge-index', () => import('./page/zrm-surcharge-index'));

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
        'index': {
            path: 'index',
            component: 'zrm-surcharge-index'
        }
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
