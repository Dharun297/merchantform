import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { Merchantdto } from './merchant.dto';
import { MerchantService } from './merchant.service';
import { Merchantmodel } from './merchant .model';

@Resolver(() => Merchantmodel)
export class MerchantResolver {
  constructor(private readonly merchantservice: MerchantService) {}

  @Query(() => Merchantmodel, { nullable: true })
  test(
    @Args('merchantdto') merchantdto: Merchantdto,
    // @Args('name') name: string,
    // @Args('email') email: string,
    // @Args('age') age: string,
    // @Args('mobile') mobile: number,
  ) {
    return this.merchantservice.testservice(merchantdto);
  }

  @Mutation(() => Merchantmodel)
  createMerchant(@Args('merchantdto') merchantdto: Merchantdto) {
    return this.merchantservice.createMerchant(merchantdto);
  }
}
