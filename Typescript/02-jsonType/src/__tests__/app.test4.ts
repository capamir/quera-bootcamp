import { expectTypeOf } from 'expect-type';
import JSONValue from '..';

it('JSON Types - Positive Test 4: should allow booleans (false) as JSONValue.', () => {
  expectTypeOf(false).toMatchTypeOf<JSONValue>();
});