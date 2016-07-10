package education.demo.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

/**
 * Created by yaroslav on 10.07.16.
 */
@Entity
@Table(name = "ADDRESS")
@Data
@ToString(of = {"city", "street", "suite"}) @EqualsAndHashCode(of = {"city", "street", "suite"})
public class Address {
    @Id
    @GeneratedValue
    Long id;

    String city;
    String street;
    Integer suite;
    Long zip;
}
