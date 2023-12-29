import { Test, TestingModule } from '@nestjs/testing';
import { MerchantResolver } from './merchant.resolver';

describe('MerchantResolver', () => {
  let resolver: MerchantResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerchantResolver],
    }).compile();

    resolver = module.get<MerchantResolver>(MerchantResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
