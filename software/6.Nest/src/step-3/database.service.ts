import { NotFoundException, ConflictException, Injectable } from '@nestjs/common';
import { ArticleDto } from './article.dto'

@Injectable()
export class DatabaseService {
  private readonly article: ArticleDto[] = [];

  async createArticle(newArticle: ArticleDto): Promise<ArticleDto> {
    const post = await this.findArticle(newArticle.title);

    if (post) {
      throw new ConflictException("Article already exists");
    }

    this.article.push(newArticle);

    return newArticle;
  }

  async findArticle(postTitle: string): Promise<ArticleDto | undefined> {
    return this.article.find(post => post.title === postTitle);
  }

  async updateArticle(postTitle: string, postUpdate: ArticleDto): Promise<ArticleDto> {
    const post = await this.findArticle(postTitle);

    if (!post) {
      throw new NotFoundException("Article not found");
    }

    post.title = postUpdate.title;
    post.body = postUpdate.body;
    post.author = postUpdate.author;

    return post;
  }

  async deleteArticle(postTitle: string): Promise<ArticleDto> {
    const post = await this.findArticle(postTitle);

    if (!post) {
      throw new NotFoundException("Article not found");
    }

    this.article.filter(p => p.title !== postTitle);

    return post;
  }
}
