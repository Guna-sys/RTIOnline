package com.example.service;

import com.example.dto.ForwardAppealRequest;
import com.example.model.Appeal;
import com.example.model.AppealAction;
import com.example.repository.AppealActionRepository;
import com.example.repository.AppealRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AppealService {

    private final AppealRepository appealRepo;
    private final AppealActionRepository actionRepo;

    public void forwardAppeal(UUID appealId, ForwardAppealRequest req, Principal principal) {
        Appeal appeal = getAppealOrThrow(appealId);

        AppealAction action = new AppealAction();
        action.setId(UUID.randomUUID());
        action.setAppeal(appeal);
        action.setActionType("FORWARD");
        action.setModeOfAction(req.getModeOfAction());
        action.setForwardedTo(req.getAppellateAuthorityId());
        action.setRemarks(req.getRemarks());
        action.setCreatedBy(UUID.fromString(principal.getName()));

        actionRepo.save(action);

        appeal.setStatus("FORWARDED_TO_FAA");
        appeal.setCurrentOfficerRole("FAA");
        appealRepo.save(appeal);
    }

    public void requestDocument(UUID appealId, String remarks, Principal principal) {
        Appeal appeal = getAppealOrThrow(appealId);

        AppealAction action = new AppealAction();
        action.setId(UUID.randomUUID());
        action.setAppeal(appeal);
        action.setActionType("REQUEST_DOC");
        action.setRemarks(remarks);
        action.setCreatedBy(UUID.fromString(principal.getName()));

        actionRepo.save(action);

        appeal.setStatus("DOC_REQUESTED");
        appealRepo.save(appeal);
    }

    public void returnAppeal(UUID appealId, String remarks, Principal principal) {
        Appeal appeal = getAppealOrThrow(appealId);

        AppealAction action = new AppealAction();
        action.setId(UUID.randomUUID());
        action.setAppeal(appeal);
        action.setActionType("RETURN");
        action.setRemarks(remarks);
        action.setCreatedBy(UUID.fromString(principal.getName()));

        actionRepo.save(action);

        appeal.setStatus("RETURNED_TO_APPLICANT");
        appealRepo.save(appeal);
    }

    private Appeal getAppealOrThrow(UUID id) {
        return appealRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Appeal not found"));
    }
}
