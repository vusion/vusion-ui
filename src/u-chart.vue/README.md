# 图表基类 Chart

## 示例
### 基本形式

``` html
<u-chart title="图表" :data="[1]"></u-chart>
```

### 边框

``` html
<u-chart title="图表" border :data="[1]"></u-chart>
```

### 描述
``` html
<u-chart title="图表" caption="近7日工作量" :data="[1]"></u-chart>
```

### 图例

``` html
<u-chart title="图例" legend :data="[1]" :series="[
    { name: '阅读数', field: 'readings' },
    { name: '点赞数', field: 'stars' },
    { name: '收藏数', field: 'favors' },
]"></u-chart>
```

``` html
<u-chart title="较多的图例" legend :data="[1]" :series="[
    { name: '阅读数', field: 'readings' },
    { name: '点赞数', field: 'stars' },
    { name: '收藏数', field: 'favors' },
    { name: '阅读数', field: 'readings2' },
    { name: '点赞数', field: 'stars2' },
    { name: '收藏数', field: 'favors2' },
    { name: '阅读数', field: 'readings3' },
    { name: '点赞数', field: 'stars3' },
    { name: '收藏数', field: 'favors3' },
    { name: '阅读数', field: 'readings4' },
    { name: '点赞数', field: 'stars4' },
    { name: '收藏数', field: 'favors4' },
    { name: '阅读数', field: 'readings5' },
    { name: '点赞数', field: 'stars5' },
    { name: '收藏数', field: 'favors5' },
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
