import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("a", "b", true, "c", "d")).toBeTruthy();
  });
});
