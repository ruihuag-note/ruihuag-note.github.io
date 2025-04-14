# [`input type =number 可以输入 e 问题`](/)

## 正则

```tsx
function App() {
  const [value, setValue] = useState('');
  const handleInput = (e) => {
    const reg = /^\d+$/;
    const input = e.target.value;
    if (reg.test(input) || input === '') {
      console.log('输入的值为:', input);
      setValue(input);
    }
  };
  return (
    <>
      <input type="number" value={value} onChange={handleInput} />
    </>
  );
}
```

## 换用type=tel

- 可以正常唤起数字输入框
