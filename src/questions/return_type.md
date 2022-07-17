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

<a href="../tools/return_type.ts"><img src="https://img.shields.io/badge/-code-blue"/></a>
<a href="../tests/return_type.ts"><img src="https://img.shields.io/badge/-test-orange"/></a>