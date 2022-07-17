## 获取部分属性集合

`Pick<T, K extends keyof T>`

### 举例

```typescript
interface O1 {
  a: string | number;
  b: object;
  c: boolean;
  d?:  number;
}

type O2 = MyPick<O1, 'a' | 'd'>;
// O2 =>  {
//   a: string | number;
//   d?:  number;
// }
```

<a href="../tools/pick.ts"><img src="https://img.shields.io/badge/-code-blue"/></a>
<a href="../tests/pick.ts"><img src="https://img.shields.io/badge/-test-orange"/></a>