## 比较类型是否相等

`Equals<T1, T2>`

### 举例

```typescript
type A1 = 'yes';

type A2 = 'yes';


type EqualRlt = Equals<A1, A2>
// EqualRlt => 1
```

<a href="../tools/equals.ts"><img src="https://img.shields.io/badge/-code-blue"/></a>