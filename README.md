# 1ishvar.az — Landing Page

> Azərbaycanda günlük əmək bazarını rəqəmsallaşdıran platforma. İş axtaranlarla işəgötürənləri etibarlı, şəffaf və rəqəmsal şəkildə birləşdirən körpü.

![Status](https://img.shields.io/badge/Status-İnkişaf%20mərhələsi-blue)
![Demo](https://img.shields.io/badge/Demo-17%20Aprel%202026-6ee7f7)
![Progress](https://img.shields.io/badge/Progress-5%25-a78bfa)
![License](https://img.shields.io/badge/License-All%20rights%20reserved-red)

**🔗 Canlı baxış:** [muzafferus.github.io/1ishvar](https://muzafferus.github.io/1ishvar)

---

## Problem

20-25 il əvvəl olduğu kimi bu gün də insanlar **bazarların qarşısında** saatlarla dayanıb kiminsə gəlib onlara iş verməsini gözləyir. Yağış, soyuq, günəş demədən. El arasında bu yerlərə **"qul bazarı"** deyilir.

Problem yalnız bir tərəfli deyil:

- **İşçi tərəfi** — iş tapmaq üçün hər gün bazara getmək məcburiyyəti, qeyri-müəyyənlik, güvənsizlik
- **İşəgötürən tərəfi** — evə, həyətinə kimin gəldiyini bilmir, keyfiyyət təminatı yoxdur, tanışlıq vasitəsilə işçi axtarmaq məcburiyyəti

Hal-hazırda insanlar tap.az, Facebook qrupları və sosial şəbəkə paylaşımları vasitəsilə çarə axtarır. Lakin hər iki tərəfi birləşdirən, **güvən verən bir rəqəmsal körpü** mövcud deyil.

---

## Həll

**1ishvar.az** — günlük əmək bazarını rəqəmsallaşdıran, işçi ilə işəgötürəni şəffaf və etibarlı şəkildə birləşdirən platformadır.

### Necə işləyir

| Addım | İşçi | İşəgötürən |
|-------|------|------------|
| **1** | Profil yaradır — nə iş gördüyünü və günlük qiymətini qeyd edir (3 sahəyə qədər) | Elan paylaşır |
| **2** | Elanlara müraciət edir | Müraciətləri nəzərdən keçirir, istədiyi işçi ilə razılaşır |
| **3** | İşi tamamlayır, nəğd ödəniş alır | İşi qəbul edir |
| **4** | İşəgötürəni dəyərləndirir | İşçini dəyərləndirir |

> Platforma məntiqi **Upwork** (elan + müraciət sistemi) və **Airbnb** (rəy sistemi) modelindən ilhamlanır.

### Ödəniş

Ödəniş sistemi **booking modelindədir** — işəgötürən işçiyə nəğd (əldən) ödəniş edir. Online ödəniş tələb edilmir, çünki günlük işçiləri bank hesabı açmağa məcbur etmək əlçatanlığı azaldır.

### Rəy Sistemi

- İş bitdikdən sonra **hər iki tərəf** bir-birini dəyərləndirir
- Yalnız real iş əlaqəsi olan tərəflər rəy yaza bilər
- Rəy toplamaq istəyən hər kəs platformadan istifadə etməyə məcburdur

---

## Gəlir Modeli

| Mənbə | Təfərrüat |
|-------|-----------|
| **Komissiya** | Platformadan iş tapan işçinin aylıq gəlirinin 1–2%-i |
| **İnvoys sistemi** | Aylıq hesab göndərilir, 10 gün ödəmə müddəti |
| **Hesab dondurma** | Borcunu ödəməyən istifadəçinin hesabı dondurulur |
| **Reklam** | Platforma daxili reklam gəliri |
| **Sığorta** *(gələcək)* | Sığorta şirkəti ilə pilot: günlük işçi sığortası, komissiya modeli |

---

## Gələcək Planlar

- 🪪 **Sima (üz) tanıma** ilə hesab yaratma — 1 şəxs = 1 hesab
- 🛡️ **Günlük işçi sığortası** — sığorta şirkəti ilə pilot tərəfdaşlıq
- 📊 **İzləmə mexanizmi** — platforma xarici razılaşmaların aşkarlanması
- 🌍 **Genişlənmə** — digər şəhər və regionlar

---

## Texnologiya

Bu repo hazırda **landing page**-dən ibarətdir:

```
index.html      # Əsas səhifə (vanilla HTML + CSS + JS)
README.md       # Bu fayl
```

- Xarici asılılıq yoxdur — sıfır framework, sıfır build prosesi
- Google Fonts (Plus Jakarta Sans)
- Vanilla JavaScript — canlı geri sayım timer
- CSS animasiyalar — glassmorphism, mesh gradient, shimmer effekti
- Tam responsiv dizayn

---

## Hədəf Auditoriya

| Qrup | Təsvir |
|------|--------|
| 👷 **Günlük işçilər** | Tikinti, təmizlik, bağ-bağça, daşınma və s. xidmət göstərənlər |
| 🏠 **Ev / həyət sahibləri** | Bir günlük iş üçün etibarlı işçi axtaranlar |
| 🏢 **Kiçik biznes** | Qısamüddətli işçi ehtiyacı olan müəssisələr |
| 📈 **İnvestorlar** | Azərbaycanda sosial təsirli texnologiya layihələrinə maraq göstərənlər |

---

## Demo

**📅 17 Aprel 2026, axşam saat 20:00**

Demo-ya qatılmaq və ya maraqlı olmaq üçün:

| | Keçid |
|-|-------|
| 👥 Komandaya qoşulun | [forms.gle/MfoGDU96j4ovkm6M6](https://forms.gle/MfoGDU96j4ovkm6M6) |
| 📈 İnvestisiya və dəstək | [forms.gle/W1tx2Q5iMggRKqQs6](https://forms.gle/W1tx2Q5iMggRKqQs6) |
| 🔔 Hazır olanda xəbər ver | [forms.gle/VGMx9TKdaNmbHLdr5](https://forms.gle/VGMx9TKdaNmbHLdr5) |

---

## Sosial Şəbəkələr

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](#)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=flat&logo=youtube&logoColor=white)](#)
[![TikTok](https://img.shields.io/badge/TikTok-000000?style=flat&logo=tiktok&logoColor=white)](#)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](#)

---

## Lisenziya

© 2026 1ishvar.az — Bütün hüquqlar qorunur.
