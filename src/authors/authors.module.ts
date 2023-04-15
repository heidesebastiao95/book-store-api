import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { Authors } from './authors';

@Module({
  controllers: [AuthorsController],
  providers: [Authors]
})
export class AuthorsModule {}
