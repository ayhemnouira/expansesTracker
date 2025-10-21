package com.example.backend.dto;
import com.example.backend.entity.User;
import com.example.backend.enums.Role;
import lombok.Data;

@Data
public class UserDto {
    private String email;
    private Role role;
    public UserDto(User user) {
        this.email = user.getEmail();
        this.role = user.getRole();
    }
}
