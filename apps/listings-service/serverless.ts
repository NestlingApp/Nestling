import Serverless from 'serverless/aws';
import getListings from './src/http/getListings';

const serverlessConfiguration: Serverless = {
    service: 'ListingsService',
    frameworkVersion: '3',
    plugins: ['serverless-esbuild','serverless-offline'],
    provider: {
      name: 'aws',
      runtime: 'nodejs18.x',
      region: 'us-east-1',
    },
    custom: {
        'serverless-offline': {
            httpPort: 3030,
        },
    },
    functions: {
      getListings,
    //   getListing
    },
  };
  
  module.exports = serverlessConfiguration;