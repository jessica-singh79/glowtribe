/*
  # Newsletter Subscriptions Table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key) - Unique identifier for each subscription
      - `email` (text, unique, not null) - Subscriber's email address
      - `subscribed_at` (timestamptz, default now()) - Timestamp when subscription was created
      - `created_at` (timestamptz, default now()) - Record creation timestamp

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for public insert access (anyone can subscribe)
    - Add policy for authenticated users to view all subscriptions (admin access)

  3. Notes
    - Email field has unique constraint to prevent duplicate subscriptions
    - Public can insert but cannot view existing subscriptions
    - Only authenticated users (staff) can view subscription list
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);
