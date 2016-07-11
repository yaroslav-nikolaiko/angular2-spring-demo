package education.demo.dao;

import education.demo.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by yaroslav on 12.07.16.
 */
@Repository
public interface CommentRepository  extends CrudRepository<Comment, Long>{
}
