package com.example.repository;

import com.example.model.AppealAction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AppealActionRepository extends JpaRepository<AppealAction, UUID> {
}
