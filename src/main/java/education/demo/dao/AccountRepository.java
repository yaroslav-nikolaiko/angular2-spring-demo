package education.demo.dao;

import education.demo.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by yaroslav on 04.07.16.
 */
@Repository
public interface AccountRepository extends CrudRepository<Account, Long>{
}
