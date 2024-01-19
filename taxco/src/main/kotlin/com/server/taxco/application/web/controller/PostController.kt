package com.server.taxco.application.web.controller

import com.server.taxco.application.web.request.CreatePostRequest
import com.server.taxco.application.web.response.PostResponse
import com.server.taxco.application.service.CreatePostService
import com.server.taxco.application.service.FetchPostService
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.post.Post
import com.server.taxco.resources.database.PostDocument
import lombok.extern.log4j.Log4j2
import lombok.extern.slf4j.Slf4j
import org.apache.coyote.Response
import org.springframework.data.domain.Page
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("post")
class PostController(
    private val createPost: CreatePostService,
    private val fetchPost: FetchPostService,
) : LoggableClass() {

    @PostMapping
    fun createPost(
        @RequestBody createPostRequest: CreatePostRequest
    ): ResponseEntity<Post> {
        logInfo("Request to create Post received with title ${createPostRequest.title}")
        createPost.execute(createPostRequest)
        return ResponseEntity.status(HttpStatus.CREATED).build()
    }

    @GetMapping("{postId}")
    fun getPostById(
        @PathVariable postId: String
    ): ResponseEntity<PostResponse> {
        val response = fetchPost.byId(postId)
        return ResponseEntity.ok(response)
    }

    @GetMapping
    fun getPostPages(
        @RequestParam("page") page: Int,
        @RequestParam("size") size: Int,
    ): ResponseEntity<Page<PostDocument>> {
        val response = fetchPost.byPage(page, size)
        return ResponseEntity.ok(response)
    }

    @GetMapping("{postId}")
    fun getPostImageById(
        @PathVariable postId: String
    ): ResponseEntity<ByteArray> {
        val response = fetchPost.image(postId)
        return ResponseEntity.ok(response)
    }
}
