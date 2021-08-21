
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateBrewInput {
    userId: number;
    teaId: number;
    date: string;
}

export interface CreateTeaInput {
    name: string;
    type?: Nullable<string>;
}

export interface CreateUserInput {
    login: string;
    email: string;
    password?: Nullable<string>;
    confirmPassword?: Nullable<string>;
    name?: Nullable<string>;
}

export interface UpdateUserInput {
    id: number;
    email?: Nullable<string>;
    login?: Nullable<string>;
    password?: Nullable<string>;
    confirmPassword?: Nullable<string>;
    name?: Nullable<string>;
}

export interface DeleteUserInput {
    id: number;
}

export interface Brew {
    id: number;
    date: string;
    user: User;
    tea: Tea;
}

export interface IQuery {
    brews(): Brew[] | Promise<Brew[]>;
    brew(id: number): Nullable<Brew> | Promise<Nullable<Brew>>;
    teaItems(): Tea[] | Promise<Tea[]>;
    tea(id: number): Nullable<Tea> | Promise<Nullable<Tea>>;
    users(): User[] | Promise<User[]>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createBrew(createBrewInput: CreateBrewInput): Nullable<Brew> | Promise<Nullable<Brew>>;
    createTea(createTeaInput: CreateTeaInput): Nullable<Tea> | Promise<Nullable<Tea>>;
    createUser(createUserInput?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
    updateUser(updateUserInput?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(deleteUserInput?: Nullable<DeleteUserInput>): Nullable<DeletedUser> | Promise<Nullable<DeletedUser>>;
}

export interface Tea {
    id: number;
    name: string;
    type?: Nullable<string>;
    brews: Brew[];
}

export interface User {
    id: number;
    email: string;
    login: string;
    name?: Nullable<string>;
    brews: Brew[];
}

export interface DeletedUser {
    id: number;
}

type Nullable<T> = T | null;
