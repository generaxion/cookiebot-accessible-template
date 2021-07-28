# Cookiebot Accessible Template

Custom template for [Cookiebot](https://www.cookiebot.com/) cookie banners. Copy template files and customize it or use as is. Respects your site's styling but has functional base styling on its own.

Designed for Finnish rendition of EU cookie law but it is similar in many countries in EU.

<img width="1264" alt="Cookiebot banner example" src="https://user-images.githubusercontent.com/9577084/127321743-ed7cdfd7-c7ed-4b72-9f13-d00e1c7137b6.png">

<img width="1297" alt="Cookiebot banner opened" src="https://user-images.githubusercontent.com/9577084/127331091-fac34e57-06f6-40c2-b6f3-860af0da1a1a.png">


## 1. Contents

### 1.1 Principles

* **Accessible**: Build as compliant to WCAG requirements as possible.
* **Minimalism**: Be as neutral and simple as possible – yet stylish.
* **Transparent**: Show cookie categories and individual cookies before making a choice.
* **No deceptive buttons**: "Allow all" button should not be visually bigger, more colorful or prioritized.
* **Free**: As in freedom. Licenced under MIT. Use as you wish.

### 1.2 Dialog structure

* **Overlay**: Separate `<div>` that can have dimming over content
* **Main**: Brief text on cookies and buttons to allow all, allow only necessary and show more details
* **Details**: See cookie categories, single cookies and allow selection of catgories.

## 2. How to setup?

This is sort of general setup of Cookiebot. If you have setup Cookiebot before the only different part is in Dialog tab when you add this custom template.

### 2.1 Setting up account

1. Setup Cookiebot account. Use a local reseller to help or make account yourself.
2. Choose premium plan (custom templates are not available in free version).
3. **Domains** tab: Add new domain group for the website and set scanning frequency. Remember to add development domains in domain aliases.
4. Cookiebot scans your site for cookies. This takes some hours but you can go forward.

### 2.2 Setup dialog (banner)

1. Go to **Dialog** tab
2. Select template "Custom"
3. Method "Explicit consent" (in EU)
4. Copy & paste template files from this repository in `src/dialog-template.css`, `src/dialog-template.html` and `dialog-template.js` and edit (more on this later).
5. Leave function names as is (Name of function to show banner `showCookieBanner` and Name of function to hide banner `hideCookieBanner`)
6. Ignore logo & color as they don't appear in custom template

### 2.3 Setup content

1. Go to **Content** tab
2. Add languages your site is using
3. Tweak text as needed (check also for unnecessary line breaks)

### 2.4 Check cookie categories

1. Go to **Cookies** section from menu
2. Tweak cookie categorization and text as needed

### 2.5 Embed Cookiebot to website

1. If you are using WordPress, using [Cookiebot plugin](https://wordpress.org/plugins/cookiebot/) is recommended.
2. Alternatively copy scripts from **My scripts** tab and follow instructions.
3. Remember to add page to cookie declaration. For example add link to footer as "Manage cookies" and if you are using WordPress plugin, embed declaration with shortcode `[cookie_declaration]`. Otherwise use the declaration JS code from **My scripts** tab.
4. For declaration styling, you might want to copy `src/declaration.css` to your site and enhance it as needed

## 3. How to modify?

### 3.2 Modify the source files in Cookiebot

In Cookiebot dialog editor you can change and save the code for HTML/CSS/JS files and they are automatically served via embed code. For HTML and JS related changes to banner, this is pretty much the only way to do it.

### 3.2 Add styling in website stylesheet

For styling there are more options. You can change CSS in the dialog editor but if you are just adding things on top of the template (like styling for buttons) it can be easier to do it in the website where you might have build processes, variables and other utilities to help you.

The styles rely on ID selectors which mean that overriding styles either need to use ID selectors as well or be stuck with `!important`. ID selectors are used to minimize conflicts with website's own selectors by boosting priority.

As default styles often use `#CookieBanner` on selectors, the easy way to override is to chain two ID selectors as `#CookieBanner #CookieBannerNotice` like `#CookieBanner #CookieBannerNotice .cookiebanner__main`.

## 4. Why custom template?

* Default templates have some issues with accessability
* Default templates have very limited customizing abilities
* Making custom cookie banner is pretty easy when you have good base template (like this)

## 5. Contributions

Thanks to [@samikeijonen](https://github.com/samikeijonen) from accessability help and testing.

