# Quotations API Client Demos

The content of this directory (`QuotationsClient/`) should be served using a static web server, such as [`http-server`](https://www.npmjs.com/package/http-server) or a [static website on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html).

## Configuration

Go to the `javascript/api_url.mjs` file and ensure the `API_URL` constant is updated to reflect the actual location
of the quotations web API. This string should include:
 - The protocol: `http://` or `https://`
 - The domain name or IP address: For example, `api.example.com` or `192.168.1.10`
 - The port number: Only if the API is not running on the default HTTP (port 80) or HTTPS (port 443) port. For example, `:8080`
 - Do NOT include a slash character (`/`) at the end of the URL

Example:

```javascript
const API_URL = 'http://api.example.com:8080';
```
