const dev = process.env.NODE_ENV === 'development';

export default {
  API: dev ? 'http://localhost:3100' : 'http://localhost:3100',
  IMAGEBASE: 'https://cafe-react-test.s3.eu-west-2.amazonaws.com/',
};
