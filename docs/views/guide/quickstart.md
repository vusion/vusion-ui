# 快速开始

[![NPM Version](https://img.shields.io/badge/version-0.4.x-orange.svg?style=flat-square)](http://npmjs.org/package/vusion-ui.vusion)

Vusion UI 是网易云计算前端团队在 Vusion 体系中推出的标准组件库，用于快速搭建企业级中后台项目。

### 特性

- 开箱即用、简洁高效
- 数量丰富、功能完善
- 灵活扩展

### 支持环境

- 支持 Vue.js 2.x
- 支持现代浏览器和 IE9 及以上

### 安装

使用 npm 安装组件库`vusion-ui.vusion`, 同时需要安装一个工具包`vusion-utils`。

``` shell
npm i --save vusion-ui.vusion vusion-utils
```

### 引入

#### 全部引入

``` js
import Vue from 'vue';
import * as VusionUI from 'vusion-ui.vusion';
import { install } from 'vusion-utils';

install(VusionUI, Vue); // 全局安装组件库中的组件、指令等
```

#### 按需引入

``` js
import Vue from 'vue';
import { directives, UButton, UText, UInput } from 'vusion-ui.vusion';
import { install } from 'vusion-utils';

install({ directives, UButton, UText, UInput }, Vue); // 全局安装组件库中的组件、指令等
```

> 我们没有使用 Vue 的 plugin 设计，主要是考虑 TreeShaking 机制。

### 如何贡献

- 在使用中存在问题，可以给我们[报告 Bug](https://github.com/vusion/vusion-ui/issues)
- 希望参与贡献，欢迎 [Pull Request](https://github.com/vusion/vusion-ui/pulls)
