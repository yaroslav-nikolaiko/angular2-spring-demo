package education.demo.dao;

import education.demo.model.Account;
import education.demo.model.Comment;
import education.demo.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

/**
 * Created by yaroslav on 04.07.16.
 */
@Repository
public interface AccountRepository extends CrudRepository<Account, Long>{

    @RestResource(path = "comment", rel = "byComment")
    Account findByPostsComments(@Param("href") Comment comment);
}
