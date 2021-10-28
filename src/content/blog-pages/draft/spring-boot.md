One of the hardest things for me to wrap my head around has been Java Spring. 

### What you need:

* basic understanding of Maven, a package manager for Java
* basic understanding of the Java programming language. I am using Java v11
* basic understanding of REST APIs

### Refer to application.properties file:

### Controllers

How do we actually communicate with other applications over HTTP? In Spring, we create what are called controllers to help us achieve this functionality. 

```
@RestController
public class BusController {
	
	@GetMapping("/buses")
	public Bus getBus(@RequestParam(value="stop") String stop) {
		return new Bus)
	}
}
```

When you use @RequestParam, you specify ways that the user can filter through all the options 

```
// get buses, but only the ones from stop 61979
http://url.com/buses?stop=61979
```



### Maven

LIst of simple commands that you should know

* run your spring application

  ``` 
  ./mvnw spring-boot:run
  ```

* 
