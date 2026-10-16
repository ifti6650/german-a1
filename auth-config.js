// Deutsch A1 · which sign-in methods are switched on.
// A method may only be true here once it is configured in the Supabase dashboard (Authentication → Providers / Passkeys),
// otherwise learners would see a button that fails. Sign-in and sign-up use the same buttons: the first sign-in creates the account.
window.A1_AUTH = {
  google: true,     // Google OAuth — configured
  azure: false,     // Microsoft (personal, work and school accounts) — needs an Azure app registration + Supabase "Azure" provider
  apple: false,     // Apple — needs a paid Apple Developer account; its client secret expires every 6 months
  email: false,     // e-mail one-time code / magic link — needs custom SMTP in Supabase (e.g. Brevo) so mails reach every learner
  passkey: false    // passkeys (beta) — needs Supabase Authentication → Passkeys with RP ID "ifti6650.github.io"
};
