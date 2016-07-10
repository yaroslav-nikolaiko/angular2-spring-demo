package education.demo.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by yaroslav on 11.07.16.
 */
@Entity
@Table(name = "POST")
@Data
@ToString(of = {"title"}) @EqualsAndHashCode(of = {"title"})
public class Post {
    @Id
    @GeneratedValue
    Long id;

    String title;
    String body;
}
