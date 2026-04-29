# PHM Capstone - Family Tree Viewer

Single-page website for viewing PHM family trees, panning/zooming across nodes, and clicking "picking up" members for profile details.

## Run Locally (After Cloning)

### 1) Clone the repo
```bash
git clone https://github.com/sasra-straw/PHM-capstone.git
cd PHM-capstone
```

### 2) Install dependencies
```bash
npm install
```

### 3) Start the dev server
```bash
npm run dev
```

### 4) Open in browser
Vite will print a local URL in terminal (usually):

`http://localhost:5173`

## Other Useful Commands

### Build for production
```bash
npm run build
```

### Preview the production build
```bash
npm run preview
```

## Notes

- Family/member data is currently in `main.js`.
- Uploaded member photos are stored in the browser's local storage.
