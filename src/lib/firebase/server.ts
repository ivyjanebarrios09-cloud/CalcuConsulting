import "server-only";

import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY is not set.');
    }
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n');
    const serviceAccount = JSON.parse(serviceAccountKey);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export const firestore = admin.firestore();
