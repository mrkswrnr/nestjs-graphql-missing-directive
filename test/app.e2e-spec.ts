import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { getIntrospectionQuery } from 'graphql';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should contain upper directive in graphql schema', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({"operationName":"IntrospectionQuery","variables":{},"query":getIntrospectionQuery({})})
      .expect(200)
      .expect((res) => {
        return expect(res.body.data.__schema.directives.map(d => d.name)).toContain('upper')
      })
  });
});
