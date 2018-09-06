# 饼状图 PieChart

## 示例
### 基本形式

``` html
<u-pie-chart :data="[3, 6, 5, 4, 2]"></u-pie-chart>
```

``` html
<u-pie-chart legend title="24小时消费" :data="[
    { name: '容器服务', value: 20 },
    { name: '云服务器', value: 20 },
    { name: '负载均衡', value: 15 },
    { name: 'RDS', value: 35 },
    { name: '云硬盘', value: 9 },
    { name: '消息队列', value: 1 },
    { name: '公网 IP', value: 1 },
]"></u-pie-chart>
```

``` html
<u-pie-chart legend title="24小时消费" :data="[
    { name: '容器服务', value: 20 },
    { name: '云服务器', value: 20 },
    { name: '负载均衡', value: 15 },
    { name: 'RDS', value: 35 },
    { name: '云硬盘', value: 9 },
    { name: '消息队列', value: 0 },
    { name: '公网 IP', value: 0 },
]"></u-pie-chart>
```

### 数据状态

#### 加载中
``` html
<u-pie-chart title="24小时消费" border legend></u-pie-chart>
```

#### 加载失败
``` html
<u-pie-chart title="24小时消费" border legend :data="null"></u-pie-chart>
```

#### 空态
``` html
<u-pie-chart title="24小时消费" legend :data="[]"></u-pie-chart>
```

#### 和为0

``` html
<u-pie-chart legend title="每星期访问量" :data="[
    { name: 'selector1', value: 0 },
    { name: 'selector2', value: 0 },
    { name: 'selector3', value: 0 },
    { name: 'selector4', value: 0 },
]"></u-pie-chart>
```

### 设置颜色

``` html
<u-pie-chart legend :data="[
    { name: '请求成功数', value: 90, color: 'success' },
    { name: '请求失败数', value: 10, color: 'error' },
    { name: '线程超时次数', value: 4, color: '#5b9cff' },
    { name: '线程拒绝次数', value: 6, color: 'warning' },
]"></u-pie-chart>
```

## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 图表的标题 |
| caption | String |  | 图表的描述 |
| data | Array |  | 图表需要显示的数据,数组中的对象key值：percent表示占比，请传入整数形式，例30表示30%，name表示占比的名称，会在底部的legend中显示 |
| border | Boolean | false | 是否有表框 |
| width | String | `100%` | 图表的宽度 |
| height | String | `480px` | 图表的高度 |
| titleAlign | String | `center` | 图表标题的对齐方式，默认是居中，值有:left,center,right |

### Slot

| Slot | Description |
| ---- | ----------- |
| tooltip | 自定义tooltip内容(作用域插槽，请参照示例自定义tooltip的写法) |
