import {Serverless} from 'serverless/aws';
import getListings from './http/getListings';
import getListing from './http/getListing';
import { LISTING_BUCKET } from './utils/constants';

const serverlessConfiguration: Serverless = {
    service: 'ListingsService',
    frameworkVersion: '3',
    plugins: ['serverless-esbuild','serverless-offline', 'serverless-iam-roles-per-function'],
    provider: {
      name: 'aws',
      runtime: 'nodejs18.x',
      region: 'us-east-1',
      environment: {
        S3_BUCKET_NAME: LISTING_BUCKET,
      },
    },
    custom: {
        'serverless-offline': {
            httpPort: 3030,
        },
        esbuild: {
          bundle: true,
          minify: true,
          sourcemap: true,
          exclude: ['aws-sdk'],
          target: 'node18',
          define: {'require.resolve': 'undefined'},
          platform: 'node',
          concurrency: 10,
        },
    },
    functions: {
      getListings,
      getListing,
    },
  };
  
  module.exports = serverlessConfiguration;