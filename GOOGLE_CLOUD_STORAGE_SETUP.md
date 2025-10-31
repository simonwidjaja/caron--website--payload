# Google Cloud Storage Setup Guide

This project uses Google Cloud Storage for media uploads in both local and production environments.

## Setup Steps

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Note your **Project ID**

### 2. Enable Cloud Storage API

1. In Google Cloud Console, go to **APIs & Services** → **Library**
2. Search for "Cloud Storage API"
3. Click **Enable**

### 3. Create a Storage Bucket

1. Go to **Cloud Storage** → **Buckets**
2. Click **Create Bucket**
3. Configure:
   - **Name**: Choose a globally unique name (e.g., `caron-website-media`)
   - **Region**: Choose closest to your users (e.g., `europe-west3` for Germany)
   - **Storage class**: Standard
   - **Access control**: Fine-grained
   - **Public access**: Do NOT allow public access (we'll configure CORS separately)
4. Click **Create**

### 4. Configure CORS (Optional - for direct browser uploads)

If you want to allow uploads directly from the browser:

1. Create a file `cors.json`:
```json
[
  {
    "origin": ["http://localhost:3000", "https://yourdomain.com"],
    "method": ["GET", "POST", "PUT", "DELETE"],
    "responseHeader": ["Content-Type"],
    "maxAgeSeconds": 3600
  }
]
```

2. Apply CORS configuration:
```bash
gcloud storage buckets update gs://your-bucket-name --cors-file=cors.json
```

### 5. Create a Service Account

1. Go to **IAM & Admin** → **Service Accounts**
2. Click **Create Service Account**
3. Configure:
   - **Name**: `payload-cms-storage` (or any name)
   - **Description**: "Service account for Payload CMS storage"
4. Click **Create and Continue**
5. Grant role: **Storage Object Admin**
6. Click **Done**

### 6. Create Service Account Key

1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** → **Create new key**
4. Choose **JSON** format
5. Click **Create**
6. Save the downloaded JSON file securely (e.g., `gcs-service-account.json`)

⚠️ **IMPORTANT**: Never commit this file to git!

### 7. Configure Local Environment

1. Move the service account JSON file to your project (outside of git):
```bash
mv ~/Downloads/your-project-xxxxx.json ./gcs-service-account.json
```

2. Add to `.gitignore`:
```
gcs-service-account.json
```

3. Update your `.env` file:
```env
GCS_BUCKET=caron-website-media
GCS_PROJECT_ID=your-project-id
GCS_CREDENTIALS=./gcs-service-account.json
```

### 8. Configure Vercel/Production Environment

For production (Vercel), you need to use base64 encoded credentials:

1. Encode the JSON file to base64:
```bash
base64 -i gcs-service-account.json | tr -d '\n' > gcs-credentials-base64.txt
```

2. Copy the contents of `gcs-credentials-base64.txt`

3. In Vercel Dashboard:
   - Go to your project → **Settings** → **Environment Variables**
   - Add these variables for **Production** environment:
     - `GCS_BUCKET`: `caron-website-media`
     - `GCS_PROJECT_ID`: `your-project-id`
     - `GCS_CREDENTIALS_BASE64`: (paste the base64 string)

4. Also add for **Preview** environment if you want staging to use GCS

### 9. Test the Setup

1. Start your dev server:
```bash
pnpm run dev
```

2. Go to `http://localhost:3000/admin`
3. Navigate to **Media**
4. Try uploading an image
5. Check your Google Cloud Storage bucket - the image should appear there

### 10. Make Uploaded Files Public (Optional)

If you want uploaded files to be publicly accessible:

1. Go to your bucket in Google Cloud Console
2. Select **Permissions** tab
3. Click **Grant Access**
4. Add principal: `allUsers`
5. Role: **Storage Object Viewer**
6. Click **Save**

Or use command line:
```bash
gcloud storage buckets add-iam-policy-binding gs://your-bucket-name \
  --member=allUsers \
  --role=roles/storage.objectViewer
```

## URLs

After setup, your uploaded media will be accessible at:
```
https://storage.googleapis.com/your-bucket-name/filename.jpg
```

Or with custom domain (if configured):
```
https://media.yourdomain.com/filename.jpg
```

## Pricing

Google Cloud Storage pricing (as of 2024):
- **Storage**: ~$0.020/GB per month (Standard class, Europe)
- **Bandwidth**: 
  - First 1 GB/month: Free
  - 1 GB - 10 TB/month: $0.12/GB
  - 10 TB - 150 TB/month: $0.11/GB

Example costs for a small website:
- 10 GB storage: ~$0.20/month
- 50 GB bandwidth: ~$6/month
- **Total**: ~$6.20/month

## Troubleshooting

### Error: "Could not load the default credentials"

**Solution**: Make sure `GCS_CREDENTIALS` path is correct in your `.env` file

### Error: "Access denied"

**Solution**: Check that your service account has **Storage Object Admin** role

### Images not appearing

**Solution**: 
1. Check if files are in the bucket
2. Verify bucket permissions (public access if needed)
3. Check CORS configuration

### Local development works but production fails

**Solution**: 
1. Verify `GCS_CREDENTIALS_BASE64` is set correctly in Vercel
2. Make sure the base64 string has no line breaks
3. Check Vercel deployment logs for errors

## Security Best Practices

1. ✅ Never commit service account keys to git
2. ✅ Use separate buckets for dev/staging/production
3. ✅ Regularly rotate service account keys
4. ✅ Use principle of least privilege (only grant necessary permissions)
5. ✅ Enable bucket versioning for backup
6. ✅ Set up lifecycle rules to delete old versions

## Next Steps

Once Google Cloud Storage is configured:
1. Test uploads in local development
2. Test uploads in Vercel preview deployments
3. Configure CDN (optional, for better performance)
4. Set up custom domain for media (optional)
