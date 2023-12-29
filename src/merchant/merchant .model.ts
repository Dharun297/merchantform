import { Field, ObjectType, ID } from "@nestjs/graphql";

@ObjectType()
export class Merchantmodel{
    @Field(() => ID)
    id: string;

    @Field(()=>String, {nullable: true})
    name: string;
    
    @Field(()=>String, {nullable: true})
    email: string;
    
    @Field(()=>String, {nullable: true})
    age: string;
    
    @Field(()=>String, {nullable: true})
    mobile: number;
    }

