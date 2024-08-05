// <plugin root>/src/Resources/app/administration/src/module/swag-example/index.js
import deDE from './snippet/de-DE';
import enGB from './snippet/en-GB';

Shopware.Module.register('zrm-surcharge', {
    type: 'plugin',
    name: 'Example',
    title: 'zrm-surcharge.general.mainMenuItemGeneral',
    description: 'zrm-surcharge.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        a: {component: 'b'}
    },

    navigation: [{
        id: 'zrm-extension-surcharge',
        parent: 'sw-extension',
        label: 'zrm-surcharge.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'sw.extension.store',
        icon: 'default-shopping-paper-bag-product',
        position: 100
    }]
});
