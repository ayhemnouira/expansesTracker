export interface RegisterRequestDto {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginRequestDto {
  email: string;
  password: string;
}
export interface UserDto {
  id: number;
  email: string;
  username: string; 
   role: "USER" | "ADMIN";
}

export interface AuthResponse {
  user: UserDto;
  accessToken: string;
  refreshToken: string;
}