import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { Books } from './books';

@Module({
  controllers: [BooksController],
  providers: [Books]
})
export class BooksModule {}
