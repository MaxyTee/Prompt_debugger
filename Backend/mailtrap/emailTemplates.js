export const WelcomeEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Prompt Analyzer</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #000000;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #ffffff;
            padding: 30px;
            text-align: center;
            color: #000000;
            border-bottom: 2px solid #000000;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
        }
        .content {
            padding: 30px;
        }
        .message {
            background-color: #f5f5f5;
            border-left: 4px solid #000000;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
        .steps {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 20px;
            margin: 20px 0;
        }
        .step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
        }
        .step:last-child {
            margin-bottom: 0;
        }
        .step-number {
            background-color: #000000;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: bold;
            margin-right: 12px;
            flex-shrink: 0;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            color: #666666;
            font-size: 14px;
        }
        .button {
            display: inline-block;
            background-color: #000000;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            margin: 15px 0;
        }
        .contact-info {
            background-color: #f0f0f0;
            border: 1px solid #cccccc;
            border-radius: 6px;
            padding: 15px;
            margin: 20px 0;
        }
        .code {
            font-family: monospace;
            background-color: #000000;
            color: #ffffff;
            padding: 15px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 5px;
            border-radius: 6px;
            margin: 20px 0;
        }
        .success-icon {
            font-size: 48px;
            text-align: center;
            margin: 20px 0;
        }
        .feature {
            background-color: #f8f8f8;
            border-radius: 6px;
            padding: 15px;
            margin: 10px 0;
            border-left: 3px solid #000000;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to Prompt Analyzer</h1>
            <p>Your AI Prompt Analysis Journey Begins</p>
        </div>

        <div class="content">
            <p>Dear <strong>"{username}"</strong>,</p>

            <p>Welcome to Prompt Analyzer! Your account has been successfully created and you're now ready to optimize your AI interactions.</p>

            <div class="message">
                <p><strong>Get Started:</strong> Begin analyzing and improving your AI prompts to get better results from language models.</p>
            </div>

            <div class="steps">
                <h3 style="margin-top: 0; color: #000000;">Quick Start Guide:</h3>

                <div class="step">
                    <div class="step-number">1</div>
                    <div>
                        <strong>Upload Your Prompts</strong>
                        <p style="margin: 5px 0 0 0; color: #333333;">Start by uploading your existing prompts or create new ones in our editor.</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">2</div>
                    <div>
                        <strong>Run Analysis</strong>
                        <p style="margin: 5px 0 0 0; color: #333333;">Use our AI-powered analysis tools to evaluate prompt effectiveness.</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">3</div>
                    <div>
                        <strong>Get Insights</strong>
                        <p style="margin: 5px 0 0 0; color: #333333;">Receive detailed feedback on clarity, specificity, and potential improvements.</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">4</div>
                    <div>
                        <strong>Optimize & Compare</strong>
                        <p style="margin: 5px 0 0 0; color: #333333;">Test different versions and track performance metrics.</p>
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin: 25px 0;">
                <a href="[Dashboard Link]" class="button">Access Your Dashboard</a>
            </div>

            <div class="contact-info">
                <h4 style="margin-top: 0; color: #000000;">Need Help?</h4>
                <p style="margin: 5px 0; color: #333333;">Check out our documentation or contact our support team for assistance with prompt analysis.</p>
            </div>

            <p>We're excited to help you master the art of prompt engineering!</p>

            <p>Best regards,<br>
            <strong>The Prompt Analyzer Team</strong></p>
        </div>

        <div class="footer">
            <p>&copy; 2024 Prompt Analyzer. All rights reserved.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`;

export const ForgotPasswordEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password - Prompt Analyzer</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #000000;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #ffffff;
            padding: 30px;
            text-align: center;
            color: #000000;
            border-bottom: 2px solid #000000;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            color: #666666;
            font-size: 14px;
        }
        .button {
            display: inline-block;
            background-color: #000000;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            margin: 20px 0;
        }
        .message {
            background-color: #f5f5f5;
            border-left: 4px solid #000000;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Request</h1>
            <p>Prompt Analyzer Account Security</p>
        </div>

        <div class="content">
            <p>Dear <strong>[User Name]</strong>,</p>

            <p>We received a request to reset your password for your Prompt Analyzer account. If you didn't make this request, please ignore this email.</p>

            <div style="text-align: center;">
                <a href="[Reset Link]" class="button">Reset Your Password</a>
            </div>

            <div class="message">
                <p><strong>Security Note:</strong> This password reset link will expire in 1 hour for your protection.</p>
            </div>

            <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
            <p style="word-break: break-all; color: #333333; background-color: #f5f5f5; padding: 10px; border-radius: 4px;">[Reset Link]</p>

            <p>For optimal account security, we recommend:</p>
            <ul>
                <li>Using a strong, unique password</li>
                <li>Enabling two-factor authentication</li>
                <li>Regularly updating your password</li>
                <li>Never sharing your credentials</li>
            </ul>

            <p>Best regards,<br>
            <strong>The Prompt Analyzer Team</strong></p>
        </div>

        <div class="footer">
            <p>&copy; 2024 Prompt Analyzer. All rights reserved.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`;

export const PasswordResetSuccessTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful - Prompt Analyzer</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #000000;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #ffffff;
            padding: 30px;
            text-align: center;
            color: #000000;
            border-bottom: 2px solid #000000;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            color: #666666;
            font-size: 14px;
        }
        .success-icon {
            font-size: 48px;
            text-align: center;
            margin: 20px 0;
        }
        .message {
            background-color: #f5f5f5;
            border-left: 4px solid #000000;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
        .button {
            display: inline-block;
            background-color: #000000;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Successful</h1>
            <p>Your Prompt Analyzer Account is Secure</p>
        </div>

        <div class="content">
            <div class="success-icon">✓</div>

            <p>Dear <strong>[User Name]</strong>,</p>

            <p>Your Prompt Analyzer password has been successfully reset.</p>

            <div class="message">
                <p><strong>Security Confirmation:</strong> This password change was completed on [Date] at [Time]. If you didn't authorize this change, please contact our support team immediately.</p>
            </div>

            <p>You can now log in to your account using your new password and continue analyzing your AI prompts.</p>

            <div style="text-align: center;">
                <a href="[Login Link]" class="button">Login to Prompt Analyzer</a>
            </div>

            <p>To maintain account security:</p>
            <ul>
                <li>Use a unique password not used for other services</li>
                <li>Consider enabling two-factor authentication</li>
                <li>Regularly review your account activity</li>
                <li>Keep your recovery email updated</li>
            </ul>

            <p>Best regards,<br>
            <strong>The Prompt Analyzer Team</strong></p>
        </div>

        <div class="footer">
            <p>&copy; 2024 Prompt Analyzer. All rights reserved.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`;

export const OTPEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Verification Code - Prompt Analyzer</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #000000;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #ffffff;
            padding: 30px;
            text-align: center;
            color: #000000;
            border-bottom: 2px solid #000000;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            color: #666666;
            font-size: 14px;
        }
        .code {
            font-family: monospace;
            background-color: #000000;
            color: #ffffff;
            padding: 15px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 5px;
            border-radius: 6px;
            margin: 20px 0;
        }
        .message {
            background-color: #f5f5f5;
            border-left: 4px solid #000000;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Your Verification Code</h1>
            <p>Prompt Analyzer Account Security</p>
        </div>

        <div class="content">
            <p>Dear <strong>[User Name]</strong>,</p>

            <p>Use the following One-Time Password (OTP) to complete your verification process:</p>

            <div class="code">"{verificationCode}"</div>

            <div class="message">
                <p><strong>This code will expire in 10 minutes.</strong> For security reasons, please do not share this code with anyone.</p>
            </div>

            <p>If you didn't request this verification code, please ignore this email or contact our support team immediately if you suspect unauthorized access to your account.</p>

            <p>Best regards,<br>
            <strong>The Prompt Analyzer Team</strong></p>
        </div>

        <div class="footer">
            <p>&copy; 2024 Prompt Analyzer. All rights reserved.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`;

export const AccountVerificationSuccessTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Verified - Prompt Analyzer</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #000000;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #ffffff;
            padding: 30px;
            text-align: center;
            color: #000000;
            border-bottom: 2px solid #000000;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            color: #666666;
            font-size: 14px;
        }
        .success-icon {
            font-size: 48px;
            text-align: center;
            margin: 20px 0;
        }
        .message {
            background-color: #f5f5f5;
            border-left: 4px solid #000000;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
        .button {
            display: inline-block;
            background-color: #000000;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            margin: 15px 0;
        }
        .feature {
            background-color: #f8f8f8;
            border-radius: 6px;
            padding: 15px;
            margin: 10px 0;
            border-left: 3px solid #000000;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Account Verified Successfully</h1>
            <p>Welcome to Prompt Analyzer</p>
        </div>

        <div class="content">
            <div class="success-icon">✓</div>

            <p>Dear <strong>[User Name]</strong>,</p>

            <p>Congratulations! Your Prompt Analyzer account has been successfully verified and is now fully activated.</p>

            <div class="message">
                <p><strong>Your account is ready!</strong> You now have full access to all Prompt Analyzer features and capabilities.</p>
            </div>

            <div style="text-align: center;">
                <a href="[Dashboard Link]" class="button">Start Analyzing Prompts</a>
            </div>

            <p>With your verified account, you can now access:</p>
            
            <div class="feature">
                <strong>AI Prompt Analysis</strong>
                <p style="margin: 5px 0 0 0; color: #333333;">Get detailed insights on your prompt effectiveness and quality.</p>
            </div>

            <div class="feature">
                <strong>Performance Metrics</strong>
                <p style="margin: 5px 0 0 0; color: #333333;">Track how different prompts perform across various AI models.</p>
            </div>

            <div class="feature">
                <strong>Optimization Tools</strong>
                <p style="margin: 5px 0 0 0; color: #333333;">Use our AI-powered suggestions to improve your prompts.</p>
            </div>

            <div class="feature">
                <strong>Collaboration Features</strong>
                <p style="margin: 5px 0 0 0; color: #333333;">Share and analyze prompts with your team members.</p>
            </div>

            <p>If you have any questions about using Prompt Analyzer or need help getting started, please visit our help center or contact our support team.</p>

            <p>Best regards,<br>
            <strong>The Prompt Analyzer Team</strong></p>
        </div>

        <div class="footer">
            <p>&copy; 2024 Prompt Analyzer. All rights reserved.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`;
