import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { GraphQLSchema } from 'graphql';
import { TestResolver } from './test.resolver';

describe('GraphQL Schema', () => {
  let schema: GraphQLSchema;

  beforeEach(async () => {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule);
    await app.init();

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    schema = await gqlSchemaFactory.create([TestResolver]);
  });

  it('should be defined', () => {
    expect(schema).toBeDefined();
  });

  it('should contain upper directive', () => {
    expect(schema.getDirectives().map((d) => d.name)).toContain('upper');
  });
});
