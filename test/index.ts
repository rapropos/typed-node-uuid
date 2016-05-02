import {expect} from 'chai';

import {v1, v4, parse, unparse} from 'node-uuid';

describe('node-uuid', () => {
  it('v1', () => {
    const result: string = v1(null, null, 10);
    expect(result).to.be.a('string');

    const array: number[] = v1(null, []);
    expect(array).to.be.an('array');

    const buffer: Buffer = v1(null, new Buffer(''));
    expect(buffer).to.be.an.instanceOf(Buffer);
  });

  it('v4', () => {
    const result: string = v4(null, null, 10);
    expect(result).to.be.a('string');

    const array: number[] = v4(null, []);
    expect(array).to.be.an('array');

    const buffer: Buffer = v4(null, new Buffer(''));
    expect(buffer).to.be.an.instanceOf(Buffer);
  });

  it('parse', () => {
    const uuid: string = v4();

    const parsed1: number[] = parse(uuid);
    expect(parsed1).to.be.an('array');

    const parsed2: number[] = parse(uuid, []);
    expect(parsed2).to.be.an('array');

    const parsed3: Buffer = parse(uuid, new Buffer(''));
    expect(parsed3).to.be.an.instanceOf(Buffer);
  });

  it('unparse', () => {
    const buffer: Buffer = v4(null, new Buffer(''));
    const array: number[] = v4(null, []);

    const unparsed1: string = unparse(buffer);
    expect(unparsed1).to.be.a('string');

    const unparsed2: string = unparse(array);
    expect(unparsed2).to.be.a('string');
  });
});
