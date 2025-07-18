package nic.rti.master.controller;

import nic.rti.master.dto.CitizenRequestDetailsDTO;
import nic.rti.master.service.CitizenRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rti-citizen")
public class CitizenRequestController {
    @Autowired
    private CitizenRequestService citizenRequestService;

    @GetMapping("/request-details")
    public ResponseEntity<?> getRequestDetails(@RequestParam String registration_no) {
        CitizenRequestDetailsDTO details = citizenRequestService.getRequestDetails(registration_no);
        if (details == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(details);
    } 
} 