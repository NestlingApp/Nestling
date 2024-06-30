import { GetObjectAclCommand, ListObjectsV2Command, S3Client, S3ClientConfig } from '@aws-sdk/client-s3'

type ClientConfig = S3ClientConfig & {BucketName: string};

export const createS3Client = (config: ClientConfig) => {
    const s3 = new S3Client(config);

    const listObjects = async (prefix: string) => {
        const command = new ListObjectsV2Command({
            Bucket: config.BucketName,
            Prefix: prefix,
        });

        const response = await s3.send(command);

        //if no contents, return empty array
        return response.Contents || [];
    }

    // const getObject = async (key: string) => {
    //     //key is prefix of the object name

    //     const command = new GetObjectAclCommand({
    //         Bucket: config.BucketName,
    //         Key: key,
    //     });

    //     const objectGetResponse = await s3.send(command);

    //     if (!objectGetResponse.Body) {
    //         throw new Error('No body found in response');
    //     }

    //     return objectGetResponse.Body;
    // }

    return {listObjects}
}