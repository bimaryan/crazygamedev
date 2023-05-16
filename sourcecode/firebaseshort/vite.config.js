import { defineConfig } from 'vite';
import { createServer } from 'vite';
import { join } from 'path';
import { db } from './src/index';

// Middleware untuk menangani permintaan short link
const handleShortLink = async (req, res, next) => {
  const shortLinkId = req.originalUrl.slice(1);
  const docRef = db.collection('links').doc(shortLinkId);
  const doc = await docRef.get();
  if (doc.exists) {
    const data = doc.data();
    res.statusCode = 301;
    res.setHeader('Location', data.longLink);
    res.end();
  } else {
    next();
  }
};

export default defineConfig({
  server: {
    middleware: [
      (req, res, next) => {
        if (req.method !== 'GET') {
          return next();
        }
        if (req.originalUrl === '/') {
          req.url = '/index.html';
          next();
        } else if (req.originalUrl.length === 8) {
          // 8 adalah panjang ID dokumen di Firestore
          handleShortLink(req, res, next);
        } else {
          next();
        }
      },
    ],
  },
});