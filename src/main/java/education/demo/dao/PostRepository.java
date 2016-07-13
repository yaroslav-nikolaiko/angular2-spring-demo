package education.demo.dao;

import education.demo.model.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by yaroslav on 11.07.16.
 */
@Repository
public interface PostRepository extends PagingAndSortingRepository<Post, Long> {
}
