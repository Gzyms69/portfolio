import { RequestHandler } from "express";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export const handleContact: RequestHandler = (req, res) => {
  const { name, email, message } = req.body as ContactRequest;

  // Validate required fields
  if (!name || !email || !message) {
    res.status(400).json({
      success: false,
      error: "Wszystkie pola są wymagane",
    });
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      error: "Nieprawidłowy adres e-mail",
    });
    return;
  }

  // Validate message length
  if (message.length > 3000) {
    res.status(400).json({
      success: false,
      error: "Wiadomość nie może być dłuższa niż 3000 znaków",
    });
    return;
  }

  // TODO: In production, you would:
  // 1. Send an email to your address using nodemailer or similar
  // 2. Store the contact in a database
  // 3. Send a confirmation email to the user
  
  // For now, we'll just log it and return success
  console.log("Contact form submission:", {
    timestamp: new Date().toISOString(),
    name,
    email,
    message,
  });

  res.json({
    success: true,
    message: "Wiadomość została wysłana pomyślnie",
  });
};
