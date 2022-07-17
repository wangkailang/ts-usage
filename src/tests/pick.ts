import { checks, check, Pass, Fail } from '../check';
import { MyPick } from '../tools'; 

interface O1 {
  a: string | number;
  b: object;
  c: boolean;
  d?:  number;
}

type O2 = MyPick<O1, 'a' | 'd'>;

type O3 = MyPick<O1, 'b' | 'c'>;



checks([
  check<O2, {
    a: string | number;
    d?:  number;
  }, Pass>(),
  check<O3, {
    b: object;
    c: boolean;
  }, Pass>(),
])