# SoftIT Website

A modern, responsive website for SoftIT - an experienced IT consulting company based in Australia.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Comprehensive SEO implementation with meta tags, structured data, and sitemap
- **Modern UI/UX**: Clean, professional design with smooth animations and interactions
- **Fast Loading**: Optimized CSS and JavaScript for excellent performance
- **Accessibility**: Built with accessibility best practices in mind
- **Contact Forms**: Interactive contact forms with validation
- **Click-to-Reveal Phone**: Protected phone number with obfuscation against scrapers
- **GitHub Pages Ready**: Configured for easy deployment on GitHub Pages

## 📁 Project Structure

```
softitwebsite/
├── index.html          # Homepage
├── about.html          # About Us page
├── services.html       # Services page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets (to be added)
├── robots.txt          # Search engine crawling instructions
├── sitemap.xml         # XML sitemap for SEO
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and form handling
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family for modern typography

## 🎨 Design Features

- **Color Scheme**: Professional blue palette (#2c5282, #3182ce, #4299e1)
- **Typography**: Inter font family for excellent readability
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Components**: Reusable components for consistency
- **Animations**: Smooth transitions and hover effects

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## 🔧 Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/softitwebsite.git
   cd softitwebsite
   ```

2. **Open locally**:

   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server in VS Code

3. **For development**:

   ```bash
   # If using Python
   python -m http.server 8000

   # If using Node.js
   npx http-server
   ```

## 🚀 Deployment to GitHub Pages

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial website commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:

   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Custom Domain (Optional)**:
   - Add a `CNAME` file with your domain name
   - Configure DNS settings to point to GitHub Pages

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific sharing metadata
- **Structured Data**: JSON-LD markup for search engines
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Search engine crawling instructions
- **Semantic HTML**: Proper HTML5 semantic elements

## 📞 Contact Information

- **Email**: info@softit.com.au
- **Phone**: Click to reveal on website (protected from scrapers)
- **Website**: https://softit.com.au
- **Location**: Gold Coast, QLD

## 🎯 Pages Overview

### Homepage (`index.html`)

- Hero section with main value proposition
- About section overview
- Services grid
- Contact form

### About Us (`about.html`)

- Company story and mission
- Team values and approach
- Why choose SoftIT
- Call-to-action

### Services (`services.html`)

- Detailed service descriptions
- Process workflow
- Feature highlights
- Contact encouragement

### Contact (`contact.html`)

- Multiple contact methods
- Detailed contact form
- Business hours
- FAQ section

## 🔧 Customization

### Colors

Update the CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #2c5282;
  --secondary-color: #3182ce;
  --accent-color: #4299e1;
  /* ... other colors */
}
```

### Content

- Update company information in HTML files
- Replace placeholder contact details
- Add actual images to `/images/` directory
- Modify service offerings as needed

### Images

Add the following recommended images to `/images/` directory:

- `logo.png` - Company logo (recommended: 200x60px or similar aspect ratio)
- `about-team.jpg` - Team photo
- `hero-bg.jpg` - Hero background (optional)
- `favicon.ico` - Website favicon
- `apple-touch-icon.png` - Apple touch icon
- `og-image.jpg` - Open Graph image for social sharing

**Logo Requirements:**

- Format: PNG with transparent background preferred
- Size: Recommended 200x60px (or maintain 3:1 aspect ratio)
- The logo will be displayed at 40px height on desktop, 35px on mobile
- Fallback: Text "SoftIT" will show if logo image is not available

## 📊 Performance Optimization

- **CSS**: Minify for production
- **JavaScript**: Consider minification for production
- **Images**: Optimize and compress images
- **Fonts**: Preload critical fonts
- **Caching**: Implement browser caching headers

## 🛡️ Security Considerations

- **Contact Forms**: Implement server-side validation and spam protection
- **HTTPS**: Use HTTPS in production (GitHub Pages provides this)
- **Headers**: Add security headers (Content Security Policy, etc.)
- **Phone Protection**: Click-to-reveal system protects phone number from scrapers

### Phone Number Protection

The website implements a sophisticated phone number protection system:

- **Hidden by Default**: Phone numbers are not visible in the HTML source
- **Click-to-Reveal**: Users must click a button to reveal the phone number
- **Obfuscation**: Phone number is encoded and split to prevent scraping
- **User-Friendly**: Provides clear indication that phone is available on click
- **Analytics Ready**: Tracks phone reveals for marketing insights

**How it works**:

1. Phone number is split into parts and base64 encoded
2. JavaScript assembles and decodes the number on user interaction
3. Creates clickable tel: link after reveal for mobile users
4. Includes hover effects and animations for better UX

## 📈 Analytics and Monitoring

Consider adding:

- Google Analytics for traffic monitoring
- Google Search Console for SEO monitoring
- Performance monitoring tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 🆘 Support

For support or questions about this website:

- Email: info@softit.com.au
- Create an issue in this repository

---

Built with ❤️ for SoftIT - Building the building blocks for your success.
