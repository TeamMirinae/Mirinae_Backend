const EnvConfig = () => ({
  serverConfig: {
    port: parseInt(process.env.SERVER_PORT, 10) || 3000,
    url: process.env.SERVER_URL,
    version: process.env.SERVER_VERSION,
  },
  dbConfig: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
  },
  redisConfig: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  s3Config: {
    name: process.env.S3_BUCKET_NAME,
    region: process.env.S3_BUCKET_REGION,
    uid: process.env.S3_IAM_UID,
    secret: process.env.S3_IAM_SECRET,
  },
  kakaoConfig: {
    uid: process.env.KAKAO_CLIENT_UID,
    redirect: process.env.KAKAO_REDIRECT_URI,
  },
});

export default EnvConfig;
