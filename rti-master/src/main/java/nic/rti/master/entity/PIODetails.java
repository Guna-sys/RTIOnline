package nic.rti.master.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;

@Entity
@Table(name = "piodetails", schema = "rtimis")
@Data
public class PioDetails {

    @Id
    @Column(name = "pio_id")
    private Integer pioId;

    @Column(name = "PIOCode")
    private Integer pioCode;

    @Column(name = "ActiveIdle")
    private String activeIdle;

}
