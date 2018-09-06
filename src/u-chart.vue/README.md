# 图表基类 Chart

<u-label>展示型</u-label>&nbsp;<u-label>图表类</u-label>&nbsp;<u-label>抽象组件</u-label>&nbsp;<u-label>默认块级</u-label>

用于扩展出各种图表的基类，规范基本的框架和接口。

## 示例
### 基本形式

``` html
<u-chart title="图表" :data="[1]"></u-chart>
```

### 边框

``` html
<u-chart title="图表" border :data="[1]"></u-chart>
```

### 标题与描述
``` html
<u-chart title="图表标题" caption="近7日工作量" :data="[1]"></u-chart>
```

### 图例

``` html
<u-chart title="图例" legend :data="[1]" :series="[
    { name: '阅读数', field: 'readings' },
    { name: '点赞数', field: 'stars' },
    { name: '收藏数', field: 'favors' },
]"></u-chart>
```

#### 修改颜色

``` html
<u-chart title="图例" legend :data="[1]" :series="[
    { name: '请求成功数', field: 'success', color: 'success' },
    { name: '请求失败数', field: 'failed', color: 'error' },
    { name: '线程超时次数', field: 'timeout', color: '#5b9cff' },
    { name: '线程拒绝次数', field: 'refused', color: 'warning' },
]"></u-chart>
```

### 数据状态

#### 加载中
``` html
<u-chart title="图例" border legend :series="[
    { name: '阅读数', field: 'readings' },
    { name: '点赞数', field: 'stars' },
    { name: '收藏数', field: 'favors' },
]"></u-chart>
```

#### 加载失败
``` html
<u-chart title="图例" border legend :data="null" :series="[
    { name: '阅读数', field: 'readings' },
    { name: '点赞数', field: 'stars' },
    { name: '收藏数', field: 'favors' },
]"></u-chart>
```

#### 空态
``` html
<u-chart title="图例" legend :data="[]" :series="[
    { name: '阅读数', field: 'readings' },
    { name: '点赞数', field: 'stars' },
    { name: '收藏数', field: 'favors' },
]"></u-chart>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <u-chart title="图表" caption="近7日工作量" border legend size="small" :data="[1]" :series="[
        { name: '阅读数', field: 'readings' },
        { name: '点赞数', field: 'stars' },
        { name: '收藏数', field: 'favors' },
    ]"></u-chart>
    <u-chart title="图表" caption="近7日工作量" border legend size="normal" :data="[1]" :series="[
        { name: '阅读数', field: 'readings' },
        { name: '点赞数', field: 'stars' },
        { name: '收藏数', field: 'favors' },
    ]"></u-chart>
    <u-chart title="图表" caption="近7日工作量" border legend size="large" :data="[1]" :series="[
        { name: '阅读数', field: 'readings' },
        { name: '点赞数', field: 'stars' },
        { name: '收藏数', field: 'favors' },
    ]"></u-chart>
</u-linear-layout>
```

## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 图表的标题 |
| caption | String |  | 图表的描述 |
| series | Array |  | 图例信息 |
| data | Array |  | 需要显示的数据 |
| border | Boolean | `false` | 是否有边框 |
| legend | Boolean | `false` | 是否显示图例 |
| loading | Boolean | `false` | 是否正在加载 |
