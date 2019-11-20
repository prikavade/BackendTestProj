package services;

import constants.ConfigurationConstant;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class Posts {

    public static Response getPosts() {

        return given()
                .baseUri(ConfigurationConstant.APP_URL)
                .when()
                .get(ConfigurationConstant.POSTS_END_POINT);
    }

    public static Response getUserId(int id) {

        return given()
                .baseUri(ConfigurationConstant.APP_URL)
                .queryParam("id", id)
                .when()
                .get(ConfigurationConstant.POSTS_END_POINT);
    }


    public static Response searchPosts(int userId) {

        return given()
                .baseUri(ConfigurationConstant.APP_URL)
                .queryParam("userId", userId)
                .when()
                .get(ConfigurationConstant.POSTS_END_POINT);
    }

    public static Response getPostsId(int id) {

        return given()
                .baseUri(ConfigurationConstant.APP_URL)
                .when()
                .get(ConfigurationConstant.POSTS_END_POINT+"/"+id);
    }


}
