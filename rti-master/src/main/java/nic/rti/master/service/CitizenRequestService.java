package nic.rti.master.service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import nic.rti.master.dto.CitizenRequestDetailsDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CitizenRequestService {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional(readOnly = true)
    public CitizenRequestDetailsDTO getRequestDetails(String registrationNo) {
        String sql = "SELECT registration_no, name, sex, address1, address2, address3, state, district, country, status, " +
                "educationalstatus, phone_no, mobile_no, email_address, citizenshipstatus, bpl, amount, lifelibertyperson, subject_content, document_id, mode, action_srno, pioname " +
                "FROM RTIMIS.\"Request\" WHERE registration_no = :registrationNo";

        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("registrationNo", registrationNo);

        Object[] row;
        try {
            row = (Object[]) query.getSingleResult();
        } catch (Exception e) {
            return null; // Not found or error
        }

        CitizenRequestDetailsDTO dto = new CitizenRequestDetailsDTO();
        dto.setRegistrationNo((String) row[0]);
        // dateOfReceipt is not available in the table, set as null or fetch if available
        dto.setDateOfReceipt(null);

        CitizenRequestDetailsDTO.PersonalDetails pd = new CitizenRequestDetailsDTO.PersonalDetails();
        pd.setName((String) row[1]);
        pd.setGender((String) row[2]); // sex
        // Combine address fields
        String address = ((String) row[3] != null ? (String) row[3] : "") +
                         (row[4] != null ? ", " + row[4] : "") +
                         (row[5] != null ? ", " + row[5] : "");
        pd.setAddress(address);
        pd.setState((String) row[6]);
        pd.setDistrict((String) row[7]);
        pd.setCountry((String) row[8]);
        pd.setStatus((String) row[9]);
        pd.setEducationQualification((String) row[10]); // educationalstatus
        pd.setPhoneNo((String) row[11]);
        pd.setMobileNo((String) row[12]);
        pd.setEmailId((String) row[13]);
        dto.setPersonalDetails(pd);

        CitizenRequestDetailsDTO.RequestDetails rd = new CitizenRequestDetailsDTO.RequestDetails();
        rd.setCitizenship((String) row[14]); // citizenshipstatus
        rd.setIsBelowPovertyLine((String) row[15]); // bpl
        rd.setAmountPaid(row[16] != null ? Integer.parseInt(row[16].toString()) : 0); // amount
        rd.setConcernsLifeOrLiberty(row[17] != null && (row[17].toString().equalsIgnoreCase("true") || row[17].toString().equals("1"))); // lifelibertyperson
        rd.setApplicationText((String) row[18]); // subject_content
        dto.setRequestDetails(rd);

        dto.setRequestDocument((String) row[19]); // document_id
        dto.setModeOfAction((String) row[20]); // mode
        dto.setAction(row[21] != null ? row[21].toString() : null); // action_srno
        dto.setSelectedPio((String) row[22]); // pioname

        return dto;
    }
} 