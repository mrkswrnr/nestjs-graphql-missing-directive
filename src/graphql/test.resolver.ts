import { Query, Resolver, Directive } from '@nestjs/graphql';
import { Test } from './test.entity';

@Resolver((of) => Test)
export class TestResolver {
  @Directive('@deprecated(reason: "This query will be removed in the next version")')
  @Query((returns) => [Test])
  async tests(): Promise<Test[]> {
    return [];
  }
}
