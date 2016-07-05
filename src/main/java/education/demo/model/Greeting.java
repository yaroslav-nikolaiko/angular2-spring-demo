package education.demo.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by yaroslav on 03.07.16.
 */
@Entity
@Table(name = "GREETING")
@Data
public class Greeting {

    @Id
    @GeneratedValue
    Long id;
    String content;

    public Greeting() {
    }

    public Greeting(long id, String content) {
        this.id = id;
        this.content = content;
    }
}
