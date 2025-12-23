import { RequestHandler } from "express";
import { ContactRequest } from "@shared/api";

// Basic sanitization function to prevent script injection
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length to prevent payload attacks
}

export const handleContact: RequestHandler = (req, res) => {
  try {
    const { name, email, message } = req.body as ContactRequest;

    // Validate and sanitize required fields
    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        error: "Wszystkie pola są wymagane",
      });
      return;
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = sanitizeInput(message);

    // Validate email format (after sanitization)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      res.status(400).json({
        success: false,
        error: "Nieprawidłowy adres e-mail",
      });
      return;
    }

    // Additional validation
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      res.status(400).json({
        success: false,
        error: "Imię musi zawierać od 2 do 100 znaków",
      });
      return;
    }

    if (sanitizedMessage.length > 3000) {
      res.status(400).json({
        success: false,
        error: "Wiadomość nie może być dłuższa niż 3000 znaków",
      });
      return;
    }

    // TODO: In production, implement rate limiting and these secure actions:
    // 1. Send email using a secure service (SendGrid, Mailgun, etc.)
    // 2. Store contact in database with proper encryption
    // 3. Send confirmation email to user
    // 4. Implement spam filtering and CAPTCHA if needed

    res.json({
      success: true,
      message: "Wiadomość została wysłana pomyślnie",
    });

  } catch {
    // Log error without exposing internal details
    console.error("Contact form error:", new Date().toISOString());

    res.status(500).json({
      success: false,
      error: "Wystąpił błąd serwera. Spróbuj ponownie później.",
    });
  }
};
