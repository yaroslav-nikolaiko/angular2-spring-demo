package education.demo.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/**
 * Created by yaroslav on 04.07.16.
 */
@Entity
@Table(name = "ACCOUNT")
@Data
@ToString(of = {"name", "email"}) @EqualsAndHashCode(of = {"name", "email"})
public class Account {
    @Id
    @GeneratedValue
    Long id;

    @Size(max=20)
    @Column(nullable = false, unique = true)
    String name;

    @Pattern(regexp = "([^.@]+)(\\.[^.@]+)*@([^.@]+\\.)+([^.@]+)", message = "Email is not in valid format")
    @Column(unique = true)
    String email;

    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="GREETINGS_ID")
    Greeting greeting;
}
