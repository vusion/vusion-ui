# Vusion UI

[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/vusion-ui.vusion.svg?style=flat-square
[npm-url]: http://npmjs.org/package/vusion-ui.vusion
[david-img]: http://img.shields.io/david/vusion/vusion-ui.svg?style=flat-square
[david-url]: https://david-dm.org/vusion/vusion-ui
[download-img]: https://img.shields.io/npm/dm/vusion-ui.vusion.svg?style=flat-square
[download-url]: https://npmjs.org/package/vusion-ui.vusion

## Install
``` shell
npm install --save vusion-ui.vusion vusion-utils
```

## QuickStart

``` javascript
import Vue from 'vue';
import * as CloudUI from 'vusion-ui.vusion';
import { installComponents } from 'vusion-utils';
installComponents(CloudUI, Vue);
```

## Development

``` shell
npm install
npm install -g vusion-cli
vusion dev
```

## Build

``` shell
vusion build
```

## Publish

``` shell
vusion build
vusion ghpages
```
