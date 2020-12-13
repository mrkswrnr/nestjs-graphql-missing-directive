import { Field, ID, ObjectType, Directive } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field((type) => ID)
  id: number;

  @Directive('@upper')
  @Field()
  name: string;
}