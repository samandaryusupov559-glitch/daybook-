// Daybook settings. Fill these in once (see README.md, step 2).

// Firebase console → Project settings → General → Your apps → Web app → "firebaseConfig"
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID",
};

// The teacher's email. Whoever signs in with this email sees every student's journal.
// It must be the same email you write in firestore.rules.
export const TEACHER_EMAIL = "PASTE_TEACHER_EMAIL";
