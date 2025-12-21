export interface ContactRequest {
  name: string;
  email: string;
  message: string;
  subject?: string; // Optional for now, as server doesn't use it yet
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}