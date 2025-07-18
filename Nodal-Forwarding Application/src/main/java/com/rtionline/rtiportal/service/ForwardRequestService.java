package com.rtionline.rtiportal.service;
import com.rtionline.rtiportal.model.ForwardRequest;
import com.rtionline.rtiportal.repository.ForwardRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ForwardRequestService {

    @Autowired
    private ForwardRequestRepository forwardRequestRepository;

    // Create
    public ForwardRequest saveRequest(ForwardRequest request) {
        return forwardRequestRepository.save(request);
    }

    // Read all
    public List<ForwardRequest> getAllRequests() {
        return forwardRequestRepository.findAll();
    }

    // Read one
    public Optional<ForwardRequest> getRequestById(Long id) {
        return forwardRequestRepository.findById(id);
    }

    // Delete
    public void deleteRequest(Long id) {
        forwardRequestRepository.deleteById(id);
    }
}
