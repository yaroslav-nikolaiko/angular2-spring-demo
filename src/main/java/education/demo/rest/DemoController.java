package education.demo.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yaroslav on 03.07.16.
 */
@RestController
@RequestMapping("/api/hello")
public class DemoController {

    @RequestMapping(value = "hello", method = RequestMethod.GET)
    String helloWorld() {
        return "Hello from server side";
    }
}
