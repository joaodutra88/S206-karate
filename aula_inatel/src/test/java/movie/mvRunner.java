package movie;

import com.intuit.karate.junit5.Karate;

class ExamplesTest {

    @Karate.Test
    Karate test() {
        return Karate.run("movie").relativeTo(getClass());
    }

}
