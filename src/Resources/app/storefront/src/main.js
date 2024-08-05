// Import all necessary Storefront plugins
import ZrmSurcharge from './zrm-surcharge/zrm-surcharge.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;

PluginManager.register('ZrmSurcharge', ZrmSurcharge, '[data-example-plugin]');
