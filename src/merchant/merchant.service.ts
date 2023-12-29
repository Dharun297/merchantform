import { Injectable } from '@nestjs/common';
import { Merchantdto } from './merchant.dto';

@Injectable()
export class MerchantService {
  constructor() {}

  async testservice(
    merchantdto: Merchantdto,
    // name: string,
    // email: string,
    // age: string,
    // mobile: number,
  ) {
    // Use the additional fields in your logic
    const merchant = { ...merchantdto};
    console.log(merchant);
    return merchant;
  }

  async createMerchant(merchantdto: Merchantdto) {
    console.log(merchantdto);
    return merchantdto;
  }
}
