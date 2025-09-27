# Sanctuary Hub

This is a Next.js application for a modern church website, "Sanctuary Hub".

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

### Google Maps API Key

This project uses Google Maps to display the church location. To enable this feature, you need to provide a Google Maps API key.

1.  Create a `.env.local` file in the root of the project.
2.  Add your Google Maps API key to the file:

    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY_HERE"
    ```

You can get an API key from the [Google Cloud Console](https://cloud.google.com/maps-platform/). Make sure to enable the "Maps JavaScript API".
