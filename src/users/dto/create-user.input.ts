export class CreateUserInput {
  readonly login: string;
  readonly email: string;
  readonly name?: string;
  readonly password?: string;
  readonly confirmPassword?: string;
}
