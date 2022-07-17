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