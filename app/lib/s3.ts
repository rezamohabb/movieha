import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "default",
  endpoint: process.env.STORAGE_URL,
  credentials: {
    accessKeyId: process.env.STORAGE_ACCESS_KEY,
    secretAccessKey: process.env.STORAGE_SECRET_KEY,
  },
});

export const uploadFile = async (Key: string, Body: Buffer) => {
  const putObjectCommandParams = new PutObjectCommand({
    Key,
    Body,
    Bucket: process.env.STORAGE_BUCKET_NAME,
  });

  await s3Client.send(putObjectCommandParams);
};
