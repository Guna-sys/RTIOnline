package model;

@Entity
@Table(name = "appeal_actions")
public class AppealAction {
    @Id
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "appeal_id")
    private Appeal appeal;

    private String actionType; // FORWARD, REQUEST_DOC, RETURN
    private String modeOfAction; // ONLINE, PHYSICAL (only for FORWARD)
    
    private UUID forwardedTo; // FAA ID, optional
    private String remarks;

    private UUID createdBy;

    @CreationTimestamp
    private LocalDateTime createdAt;

    // Getters & Setters
}
