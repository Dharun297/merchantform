import { ApolloDriver } from '@nestjs/apollo/dist/drivers/apollo.driver';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MerchantModule } from './merchant/merchant.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(),'src/schema.gql') 
      
      // Replace this with your schema definition
    }),
    MerchantModule
  ],
})
export class AppModule {}
