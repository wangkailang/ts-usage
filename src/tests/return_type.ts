import { checks, check, Pass, Fail } from '../check';
import { MyReturnType } from '../tools'; 

const getYesOrNo = (b: boolean) => {
  if (b) return 'YES';
  return 'NO';
}

type FnReturn = MyReturnType<typeof getYesOrNo>;

checks([
  check<FnReturn, "YES" | "NO", Pass>(),
  check<FnReturn, "YES", Fail>()
])