export interface V1Options {
    node?: number[], // 6 bytes
    clockseq?: number,
    msecs?: number | Date,
    nsecs?: number
}

export interface V4Options {
    random?: number[], // 16 bytes
    rng?: () => number[] // 16 bytes
}

export interface Uuid {
    v1():string;
    v1(opts: V1Options):string;
    v1(opts: V1Options, buf: Uint8Array, offset?: number):Uint8Array;
    v1(opts: V1Options, buf: number[], offset?: number):number[];

    v4():string;
    v4(opts: V4Options):string;
    v4(opts: V4Options, buf: Uint8Array, offset?: number):Uint8Array;
    v4(opts: V4Options, buf: number[], offset?: number):number[];

    parse(uuid: string):number[];
    parse(uuid: string, buf: Uint8Array, offset?: number):Uint8Array;
    parse(uuid: string, buf: number[], offset?: number):number[];

    unparse(buf:Uint8Array | number[], offset?: number):string;

    noConflict():Uuid;
}

export var uuid: Uuid;
