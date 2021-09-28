# Cookiebot Accessible Template

Custom template for [Cookiebot](https://www.cookiebot.com/) cookie banners. Copy template files and customize it or use as is. Respects your site's styling but has functional base styling on its own.

Designed for Finnish rendition of EU cookie law but it is similar in many countries in EU.

## Dialog 1: Neutral

True neutral option without highlighted accept button and banner is located at the bottom of the screen without blocking the user before decision.

![Cookiebot neutral template 1](https://user-images.githubusercontent.com/9577084/127321743-ed7cdfd7-c7ed-4b72-9f13-d00e1c7137b6.png)

![Cookiebot neutral template 2](https://user-images.githubusercontent.com/9577084/127331091-fac34e57-06f6-40c2-b6f3-860af0da1a1a.png)

## Dialog 2: Optimized

Includes permitted (at least by Finnish version of EU Cookie Law) ways to optimize interaction by positioning banner to the center of the screen and blocking interaction with site before decision (by mouse or touch). Accept button is highlghted with color but declining is as easy as accepting.

![Cookiebot optimized template 1](https://user-images.githubusercontent.com/9577084/135088685-ecb3c20c-de3a-43e4-8f07-af057852e045.png)

![Cookiebot optimized template 2](https://user-images.githubusercontent.com/9577084/135088699-96d0b293-b9a3-4eff-8b2d-88b78436b9f7.png)

## 1. Contents

### 1.1 Principles

* **Accessible**: Build as compliant to WCAG 2.1 requirements as possible.
* **Minimalism**: Be as neutral and simple as possible – yet stylish.
* **Transparent**: Show cookie categories and individual cookies before making a choice.
* **No deceptive buttons**: Allowing and declining should be equally easy.
* **8 point grid**: Made in logical units but to ensure compatibility to all websites `px` unit is used instead of `rem`.
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
4. Cookiebot scans your site for cookies. This takes 1-24 hours but you can move forward already.

### 2.2 Setup dialog (banner)

1. Go to **Dialog** tab
2. Select template "Custom"
3. Method "Explicit consent" (for EU cookie law)
4. Copy & paste template files from this repository. Use either `dialog-neutral` or `dialog-optimized`. Copy content from files to their respective fields `template.css`, `template.html` and `template.js`. See "How to modify" for info on customization.
5. Leave function names as is (Name of function to show banner `showCookieBanner` and Name of function to hide banner `hideCookieBanner`)
6. Ignore logo & color as they don't appear in custom template

### 2.3 Setup content

1. Go to **Content** tab
2. Add languages your site is using
3. Tweak text as needed.

### 2.4 Check cookie categories

1. Go to **Cookies** section from menu
2. Tweak cookie categorization and text as needed.

### 2.5 Embed Cookiebot to website

1. If you are using WordPress, using [Cookiebot plugin](https://wordpress.org/plugins/cookiebot/) is recommended. Add ID, set cookie bloking mode to "auto" and language to "WordPress language".
2. Alternatively copy scripts from **Your scripts** tab and follow instructions.
3. Remember to add page to cookie declaration. For example add link to footer as "Manage cookies" and if you are using WordPress plugin, embed declaration with shortcode `[cookie_declaration]`. Otherwise use the declaration JS code from **Your scripts** tab.
4. For declaration styling, you might want to copy `declaration/declaration.css` to your site and enhance it as needed.

## 3. How to modify?

### 3.1 Modify the source files in Cookiebot

In Cookiebot dialog editor you can change and save the code for HTML/CSS/JS files and they are automatically served via embed code. For HTML and JS related changes to banner, this is pretty much the only way to do it.

### 3.2 Add styling in website stylesheet

For styling there are more options. You can change CSS in the dialog editor but if you are just adding things on top of the template (like styling for buttons) it can be easier to do it in the website. Or if you have multiple projects/customers in same domain group, you can personalize the banners in website code.

The styles rely on ID selectors which mean that overriding styles either need to use ID selectors as well or be stuck with `!important`. ID selectors are used to minimize conflicts with website's own selectors by boosting priority.

As default styles often use `#CookieBanner` on selectors, the easy way to override is to chain two ID selectors as `#CookieBanner #CookieBannerNotice` like `#CookieBanner #CookieBannerNotice .cookiebanner__main`.

These templates include lots of CSS variables that let you customize the template for most use cases by just defining CSS variables.

#### CSS variables defined

These variables exist in both templates.

```
// layout
--cb-dialog-max-width

// overlay
--cb-overlay-background

// base typopgraphy
--cb-text-color

// title
--cb-title-font-family
--cb-title-font-weight
--cb-title-font-size-mobile
--cb-title-font-size-desktop

// description
--cb-description-font-size-mobile
--cb-description-font-size-desktop
--cb-description-font-family
--cb-description-font-weight

// base button
--cb-button-border
--cb-button-border-radius
--cb-button-background
--cb-button-font-weight
--cb-button-font-size
--cb-button-font-family
--cb-button-color

// base button :hover/:focus/:active
--cb-button-active-color
--cb-button-active-background
--cb-button-active-border

// accept button (inherits all base button settings)
--cb-accept-button-color
--cb-accept-button-background
--cb-accept-button-border
--cb-accept-button-active-color
--cb-accept-button-active-background
--cb-accept-button-active-border

// details button (doesn't inherit base button settings)
--cb-details-button-font-size

// preference accent color (toggle control)
--cb-preference-accent-color
```

#### Using variables

**Notice that you only need to define/change those variables that you want. You don't have to define/use them all.**

**Example 1: Styling accept button in website stylesheet**

You can define variables in :root.

```
:root {
  --cb-accept-button-color: #fff;
  --cb-accept-button-background: #f0f0f0;
}
```

**Example 2: Styling buttons in Cookiebot style field**

At the moment :root is not supported in Cookiebot custom code but you can set the variables for the wrapper where they are inherited downwards.

```
#CookieBanner {
  --cb-button-border: 0;
  --cb-button-border-radius: 0;
  --cb-button-background: #0f0f0f;
  --cb-button-font-weight: 500;
  --cb-button-font-size: 16px;
  --cb-button-font-family: sans-serif;
  --cb-button-color: #fff;
  --cb-button-active-color: #0f0f0f;
  --cb-button-active-background: #ddd;
  --cb-button-active-border: 0;
}
```

Notice that you can also change the base styles as you want but it can be easier to define variables in the start of the code.

### 3.3 Testing your cookie banner

Notice that in Cookiebot settings you can preview your cookie dialog. With custom templates this is only partly helpful. Yes, you can see that your HTML and JS are functional but your styling will be incomplete as some of your websites styles will be inherited (mostly fonts). So best way to test the dialog is using development/staging site with domain alias in the **Domains** tab.

## 4. Why custom template?

* Default templates have some issues with accessability.
* Default templates have very limited customizing abilities.
* Making custom cookie banner is pretty easy when you have good base template (like this).
* You can integrate cookie banner seamlessly to site's look and feel.

## 5. Contributions

Thanks to [@samikeijonen](https://github.com/samikeijonen) from accessability help and testing.

