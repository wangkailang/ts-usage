import { Equals } from "./tools"

export type Pass = 1

export type Fail = 0

export declare function check<Type, Expect, Outcome>(): Equals<Equals<Type, Expect>, Outcome>;

export declare function checks(checks: 1[]): void;