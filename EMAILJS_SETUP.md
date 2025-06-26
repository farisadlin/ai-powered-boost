# EmailJS Setup Guide for AutoGrowth Contact Form

This guide will help you set up EmailJS to handle contact form submissions in your AI-powered marketing automation platform.

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** - you'll need this for your `.env` file

### 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this HTML template (copy and paste directly into EmailJS):

**Subject:** `New Contact Form Submission from {{from_name}}`

**HTML Template:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AutoGrowth Contact Form Submission</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f8f9fa;
      }
      .container {
        background: white;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 3px solid #f97316;
      }
      .logo {
        font-size: 28px;
        font-weight: bold;
        background: linear-gradient(135deg, #f97316, #dc2626);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 10px;
      }
      .subtitle {
        color: #6b7280;
        font-size: 16px;
      }
      .content {
        margin: 20px 0;
      }
      .field {
        margin-bottom: 20px;
        padding: 15px;
        background: #f8fafc;
        border-radius: 8px;
        border-left: 4px solid #f97316;
      }
      .field-label {
        font-weight: 600;
        color: #374151;
        margin-bottom: 5px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .field-value {
        color: #1f2937;
        font-size: 16px;
        word-wrap: break-word;
      }
      .message-field {
        background: #fef3f2;
        border-left-color: #dc2626;
      }
      .message-content {
        white-space: pre-wrap;
        line-height: 1.7;
      }
      .footer {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #e5e7eb;
        text-align: center;
        color: #6b7280;
        font-size: 14px;
      }
      .cta {
        background: linear-gradient(135deg, #f97316, #dc2626);
        color: white !important;
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        display: inline-block;
        margin: 20px 0;
        font-weight: 600;
      }
      .highlight {
        background: #fef3f2;
        padding: 15px;
        border-radius: 8px;
        margin: 20px 0;
        border-left: 4px solid #dc2626;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="logo">AutoGrowth</div>
        <div class="subtitle">AI-Powered Marketing Automation</div>
      </div>

      <div class="content">
        <div class="highlight">
          <strong>🎯 New Lead Alert!</strong> You have received a new contact
          form submission from your website.
        </div>

        <div class="field">
          <div class="field-label">Full Name</div>
          <div class="field-value">{{from_name}}</div>
        </div>

        <div class="field">
          <div class="field-label">Email Address</div>
          <div class="field-value">{{from_email}}</div>
        </div>

        <div class="field">
          <div class="field-label">Company</div>
          <div class="field-value">{{company}}</div>
        </div>

        <div class="field">
          <div class="field-label">Phone Number</div>
          <div class="field-value">{{phone}}</div>
        </div>

        <div class="field message-field">
          <div class="field-label">Message</div>
          <div class="field-value message-content">{{message}}</div>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <a href="mailto:{{from_email}}" class="cta">Reply to {{from_name}}</a>
        </div>
      </div>

      <div class="footer">
        <p><strong>AutoGrowth Contact Form</strong></p>
        <p>
          This email was automatically generated from your website contact form.
        </p>
        <p style="margin-top: 15px; font-size: 12px; color: #9ca3af;">
          Received on {{date}} • AI-Powered Marketing Solutions
        </p>
      </div>
    </div>
  </body>
</html>
```

4. **Copy the Template ID** - you'll need this for your `.env` file

### 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key** - you'll need this for your `.env` file

### 5. Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
# Sanity Configuration
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2023-05-03
VITE_SANITY_USE_CDN=true

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test the Integration

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to the contact section
3. Fill out and submit the contact form
4. Check your email for the submission

## 📧 Email Template Variables

The following variables are automatically populated from the contact form:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company}}` - User's company (optional)
- `{{phone}}` - User's phone (optional)
- `{{message}}` - User's message
- `{{to_name}}` - Set to "AutoGrowth Team"

## 🔧 Customization Options

### Change Recipient Email

To change where emails are sent:

1. In your EmailJS template settings
2. Update the "To Email" field
3. You can use multiple recipients by separating with commas

### Add Auto-Reply

1. Create a second template for auto-replies
2. Modify the Contact component to send two emails:
   - One to you (notification)
   - One to the user (confirmation)

### Custom Email Styling

EmailJS supports HTML templates. You can:

1. Add HTML formatting to your template
2. Include your company branding
3. Add links and images

## 🚨 Troubleshooting

### Common Issues

1. **"EmailJS configuration is missing" error**

   - Check that all environment variables are set correctly
   - Restart your development server after adding `.env` variables

2. **Emails not being sent**

   - Verify your Service ID, Template ID, and Public Key
   - Check the browser console for error messages
   - Ensure your email service is properly configured

3. **Emails going to spam**
   - Use a professional email address for your service
   - Add SPF/DKIM records if using custom domain
   - Test with different email providers

### Testing Tips

1. Use the EmailJS dashboard to send test emails
2. Check your email service logs for delivery status
3. Test with different email addresses

## 📊 Free Tier Limits

- **200 emails per month** on the free plan
- Perfect for contact forms and lead generation
- Upgrade available if you need more volume

## 🔐 Security Notes

- Public Key is safe to expose in frontend code
- Service ID and Template ID are also safe to expose
- Never expose your Private Key in frontend code
- Consider adding reCAPTCHA for spam protection

## 📈 Next Steps

Once EmailJS is working:

1. Set up email notifications for your team
2. Create automated follow-up sequences
3. Integrate with your CRM system
4. Add analytics tracking for form submissions

---

**Need help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/) or contact their support team.
