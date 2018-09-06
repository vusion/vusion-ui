### 图例

#### 图例过长

``` html
<u-chart title="较多的图例" border legend :data="[1]" :series="[
    { name: '很长很长很长很长很长很长的阅读数', field: 'readings' },
    { name: '很长很长很长很长很长很长的点赞数', field: 'stars' },
    { name: '很长很长很长很长很长很长的收藏数', field: 'favors' },
    { name: '很长很长很长很长很长很长的阅读数', field: 'readings2' },
]"></u-chart>
```

#### 图例过窄

``` html
<u-chart title="较多的图例" border legend style="width: 400px;" :data="[1]" :series="[
    { name: '很长很长很长的阅读数', field: 'readings' },
    { name: '很长很长很长的点赞数', field: 'stars' },
    { name: '很长很长很长的收藏数', field: 'favors' },
    { name: '很长很长很长的阅读数', field: 'readings2' },
]"></u-chart>
```

#### 图例过多

``` html
<u-chart title="较多的图例" border legend :data="[1]" :series="[
    { name: '阅读数', field: 'readings' },
    { name: '点赞数', field: 'stars' },
    { name: '收藏数', field: 'favors' },
    { name: '阅读数', field: 'readings2' },
    { name: '点赞数', field: 'stars2' },
    { name: '很长很长很长很长很长很长的收藏数', field: 'favors2' },
    { name: '阅读数', field: 'readings3' },
    { name: '点赞数', field: 'stars3' },
    { name: '收藏数', field: 'favors3' },
    { name: '很长很长很长很长很长很长的阅读数', field: 'readings4' },
    { name: '点赞数', field: 'stars4' },
    { name: '收藏数', field: 'favors4' },
    { name: '阅读数', field: 'readings5' },
    { name: '很长很长很长很长很长很长的点赞数', field: 'stars5' },
    { name: '收藏数', field: 'favors5' },
]"></u-chart>
```
