# File Renaming Guide - Russian to English

## Problem
Russian filenames can cause encoding issues in web browsers and servers, preventing images from loading properly.

## Solution
Rename your WebP files from Russian to English names as shown below:

## File Renaming Table

| Current Russian Filename | New English Filename |
|-------------------------|---------------------|
| `Модульный дом круглогодичного проживания.webp` | `modular-house-year-round.webp` |
| `Модульное кафе.webp` | `modular-cafe.webp` |
| `Модульный магазин.webp` | `modular-shop.webp` |
| `Модульное техпомещение.webp` | `modular-technical-room.webp` |
| `Модульный гараж.webp` | `modular-garage.webp` |
| `Модульный дом с гаражом.webp` | `modular-house-with-garage.webp` |
| `Модульный салон красоты.webp` | `modular-beauty-salon.webp` |
| `Модульный пункт ВБ.webp` | `modular-pickup-point.webp` |

## How to Rename Files

### Option 1: Using Finder (Mac)
1. Open the `public` folder in Finder
2. Right-click each file → "Rename"
3. Change to the English name from the table above

### Option 2: Using Terminal (Mac/Linux)
Navigate to the public folder and run these commands:

```bash
cd "/Volumes/Work Adata 500/САЙТЫ/LOVA/arthouse-swiftbuild-main/public"

mv "Модульный дом круглогодичного проживания.webp" "modular-house-year-round.webp"
mv "Модульное кафе.webp" "modular-cafe.webp"
mv "Модульный магазин.webp" "modular-shop.webp"
mv "Модульное техпомещение.webp" "modular-technical-room.webp"
mv "Модульный гараж.webp" "modular-garage.webp"
mv "Модульный дом с гаражом.webp" "modular-house-with-garage.webp"
mv "Модульный салон красоты.webp" "modular-beauty-salon.webp"
mv "Модульный пункт ВБ.webp" "modular-pickup-point.webp"
```

## Code Updates Made

The gallery component has been updated to:
1. **Try English filenames first** (no encoding issues)
2. **Fallback to Russian filenames** if English files don't exist
3. **Ultimate fallback** to placeholder images if both fail
4. **Better error logging** to help debug loading issues

## After Renaming

Once you rename the files, the gallery will automatically:
- ✅ Load all 8 images properly
- ✅ Work without encoding issues
- ✅ Have faster loading times
- ✅ Be more compatible across browsers

## Why This Fixes the Problem

- **Browser compatibility**: English characters work universally
- **URL encoding**: No special character encoding needed
- **Server compatibility**: Most servers handle ASCII filenames better
- **CDN friendly**: Better caching and delivery