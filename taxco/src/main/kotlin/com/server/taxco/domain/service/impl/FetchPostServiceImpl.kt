package com.server.taxco.domain.service.impl

import com.server.taxco.application.mapper.PostMapper
import com.server.taxco.application.web.response.PostResponse
import com.server.taxco.domain.Exception.PostNotFoundException
import com.server.taxco.domain.post.Post
import com.server.taxco.domain.post.PostId
import com.server.taxco.domain.post.PostRepository
import com.server.taxco.domain.service.FetchPostService
import com.server.taxco.resources.database.PostDocument
import com.server.taxco.resources.storage.S3Service
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service

@Service
class FetchPostServiceImpl(
    private val repository: PostRepository,
    private val mapper: PostMapper,
    private val s3Service: S3Service
) : FetchPostService {
    override fun byId(postId: String): PostResponse {
        val id = PostId(postId)
        val post = repository.findById(id) ?: throw PostNotFoundException(id)
        return mapper.toResponse(post)
    }
    override fun byPage(page: Int, size: Int): Page<PostDocument> {
        val field = Post::createdAt
        val pageable = PageRequest.of(page, size, Sort.by(field.name))
        val posts = repository.findAll(pageable)
        return posts
    }
    override fun image(postId: String): ByteArray {
        return s3Service.getObject("bucketName", "post/1")
    }
}