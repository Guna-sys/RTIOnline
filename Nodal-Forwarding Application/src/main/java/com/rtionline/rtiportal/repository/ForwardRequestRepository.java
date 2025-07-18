package com.rtionline.rtiportal.repository;

import com.rtionline.rtiportal.model.ForwardRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForwardRequestRepository extends JpaRepository<ForwardRequest, Long> {
    // You can define custom query methods here if needed
}
