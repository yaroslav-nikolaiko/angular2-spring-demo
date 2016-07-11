package education.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.hibernate4.Hibernate4Module;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.List;

/**
 * Created by ynikolaiko on 1/28/16.
 */
@SpringBootApplication
public class Application extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }




    @Configuration
    public static class MyConfigClass extends WebMvcConfigurerAdapter {
        /* Here we register the Hibernate4Module into an ObjectMapper, then set this custom-configured ObjectMapper
         * to the MessageConverter and return it to be added to the HttpMessageConverters of our application*/
        public MappingJackson2HttpMessageConverter jacksonMessageConverter(){
            MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();

            ObjectMapper mapper = new ObjectMapper();
            //Registering Hibernate4Module to support lazy objects
            mapper.registerModule(new Hibernate4Module());

            messageConverter.setObjectMapper(mapper);
            return messageConverter;

        }

        @Override
        public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
            converters.add(jacksonMessageConverter());
            super.configureMessageConverters(converters);
        }
    }

    @Controller
    public static class ViewResolver{
        @RequestMapping(value = {"/users/**", "/posts/**"}, method = RequestMethod.GET)
        public String index(){
            return "/index.html";
        }
    }
}
