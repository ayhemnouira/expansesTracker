import axios from "axios";
import type {
  AuthResponse,
  LoginRequestDto,
  RegisterRequestDto,
} from "../types/auth";

const API = axios.create({
  baseURL: "http://localhost:8080", // Spring Boot backend
  headers: { "Content-Type": "application/json" },
});

export const registerUser = async (
  data: RegisterRequestDto
): Promise<AuthResponse> => {
  const response = await API.post<AuthResponse>("/api/auth/register", data);
    localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);
  return response.data;
};

export const loginUser = async (data: LoginRequestDto): Promise<AuthResponse> => {
  const response = await API.post<AuthResponse>("/api/auth/login", data);
  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);
  return response.data;
};