package com.server.taxco.application.mapper

import com.server.taxco.common.Mapper
import com.server.taxco.domain.article.Article
import com.server.taxco.resources.database.ArticleDocument
import com.server.taxco.resources.database.TagDocument

@Mapper
class ArticleDocumentMapper {

    fun toDocument(article: Article) = article.let {
        ArticleDocument(
            id = it.id.value,
            title = it.title,
            description = it.description,
            tag = TagDocument(it.tag.name),
            readTime = it.readTime,
            isVisible = it.isVisible.name,
            imagePath = it.image,
            contentPath = it.content,
            createdAt = it.createdAt,
            updatedAt = it.updatedAt
        )
    }
}
