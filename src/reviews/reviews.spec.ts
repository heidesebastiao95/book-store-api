import { Test, TestingModule } from '@nestjs/testing';
import { Reviews } from './reviews';

describe('Reviews', () => {
  let provider: Reviews;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Reviews],
    }).compile();

    provider = module.get<Reviews>(Reviews);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
