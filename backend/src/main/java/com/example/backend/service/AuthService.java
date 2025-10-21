package com.example.backend.service;
import com.example.backend.dto.AuthResponseDto;
import com.example.backend.dto.LoginRequestDto;
import com.example.backend.dto.RegisterRequestDto;
import com.example.backend.dto.UserDto;
import org.springframework.stereotype.Service;

public interface AuthService {
    AuthResponseDto login(LoginRequestDto loginRequestDto);
    AuthResponseDto register(RegisterRequestDto registerRequestDto);
    AuthResponseDto refreshToken(String refreshToken);
}
