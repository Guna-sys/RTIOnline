package com.rtionline.rtiportal.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class ForwardRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String applicantName;
    private String subject;
    private String description;

    private String forwardedToDept;

    private LocalDateTime forwardedOn;

    // Getters and setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getApplicantName() { return applicantName; }
    public void setApplicantName(String applicantName) { this.applicantName = applicantName; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getForwardedToDept() { return forwardedToDept; }
    public void setForwardedToDept(String forwardedToDept) { this.forwardedToDept = forwardedToDept; }

    public LocalDateTime getForwardedOn() { return forwardedOn; }
    public void setForwardedOn(LocalDateTime forwardedOn) { this.forwardedOn = forwardedOn; }
}
