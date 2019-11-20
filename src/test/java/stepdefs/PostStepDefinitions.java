package stepdefs;
import com.fasterxml.jackson.databind.ObjectMapper;
import constants.FeatureConstant;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.apache.log4j.Logger;
import org.testng.Assert;
import schema.*;
import services.Comments;
import services.Posts;
import services.Users;
import utils.Utils;
import java.io.IOException;
import java.util.List;


public class PostStepDefinitions {

    private Response response;
    private JsonPath postResponse;

    Logger logger = Logger.getLogger("PostStepDefinitions");

    @Given("^Post feature is available to the user$")
    public void featureIsAvailableToUser() {
        logger.info("Checking whether the Post feature is available");
        Assert.assertEquals(Posts.getPosts().getStatusCode(), 200, "Status is not as expected, the feature is not available");
        logger.info("The Post feature is available and the status is 200");
    }

    @Then("^Searching the user \"([^\"]*)\"$")
    public void searchUser(String user) {
        logger.info("Searching the user " + user);
        response = Users.getUsers(user);
        Assert.assertEquals(response.getStatusCode(), 200, "Status is not as expected, The user is not found");
        logger.info("The details for the user " + user + " are fetched and the status is 200");
    }


    @And("^Fetching the id of the user$")
    public void fetchUser()
    {
        JsonPath userResponse = response.jsonPath();

        logger.info(" Fetching The id of the user ");
        FeatureConstant.ID = userResponse.get("id[0]");
        logger.info(" The id of the user is fetched as " + FeatureConstant.ID);

    }
    @Then("^Searching the userId of the user mentioned$")
    public void getUserId() {
        logger.info(" Searching the userId of the user mentioned ");
        response = Posts.getUserId(FeatureConstant.ID);
        Assert.assertEquals(response.getStatusCode(), 200, "Status is not as expected, The related userId is not found");
        logger.info(" The userId written by user is fetched and the status is 200 ");
        postResponse = response.jsonPath();

        FeatureConstant.USERID = postResponse.get("userId[0]");
        logger.info(" The userId of the user is fetched as " + FeatureConstant.USERID);

    }


    @Then("^Searching for the posts written by the user using userId$")
    public void searchPost() {
        logger.info(" Searching for the posts written by the user ");
        response = Posts.searchPosts(FeatureConstant.USERID);
        Assert.assertEquals(response.getStatusCode(), 200, "Status is not as expected, the related post is not found");
        logger.info(" The posts written by user are fetched and the status is 200 ");


    }

    @And("^Fetching the comments for each post and validating emails in the comment section$")
    public void validateEmail()
    {
        logger.info(" Validating the emails in the comment section ");

        response = Posts.searchPosts(FeatureConstant.USERID);
        postResponse = response.jsonPath();
        List<Integer> jsonResponse = postResponse.getList("id");
        for (int i =0; i < jsonResponse.size(); i++)
        {
            FeatureConstant.ID = postResponse.get("id["+i+"]");
            response = Comments.fetchComment(FeatureConstant.ID);
            Assert.assertEquals(response.getStatusCode(), 200, "Status is not as expected, the related post is not found");
            JsonPath commentsResponse = response.jsonPath();
            FeatureConstant.EMAIL = commentsResponse.get("email[0]");
            Assert.assertTrue(Utils.EmailVerify(FeatureConstant.EMAIL),"Email does not have valid format");
            logger.info(" Emails in the comment section are in the proper format. "+ FeatureConstant.EMAIL);

        }

    }


    @Then("^API schema for Users should be correct$")
    public void schemaForUsersShouldBeCorrect() throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        UserSchema[] contract = mapper.readValue(response.asString(), UserSchema[].class);

        for (UserSchema itr : contract) {
            Assert.assertNotNull(itr.getId());
            Assert.assertTrue(Integer.class.isInstance(itr.getId()));

            Assert.assertNotNull(itr.getName());
            Assert.assertTrue(String.class.isInstance(itr.getName()));

            Assert.assertNotNull(itr.getUsername());
            Assert.assertTrue(String.class.isInstance(itr.getUsername()));

            Assert.assertNotNull(itr.getEmail());
            Assert.assertTrue(String.class.isInstance(itr.getEmail()));

            Assert.assertNotNull(itr.getAddress());

            Assert.assertNotNull(itr.getPhone());
            Assert.assertTrue(String.class.isInstance(itr.getPhone()));

            Assert.assertNotNull(itr.getWebsite());
            Assert.assertTrue(String.class.isInstance(itr.getWebsite()));

            Assert.assertNotNull(itr.getCompany());

        }
        logger.info("API Users schema is correct");

    }


    @Then("^API schema for Posts should be correct$")
    public void schemaForPostShouldBeCorrect() throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        PostSchema[] contract = mapper.readValue(response.asString(), PostSchema[].class);
        for (PostSchema itr : contract) {
            Assert.assertNotNull(itr.getUserId());
            Assert.assertTrue(Integer.class.isInstance(itr.getUserId()));

            Assert.assertNotNull(itr.getId());
            Assert.assertTrue(Integer.class.isInstance(itr.getId()));

            Assert.assertNotNull(itr.getTitle());
            Assert.assertTrue(String.class.isInstance(itr.getTitle()));

            Assert.assertNotNull(itr.getBody());
            Assert.assertTrue(String.class.isInstance(itr.getBody()));
        }
        logger.info("API Posts schema is correct");

    }

    @Then("^API schema for Comments should be correct$")
    public void schemaForCommentsShouldBeCorrect() throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        CommentSchema[] contract = mapper.readValue(response.asString(),CommentSchema[].class);

        for (CommentSchema itr : contract)
        {
            Assert.assertNotNull(itr.getPostId());
            Assert.assertTrue(Integer.class.isInstance(itr.getPostId()));

            Assert.assertNotNull(itr.getId());
            Assert.assertTrue(Integer.class.isInstance(itr.getId()));

            Assert.assertNotNull(itr.getName());
            Assert.assertTrue(String.class.isInstance(itr.getName()));

            Assert.assertNotNull(itr.getEmail());
            Assert.assertTrue(String.class.isInstance(itr.getEmail()));

            Assert.assertNotNull(itr.getBody());
            Assert.assertTrue(String.class.isInstance(itr.getBody()));

        }
        logger.info("API Comments schema is correct");
    }

    @Then("^Searching the user with invalid id (\\d+)$")
    public void searchingTheUserWithInvalidId(int id) {
        logger.info("Searching the user with invalid id " + id);
        response = Users.getUsersWithId(id);
    }

    @Then("^Searching the post with invalid id (\\d+)$")
    public void searchingThePostWithInvalidId(int id) {
        logger.info("Searching the post with invalid id " + id);
        response = Posts.getPostsId(id);
    }

    @Then("^the status code is (\\d+)$")
    public void theStatusCodeIs(int statusCode) {
        Assert.assertEquals(response.getStatusCode(), statusCode, "Status is not as expected");
        logger.info("Getting statusCode as "+statusCode);
    }

    @Then("^Searching the user with invalid endpoint$")
    public void searchingTheUserWithInvalidEndpoint() {
        logger.info("Searching the user with invalid endpoint");
        response = Users.getUsersInvalidEndpoint();


    }
}






