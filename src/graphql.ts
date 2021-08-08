
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

export interface IQuery {
    countries(): Country[] | Promise<Country[]>;
    fabrics(): Fabric[] | Promise<Fabric[]>;
    teaItems(): Tea[] | Promise<Tea[]>;
    tea(id: number): Nullable<Tea> | Promise<Nullable<Tea>>;
    users(): User[] | Promise<User[]>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface Tea {
    id: number;
    name: string;
    type: TeaType;
    fabric?: Nullable<Fabric>;
}

export interface IMutation {
    createTea(name?: Nullable<string>): Nullable<Tea> | Promise<Nullable<Tea>>;
}

export interface User {
    id: number;
    email: string;
    login: string;
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
