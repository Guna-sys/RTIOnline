package nic.rti.master.dto;

import lombok.Data;

@Data
public class CitizenRequestDetailsDTO {
    private String registrationNo;
    private String dateOfReceipt;
    private PersonalDetails personalDetails;
    private RequestDetails requestDetails;
    private String requestDocument;
    private String modeOfAction;
    private String action;
    private String selectedPio;

    @Data
    public static class PersonalDetails {
        private String name;
        private String gender;
        private String address;
        private String state;
        private String district;
        private String country;
        private String status;
        private String educationQualification;
        private String phoneNo;
        private String mobileNo;
        private String emailId;
    }

    @Data
    public static class RequestDetails {
        private String citizenship;
        private String isBelowPovertyLine;
        private int amountPaid;
        private boolean concernsLifeOrLiberty;
        private String applicationText;
    }
} 