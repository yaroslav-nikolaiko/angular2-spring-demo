package education.demo.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by yaroslav on 12.07.16.
 */
@Entity
@Table(name = "COMMENT")
@Data
@ToString(of = {"name", "body"}) @EqualsAndHashCode(of = {"name"})
public class Comment {
    @Id
    @GeneratedValue
    Long id;

    String name;
    String body;
}
