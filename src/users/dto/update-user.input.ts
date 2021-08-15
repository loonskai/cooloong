export class UpdateUserInput {
  readonly id: string;
  readonly email?: string;
  readonly login?: string;
  readonly name?: string;
  readonly password?: string;
  readonly confirmPassword?: string;
}
