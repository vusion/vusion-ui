### 包含0的情况

``` html
<u-pie-chart legend :data="[
    { name: '请求成功数', value: 0, color: 'success' },
    { name: '请求失败数', value: 2, color: 'error' },
    { name: '线程拒绝次数', value: 0, color: 'info' },
]"></u-pie-chart>
```

### 包含 undefined 的情况

``` html
<u-pie-chart legend :data="[
    { name: '请求成功数', value: 4, color: 'success' },
    { name: '请求失败数', value: 2, color: 'error' },
    { name: '线程拒绝次数', value: undefined, color: 'info' },
]"></u-pie-chart>
```
