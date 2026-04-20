# EuroTap - PHP Hosting Setup

Ovo su fajlovi za klijentov shared hosting (cPanel, Namecheap, Hostinger, itd.)

## Šta uraditi:

1. **Upload web stranice:**
   - Iz `dist/` foldera u Next.js projektu, uploaduj sve fajlove na hosting
   - Stranica će raditi kao statički HTML

2. **Postavi PHP formu:**
   - Uploaduj `contact.php` u root folder (pored index.html)
   - Promijeni email u `contact.php` (linija 6): `$RECIPIENT_EMAIL = "euro.tap6@gmail.com";`

3. **Podesi formu da radi sa PHP:**
   - U `index.html` (ili Contact komponenti ako je Next.js), promijeni form action da ide na `contact.php`

## Napomena:

PHP `mail()` funkcija ponekad ide u spam. Za bolju pouzdanost, razmislite o:
- PHPMailer sa SMTP autentikacijom
- Kontakt form servisima (Formspree, EmailJS)

---

## What to do:

1. **Upload the website:**
   - From the `dist/` folder in the Next.js project, upload all files to your hosting
   - The site will work as static HTML

2. **Set up PHP form:**
   - Upload `contact.php` to the root folder (next to index.html)
   - Change the email in `contact.php` (line 6): `$RECIPIENT_EMAIL = "your-email@example.com";`

3. **Configure the form:**
   - The form in the HTML should POST to `contact.php`

## Note:

PHP `mail()` can sometimes go to spam. For better reliability, consider:
- PHPMailer with SMTP authentication
- Contact form services (Formspree, EmailJS)
