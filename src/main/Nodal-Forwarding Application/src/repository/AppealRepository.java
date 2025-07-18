package com.example.repository;

import com.example.model.Appeal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AppealRepository extends JpaRepository<Appeal, UUID> {
}
