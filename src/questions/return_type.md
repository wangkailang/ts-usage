## 获取返回值

`ReturnType<T>`

### 举例

```typescript
const fn = (b: boolean) => {
  if (a) {
    return 'YES'
  }
  return 'NO'
}

type FnReturn = ReturnType<typeof fn>
// FnReturn => 'YES' | 'NO'
```