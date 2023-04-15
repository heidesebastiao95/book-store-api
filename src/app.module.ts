import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthorsModule, BooksModule, ReviewsModule],
})
export class AppModule {}
