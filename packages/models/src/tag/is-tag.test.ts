import {isTag} from "./is-tag";

describe('isTag', () => {
  it('should pass for a valid tag', () => {
    const tag = {
      type: 'DI',
      state: 'valid',
      props: {},
    }
    expect(isTag.parse(tag)).toEqual(tag);
  });
});
