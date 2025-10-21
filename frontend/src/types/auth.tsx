export interface RegisterRequestDto {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginRequestDto {
  username: string;
  password: string;
}

export interface UserDto {
  email: string;
  role: "USER" | "ADMIN";
}
export interface AuthResponse {
  user: UserDto;
  accessToken: string;
  refreshToken: string;
}