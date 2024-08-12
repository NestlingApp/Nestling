import boto3
import os

def list_buckets(s3):
    response = s3.list_buckets()
    print('Existing buckets:')
    for bucket in response['Buckets']:
        print(f'  {bucket["Name"]}')

def upload_files(directory, bucket_name):
    """Uploads all files in a directory to a specified S3 bucket."""
    s3 = boto3.client('s3')
    # Iterate through all files in the directory
    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        if os.path.isfile(file_path):  # Check if it is a file
            try:
                s3.upload_file(file_path, bucket_name, filename)
                print(f'Successfully uploaded {filename} to {bucket_name}.')
            except NoCredentialsError:
                print("Error: No AWS credentials were found.")
                break
            except PartialCredentialsError:
                print("Error: Incomplete AWS credentials.")
                break
            except Exception as e:
                print(f"Failed to upload {filename}. Reason: {str(e)}")

def main():
    directory = '/Users/josephzhu/Documents/Aivenger/code/converted'
    bucket_name = 'listings-data'
    upload_files(directory, bucket_name)

if __name__ == '__main__':
    main()
