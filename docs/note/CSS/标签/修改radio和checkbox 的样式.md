# 修改 radio 和 checkbox 的样式

- 无法通过 css 样式来直接修改原生的 radio 和 checkbox

- 通过 label 和 radio 或 checkbox 的绑定关系, 让 label 当做 checkbox 来显示

  ```pug
  // pug

  input( type='checkbox',id='mycheck')
  label(for='mycheck')

  input(type='radio',id='myradio')
  label(for='myradio')
  ```

```css
// css
input[type='radio'],
input[type='checkbox'] {
  display: none !important;
}
input[type='checkbox'] + label {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
}
// 通过checked状态 , 再通过兄弟组件 替换checkbox 的label
input[type='checkbox']:checked + label {
  background-color: #c0c0c0;
}
input[type='radio']:checked + label {
  background-color: #c0c0c0;
}
// 通过after 和 context 来替换 radio中点
#myCheck:checked + label:after {
  content: '\2714'; // √
  display: block;
  width: 20px;
  height: 20px;
}
```
