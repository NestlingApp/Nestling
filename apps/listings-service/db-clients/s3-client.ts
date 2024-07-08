import { GetObjectCommand, ListObjectsV2Command, S3Client, S3ClientConfig } from '@aws-sdk/client-s3'

type ClientConfig = S3ClientConfig & {BucketName: string};

export const createS3Client = (config: ClientConfig) => {
    const s3 = new S3Client(config);

    const listObjects = async (prefix: string = '') => {
        console.log('Listing objects with prefix:', prefix || 'None (listing all objects)');
        const command = new ListObjectsV2Command({
            Bucket: config.BucketName,
            Prefix: prefix,
        });

        try {
            const response = await s3.send(command);
            //if no contents, return empty array
            return response.Contents || [];
        } catch (error) {
            console.error('Error listing objects:', error);
            throw error;
        }
    }

    const getObject = async (key: string) => {
        console.log('Getting object with key:', key);
        const command = new GetObjectCommand({
          Bucket: config.BucketName,
          Key: key,
        });
    
        try {
            const response = await s3.send(command);
            return response.Body;
        } catch (error) {
            console.error('Error getting object:', error);
            throw error;
        }
      };

    return {listObjects, getObject}
}