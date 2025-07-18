@RestController
@RequestMapping("/api/nodal/appeals")
@RequiredArgsConstructor
public class AppealController {
    private final AppealService appealService;

    @PostMapping("/{id}/forward")
    public ResponseEntity<?> forwardAppeal(@PathVariable UUID id, @RequestBody ForwardAppealRequest request, Principal principal) {
        appealService.forwardAppeal(id, request, principal);
        return ResponseEntity.ok(Map.of("message", "Appeal forwarded successfully."));
    }

    @PostMapping("/{id}/request-doc")
    public ResponseEntity<?> requestDocument(@PathVariable UUID id, @RequestBody RemarksRequest request, Principal principal) {
        appealService.requestDocument(id, request.getRemarks(), principal);
        return ResponseEntity.ok(Map.of("message", "Document requested from applicant."));
    }

    @PostMapping("/{id}/return")
    public ResponseEntity<?> returnAppeal(@PathVariable UUID id, @RequestBody RemarksRequest request, Principal principal) {
        appealService.returnAppeal(id, request.getRemarks(), principal);
        return ResponseEntity.ok(Map.of("message", "Appeal returned to applicant."));
    }
}
