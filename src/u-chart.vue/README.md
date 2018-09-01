# 图表基类 Chart

## 示例
### 基本形式

``` html
<u-chart title="图表"></u-chart>
```

### 边框

``` html
<u-chart title="图表" border></u-chart>
```

### 描述
``` html
<u-chart title="图表" caption="近7日工作量"></u-chart>
```

### 图例

``` html
<u-chart title="图表" border :series="[
    { field: 'readings', title: '阅读数' },
    { field: 'stars', title: '点赞数' },
    { field: 'favors', title: '收藏数' },
]"></u-chart>
```

``` html
<u-chart title="较多的图表" border :series="[
    { field: 'readings', title: '阅读数' },
    { field: 'stars', title: '点赞数' },
    { field: 'favors', title: '收藏数' },
    { field: 'readings', title: '阅读数' },
    { field: 'stars', title: '点赞数' },
    { field: 'favors', title: '收藏数' },
    { field: 'readings', title: '阅读数' },
    { field: 'stars', title: '点赞数' },
    { field: 'favors', title: '收藏数' },
    { field: 'readings', title: '阅读数' },
    { field: 'stars', title: '点赞数' },
    { field: 'favors', title: '收藏数' },
    { field: 'readings', title: '阅读数' },
    { field: 'stars', title: '点赞数' },
    { field: 'favors', title: '收藏数' },
]"></u-chart>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <u-chart title="图表" caption="近7日工作量" border size="small" :series="[
        { field: 'readings', title: '阅读数' },
        { field: 'stars', title: '点赞数' },
        { field: 'favors', title: '收藏数' },
    ]"></u-chart>
    <u-chart title="图表" caption="近7日工作量" border size="normal" :series="[
        { field: 'readings', title: '阅读数' },
        { field: 'stars', title: '点赞数' },
        { field: 'favors', title: '收藏数' },
    ]"></u-chart>
    <u-chart title="图表" caption="近7日工作量" border size="large" :series="[
        { field: 'readings', title: '阅读数' },
        { field: 'stars', title: '点赞数' },
        { field: 'favors', title: '收藏数' },
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
