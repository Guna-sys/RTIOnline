@Entity
@Table(name = "appeals")
public class Appeal {
    @Id
    private UUID id;

    @Column(name = "status")
    private String status;

    @Column(name = "current_officer_role")
    private String currentOfficerRole;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // Getters & Setters
}
