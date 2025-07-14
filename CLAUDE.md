# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repository contains multilingual landing pages for the "대충한국어" (Speed Korean) marketing website. This is a static website that promotes the Korean language learning application with 4x speed learning methodology.

## Common Development Commands

### Image Generation
- **Node.js PNG Generation**: `node convert-svg-to-png.js`
  - Requires `canvas` package: `npm install canvas`
  - Generates high-quality 1200x630 Open Graph images
  - Creates `og-image.png` from SVG-like drawing commands

### Testing and Previewing
- **Local Development**: Open HTML files directly in browser or use local server
- **Live Preview**: Deploy to GitHub Pages at `https://osam555.github.io/da-kor/`
- **Browser-based Image Generation**: Open `create-png-image.html` in browser

## Project Structure

```
korean-webpage/
├── index.html              # Korean landing page (main)
├── en.html                 # English landing page
├── zh.html                 # Chinese landing page
├── hi.html                 # Hindi landing page
├── og-image.png            # Open Graph image for Korean
├── og-image-en.png         # Open Graph image for English
├── og-image.svg            # SVG source for OG images
├── convert-svg-to-png.js   # Node.js script to generate PNG from SVG
└── create-png-image.html   # Browser-based PNG generator
```

## Core Architecture

### Static HTML Architecture
- **No Build System**: Pure HTML, CSS, and JavaScript - no compilation needed
- **Inline Styling**: All CSS embedded in `<style>` tags within each HTML file
- **Self-Contained Pages**: Each language page is completely independent
- **Direct Browser Compatible**: No transpilation or bundling required

### Multi-Language Implementation
- **4 Languages**: Korean (main), English, Chinese, Hindi
- **Duplicate Structure**: All pages follow identical layout with translated content
- **Language-Specific Meta**: Localized titles, descriptions, and Open Graph tags
- **Cross-Language Navigation**: Language selector in top-left corner with flag emojis

### SEO and Social Media
- **Open Graph Tags**: Customized for each language with specific images
- **Twitter Cards**: Social media preview optimization
- **Structured Data**: Schema.org Course markup for search engines
- **Meta Tags**: Language-specific descriptions and keywords

### Visual Design System
- **Color Scheme**: Purple-blue gradient (`#667eea` to `#764ba2`)
- **Typography**: Noto Sans KR font with system font fallbacks
- **Responsive Design**: Mobile-first approach with 768px breakpoint
- **Dark Mode**: Full dark theme support with localStorage persistence

## Key Features

### Theme Management
- **Dark/Light Toggle**: Fixed position theme switcher (top-right)
- **Persistent Storage**: Theme preference saved in localStorage
- **Dynamic Icons**: Moon/sun icons for theme states

### Language Selection
- **Position**: Top-left corner (recently moved from top-right)
- **Visual Design**: Glassmorphism effect with backdrop blur
- **Flag Emojis**: Country flags for visual language identification
- **Active State**: Highlighted current language

### Mobile Optimization
- **Responsive Typography**: Scaled font sizes for mobile
- **Touch Targets**: Minimum 44px touch areas
- **Optimized Spacing**: Reduced padding and margins on mobile
- **Language Selector**: Smaller size and tighter spacing on mobile

## Content Strategy

### Learning Methodology
- **4x Speed Learning**: Based on Harvard 16x speed study method
- **Practical Focus**: 1,800-2,700 daily Korean sentences
- **Scientific Approach**: Brain activation and neural pathway explanations
- **Target Audience**: Foreign students, workers, and residents in Korea

### Marketing Sections
1. **Hero Section**: Main value proposition with gradient background
2. **Why Section**: Benefits and methodology explanation
3. **Science Section**: Neurological learning benefits
4. **Target Audience**: Specific user personas
5. **Learning Guide**: Step-by-step methodology
6. **Results Section**: Expected outcomes and improvements
7. **Content Section**: Specialized K-Beauty and culture content

## Technical Implementation

### CSS Architecture
- **Unified Styling**: Single `<style>` block per page
- **CSS Custom Properties**: Consistent color and spacing variables
- **Mobile-First**: Progressive enhancement for larger screens
- **Performance**: Inline styles for faster loading

### JavaScript Functionality
- **Theme Toggle**: Local storage persistence
- **DOM Manipulation**: Dynamic class additions for theme switching
- **Event Handling**: Click events for interactive elements

## Image Generation Tools

### convert-svg-to-png.js
- **Purpose**: Node.js script for server-side PNG generation
- **Dependencies**: Canvas library for image rendering
- **Output**: High-quality 1200x630 Open Graph images

### create-png-image.html
- **Purpose**: Browser-based PNG generator
- **Canvas API**: Client-side image creation
- **Interactive**: Download button for generated images

## Development Workflow

### Adding New Languages
1. Copy existing language file (e.g., `en.html`)
2. Update `lang` attribute in `<html>` tag
3. Translate all content sections
4. Update meta tags and Open Graph properties
5. Add language option to all language selectors
6. Generate language-specific OG image

### Styling Changes
- **Consistent Updates**: Apply changes to all language files
- **Mobile Testing**: Verify responsive behavior
- **Dark Mode**: Test both light and dark themes
- **Cross-Browser**: Check compatibility across browsers

### SEO Optimization
- **Meta Tags**: Update descriptions and keywords
- **Structured Data**: Maintain schema.org compliance
- **Open Graph**: Ensure proper social media previews
- **Performance**: Optimize loading speed and Core Web Vitals

## Deployment

### Static Hosting
- **GitHub Pages**: Deployed to `https://osam555.github.io/da-kor/`
- **Direct Access**: All HTML files accessible via direct URLs
- **Asset Paths**: Relative paths for images and resources

### URL Structure
- Korean: `/da-kor/` or `/da-kor/index.html`
- English: `/da-kor/en.html`
- Chinese: `/da-kor/zh.html`
- Hindi: `/da-kor/hi.html`

## Best Practices

### Content Updates
- **Consistency**: Maintain identical structure across languages
- **Localization**: Adapt content culturally, not just linguistically
- **Brand Voice**: Consistent enthusiasm and educational tone

### Performance
- **Inline Styles**: Avoid external CSS files for faster loading
- **Font Loading**: Use `font-display: swap` for better performance
- **Image Optimization**: Compress OG images for faster social sharing

### Accessibility
- **Language Attributes**: Proper `lang` attributes for screen readers
- **Semantic HTML**: Use appropriate heading hierarchy
- **Color Contrast**: Ensure sufficient contrast in both themes
- **Keyboard Navigation**: Support for keyboard-only users