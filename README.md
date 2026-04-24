# CTI Google Dork Assistant

Cyber Threat Intelligence (CTI) odaklı Google dork üretim ve çalıştırma arayüzü.
Kullanıcıdan alınan hedefe (domain, anahtar kelime, IP, hash, e-posta) göre uygun sorgular otomatik hazırlanır, filtrelenir ve Google üzerinde çalıştırılır.

---

## Özellikler

- CTI kullanımına uygun **58 farklı dork şablonu**
- Hedef tipine göre otomatik eşleşen sorgular
- Kategori bazlı filtreleme
- Dork içinde metin arama (CVE, phishing, ransomware vb.)
- Tek tıkla Google'da çalıştırma, panoya kopyalama, TXT / JSON dışa aktarma
- React + Tailwind CSS ile geliştirilmiş sade arayüz

---

## Dork Kategori Dağılımı

| Kategori | Adet |
|---|---|
| Threat Reports | 12 |
| IOC Hunting | 12 |
| Actor Tracking | 10 |
| Phishing & Brand Abuse | 10 |
| Vulnerability Monitoring | 8 |
| Dark Web & Leak Signals | 6 |

---

## Teknolojiler

- React.js
- TypeScript
- Tailwind CSS

---

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## Kullanım

1. Hedef tipini seçin (Domain, Anahtar Kelime, IP, Hash, E-posta).
2. Hedef değerini girin.
3. Gerekirse kategori ve metin filtrelerini uygulayın.
4. Sonuç kartlarından **Google'da Çalıştır**, **Kopyala** veya **Doğrudan Bağlantı** butonlarını kullanın.
5. Çıktıları **TXT** veya **JSON** olarak dışa aktarın.
