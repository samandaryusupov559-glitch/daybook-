# Daybook — ingliz tili kundaligi

Talabalar kunlari haqida ingliz tilida yozadi, o'qituvchi esa grammatikasini tekshiradi.
Har bir talaba faqat o'z kundaligini ko'radi. O'qituvchi hammasini ko'radi.

- **Talaba:** email va parol bilan bir marta ro'yxatdan o'tadi, keyin istalgan qurilmadan kiradi.
- **O'qituvchi:** "Teacher sign-in" tugmasi bilan emailiga kelgan havola orqali kiradi.
- **Yangi yozuvlar:** Inbox'ga keladi. Brauzer yorlig'ida kutayotganlar soni chiqadi, masalan `(3) Daybook`.
- **Tuzatishlar:** talaba "Corrected" tugmasi bilan to'g'rilangan matnni, "My mistakes" bo'limida esa barcha xatolarini ko'radi.

- **Tillar:** yuqoridagi EN / UZ / RU tugmalari bilan sayt ingliz, o'zbek yoki rus tilida ochiladi. Tanlov har bir qurilmada eslab qolinadi. Tarjimalar `i18n.js` faylida.
- **To'lovlar:** o'qituvchi sahifasidagi **To'lovlar** bo'limi (avvalgi Tuition Ledger): oylik to'lov, tushumlar, qarzlar va dars narxi kalkulyatori.
- **Talaba balansi:** to'lovlardagi talabani uning kundalik akkauntiga bog'lasangiz, talaba kirganda **To'lovlarim** bo'limida o'z balansini ko'radi.

Sayt Firebase'siz ham ochiladi, lekin unda faqat namunaviy sinf ko'rinadi va hech narsa saqlanmaydi.

---

## Bir martalik sozlash (taxminan 15 daqiqa)

### 1. Firebase loyihasini oching

1. https://console.firebase.google.com saytiga Google akkauntingiz bilan kiring.
2. **Create a project** tugmasini bosing va nom bering, masalan `daybook`. Google Analytics shart emas.
3. Chap menyuda **Build → Firestore Database → Create database** ni tanlang.
   - Joylashuv: `eur3 (europe-west)`.
   - Rejim: **Production mode**.
4. **Build → Authentication → Get started** ni bosing.
   - **Sign-in method** bo'limida **Email/Password** ni tanlang.
   - Ikkala tugmani yoqing: **Email/Password** va **Email link (passwordless sign-in)**.
   - Talabalar parol bilan kiradi. Bepul tarifda emailga havola kuniga atigi 5 ta xat bilan cheklangan, shuning uchun havoladan faqat siz foydalanasiz.
   - **Save** ni bosing.

### 2. `config.js` faylini to'ldiring

1. Firebase'da ⚙️ **Project settings → General** bo'limiga o'ting.
2. Pastdagi **Your apps** qismida **</>** (Web) belgisini bosing.
3. Ilovaga nom bering va **Register app** ni bosing.
4. Ko'rsatilgan `firebaseConfig` qiymatlarini `config.js` ga ko'chiring.
5. `TEACHER_EMAIL` qatoriga o'zingiz kiradigan emailni yozing.

### 3. Xavfsizlik qoidalarini qo'ying

1. **Firestore Database → Rules** bo'limini oching.
2. `firestore.rules` faylidagi hamma matnni u yerga qo'ying.
3. `teacher@example.com` o'rniga o'z emailingizni yozing. Bu `config.js` dagi email bilan bir xil bo'lishi kerak.
4. **Publish** ni bosing.

Bu qoidalar har bir talabaning yozuvini boshqalardan himoya qiladi.

### 4. GitHub Pages manzilini ruxsat bering

1. **Authentication → Settings → Authorized domains → Add domain** ni bosing.
2. `samandaryusupov559-glitch.github.io` ni qo'shing.

### 5. Saytni yoqing

1. GitHub repozitoriysida **Settings → Pages** bo'limiga o'ting.
2. **Source:** `Deploy from a branch` ni tanlang.
3. **Branch:** `main` va `/ (root)` ni tanlang.
4. Bir daqiqadan keyin sayt shu manzilda ochiladi: `https://samandaryusupov559-glitch.github.io/<repo-nomi>/`

---

## Yangilash: xavfsizlik qoidalari

Yangi bo'limlar (to'lovlar, e'lonlar, vazifalar, band qilish) ishlashi uchun Firebase qoidalarini yangilash kerak. Har safar `firestore.rules` o'zgarsa, shuni takrorlang:

1. **Firestore Database → Rules** bo'limini oching.
2. Yangi `firestore.rules` faylidagi hamma matnni u yerga qo'ying (eski matnni o'chirib).
3. **Publish** ni bosing.

Qoidalar yangilanmaguncha tegishli sahifalarda shu haqda ogohlantirish chiqadi.

**Xavfsizlik:** talaba to'lovlarni, qarzini, narxlarni yoki band qilish holatini o'zgartira olmaydi, boshqa talabaning ma'lumotini ko'ra olmaydi. Buni `tests/rules.test.mjs` tekshiradi (39 ta buzish urinishi, hammasi to'xtatiladi). Firebase → **Authentication → Users** ro'yxatida sizning emailingiz bilan faqat bitta (o'zingizning) akkaunt borligiga ishonch hosil qiling.

## Foydalanish

1. Saytga birinchi bo'lib **o'zingiz** kiring: **Teacher sign-in** tugmasini bosing, `TEACHER_EMAIL` dagi emailni yozing va kelgan havolani o'sha qurilmada oching. O'qituvchi sahifasi ochiladi.
2. Havolani talabalarga yuboring. Har biri **New here? Create an account** tugmasini bosib, emaili va parolini yozadi. Keyin ismi va darajasini kiritadi.
3. Parolini unutgan talaba **Forgot password?** tugmasini bosadi.
4. Yozuvlar **Inbox**'ga keladi. So'zlarni belgilab xato qo'ying, band ball bering va **Return to student** ni bosing.
5. Talaba sahifasida "Your teacher checked…" xabari chiqadi. U xatolarini ko'radi yoki **Please revise** bo'lsa qayta yozadi.
6. **E'lonlar taxtasi:** e'lon yozing (muhimini tepaga mahkamlang), maslahat, so'z yoki idioma postlarini joylang. Shu yerda **butun sinfga vazifa** ham berasiz.
7. **Vazifalar:** talaba sahifasida unga alohida vazifa yoki o'rganadigan narsa qo'shing, muddat qo'yish mumkin. "Yozma vazifa" belgilansa, talaba **Yozish** tugmasi bilan darhol jurnalga yozadi. Talaba bajarganini belgilaydi, siz ko'rasiz.
8. **Xizmatlar va bo'sh vaqtlar:** qo'shimcha dars, kitob o'qish, kino klubi kabi xizmatlarni narxi bilan qo'shing va bo'sh vaqtlaringizni kiriting. Talabalar band qiladi, siz **Band qilishlar** sahifasida tasdiqlaysiz yoki rad etasiz.
9. **Talabalar to'lovi:** **To'lovlar** sahifasining pastida Click, Payme yoki karta raqamingizni qo'shing. Talaba o'z ilovasida to'laydi va **To'ladim** ni bosadi. Xabar **To'lovlar** sahifasining tepasida chiqadi. Pul ilovangizga kelganini tekshiring va **Tasdiqlash** ni bosing: shundagina to'lov hisobga qo'shiladi. Talaba o'zi hech narsani o'zgartira olmaydi.

## Fayllar

| Fayl | Nima uchun |
|---|---|
| `index.html` | Butun sayt: dizayn, o'qituvchi va talaba sahifalari |
| `config.js` | Firebase kalitlari va o'qituvchi emaili |
| `i18n.js` | Ingliz, o'zbek va rus tilidagi barcha matnlar |
| `firestore.rules` | Kim nimani ko'rishi mumkinligi (Firebase'ga qo'yiladi) |
| `tests/rules.test.mjs` | Qoidalarni buzishga urinib tekshiruvchi test |

Firebase'ning bepul tarifi kuniga 50 000 o'qish va 20 000 yozishgacha ruxsat beradi. Bu bir necha o'nlab talabaga bemalol yetadi.
