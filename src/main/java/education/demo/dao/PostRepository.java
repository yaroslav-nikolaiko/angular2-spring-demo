package education.demo.dao;

import education.demo.model.Account;
import education.demo.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

/**
 * Created by yaroslav on 11.07.16.
 */
@Repository
public interface PostRepository extends PagingAndSortingRepository<Post, Long> {

    @RestResource(path = "account", rel = "byAccount")
    Page<Post> findByAccount(@Param("href") Account account, Pageable p);
}
