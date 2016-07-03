package education.elevator.system;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yaroslav on 03.07.16.
 */
@RestController
@RequestMapping("/api")
public class DemoController {

    @RequestMapping( method = RequestMethod.GET)
    Greeting greeting() {
        return new Greeting(1, "Hello from server side");
    }

    @RequestMapping(value = "hello", method = RequestMethod.GET)
    String helloWorld() {
        return "Hello from server side";
    }
}
