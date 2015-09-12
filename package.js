Package.describe({
    name: 'postrednik:meteor-rangeslider',
    version: '0.1.0',
    summary: 'wrapper for Ion.RangeSlider',
    git: 'https://github.com/postrednik/meteor-rangeslider',
    documentation: 'README.md'
});

Npm.depends({
    "ion-rangeslider": "2.0.13"
});

Package.onUse(function (api) {
    api.versionsFrom('1.1');
    api.addFiles('.npm/package/node_modules/ion-rangeslider/js/ion.rangeSlider.min.js', 'client');
    api.addFiles('.npm/package/node_modules/ion-rangeslider/css/ion.rangeSlider.css', 'client');
    api.addFiles('.npm/package/node_modules/ion-rangeslider/css/ion.rangeSlider.skinFlat.css', 'client');
    api.addFiles('.npm/package/node_modules/ion-rangeslider/img/sprite-skin-flat.png', 'client', {isAsset: true});
});