package education.demo.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

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

    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true)
    @JoinColumn(name = "POST_FK")
    List<Comment> comments;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ACCOUNT_FK")
    Account account;
}
