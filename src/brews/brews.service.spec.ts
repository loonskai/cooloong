import { Test, TestingModule } from '@nestjs/testing';
import { BrewsService } from './brews.service';

describe('BrewsService', () => {
  let service: BrewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrewsService],
    }).compile();

    service = module.get<BrewsService>(BrewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
