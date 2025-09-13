# Image Gallery Setup Guide

## Current Image Status

The gallery currently uses a mix of:
- **Your existing SVG files** (already working) from the `public` folder
- **Placeholder images from Unsplash** for demonstration purposes

## Where to Place Your Images

### For Local Images:
Place your images in the **`public` folder** of your project:
```
/Volumes/Work Adata 500/САЙТЫ/LOVA/arthouse-swiftbuild-main/public/
```

### Current Placeholder Images Used:
The gallery currently includes these Unsplash placeholder images:

1. **Construction site** - `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop`
2. **Commercial building** - `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop`
3. **Industrial complex** - `https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop`
4. **Modern architecture** - `https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop`
5. **Building technology** - `https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop`

### Your Working SVG Files (already in public folder):
- ✅ Модульный дом круглогодичного проживания.svg
- ✅ Модульное кафе.svg
- ✅ Модульное техпомещение.svg
- ✅ Модульный гараж.svg
- ✅ Модульный дом с гаражом.svg
- ✅ Модульный магазин.svg
- ✅ Модульный салон красоты.svg
- ✅ Модульный пункт ВБ.svg

## How to Replace Placeholder Images

1. **Add your images** to the `public` folder
2. **Edit** `/src/components/ImageGallery.tsx`
3. **Replace** the placeholder URLs with your local file paths

### Example:
Replace this:
```javascript
{
  src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop',
  title: 'Строительство металлокаркасных сооружений',
  description: 'Современные технологии строительства',
  isPlaceholder: true
}
```

With this:
```javascript
{
  src: '/your-construction-photo.jpg',
  title: 'Строительство металлокаркасных сооружений',
  description: 'Современные технологии строительства',
  isPlaceholder: false
}
```

## Recommended Image Specifications

- **Format**: JPG, PNG, or SVG
- **Dimensions**: 1200x600px (2:1 aspect ratio) for best display
- **File size**: Under 1MB for faster loading
- **Naming**: Use clear, descriptive names (English preferred for file names)

## Gallery Features Working Now

✅ **13 total images** displaying (mix of your SVG files + placeholder photos)  
✅ **Auto-slideshow** with 4-second intervals  
✅ **Manual navigation** with arrows and thumbnails  
✅ **Responsive design** for all screen sizes  
✅ **Error handling** with fallback images  
✅ **Hover controls** and smooth transitions  

The gallery is now fully functional with all 13 images displaying properly!