export class CreateUserDto {
  readonly login: string;
  readonly email: string;
  readonly password?: string;
  readonly confirmPassword?: string;
  readonly name?: string;
}
