import { Module } from '@nestjs/common';
import { MerchantResolver } from './merchant.resolver';
import { MerchantService } from './merchant.service';

@Module({
  providers: [MerchantResolver, MerchantService]
})
export class MerchantModule {}
