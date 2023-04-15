import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { Reviews } from './reviews';

@Module({
  controllers: [ReviewsController],
  providers: [Reviews]
})
export class ReviewsModule {}
