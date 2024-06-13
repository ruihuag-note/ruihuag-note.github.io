# [`Echarts版本v5弃用的normal和api.style`](/)

- 警告: `[ECharts] DEPRECATED: 'normal' hierarchy in itemStyle has been removed since 4.0. All style properties are configured in itemStyle directly now.`

```js
series: [
  {
    type: 'custom',
    renderItem: (params, api) => {
      return {
        type: 'rect',
        style: api.style()
      }
    },
    data
  }
]
```

该为

```js
series: [
  {
    type: 'custom',
    renderItem: (params, api) => {
      return {
        type: 'rect',
        style: {
          fill: api.visual('color')
        }
      }
    },
    data
  }
]
```
