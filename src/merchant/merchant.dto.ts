import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class Merchantdto{

@Field(()=>String, {nullable: true})
name: string;

@Field(()=>String, {nullable: true})
email: string;

@Field(()=>String, {nullable: true})
age: number;

@Field(()=>String, {nullable: true})
mobile: number;
}