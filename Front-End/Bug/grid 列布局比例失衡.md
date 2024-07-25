# [`grid 列布局比例失衡`](/)

* 原因还不清楚

```css
grid-template-columns: 1fr 1fr 1fr; // 缩放会有比例失衡问题
// 改为
grid-template-columns: repeat(3, minmax(20vw, 1fr));
```
