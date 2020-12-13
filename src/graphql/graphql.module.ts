import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TestResolver } from './test.resolver';
import { UpperCaseDirective } from './upper.directive';

@Module({
  providers: [TestResolver],
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      schemaDirectives: {
        upper: UpperCaseDirective,
      },
    }),
  ],
})
export class GraphqlModule {}
