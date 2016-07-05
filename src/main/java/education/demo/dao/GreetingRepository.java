package education.demo.dao;

import education.demo.model.Greeting;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

/**
 * Created by yaroslav on 05.07.16.
 */
@Repository
public interface GreetingRepository extends CrudRepository<Greeting, Long> {
}
