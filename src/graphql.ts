
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Country {
    id: number;
    name: string;
}

export interface TeaType {
    id: number;
    name: string;
}

export interface Fabric {
    id: number;
    name: string;
    country: Country;
}

export interface Tea {
    id: number;
    name: string;
    type: TeaType;
    fabric?: Nullable<Fabric>;
}

export interface IQuery {
    countries(): Nullable<Country>[] | Promise<Nullable<Country>[]>;
    fabrics(): Nullable<Fabric>[] | Promise<Nullable<Fabric>[]>;
    teaItems(): Nullable<Tea>[] | Promise<Nullable<Tea>[]>;
    tea(id?: Nullable<number>): Nullable<Tea> | Promise<Nullable<Tea>>;
}

export interface IMutation {
    createTea(name?: Nullable<string>): Nullable<Tea> | Promise<Nullable<Tea>>;
}

type Nullable<T> = T | null;
