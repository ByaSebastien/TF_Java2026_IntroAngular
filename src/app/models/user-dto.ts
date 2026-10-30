export interface UserTokenDto{
  user: UserDto;
  accessToken: string;
  refreshToken: string;
}

export interface UserDto {
  id: number;
  username: string;
  role: RoleDto;
}

export interface RoleDto{
  id: number;
  name: string;
}
