package com.rtionline.rtiportal.controller;

import com.rtionline.rtiportal.model.ForwardRequest;
import com.rtionline.rtiportal.service.ForwardRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/forward-requests")
@CrossOrigin(origins = "*")  // Optional: allows frontend to call this API
public class ForwardRequestController {

    @Autowired
    private ForwardRequestService forwardRequestService;

    // Create
    @PostMapping
    public ForwardRequest createRequest(@RequestBody ForwardRequest request) {
        return forwardRequestService.saveRequest(request);
    }

    // Read all
    @GetMapping
    public List<ForwardRequest> getAllRequests() {
        return forwardRequestService.getAllRequests();
    }

    // Read one
    @GetMapping("/{id}")
    public Optional<ForwardRequest> getRequestById(@PathVariable Long id) {
        return forwardRequestService.getRequestById(id);
    }

    // Delete
    @DeleteMapping("/{id}")
    public void deleteRequest(@PathVariable Long id) {
        forwardRequestService.deleteRequest(id);
    }
}
