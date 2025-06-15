
-- Create a policy to allow anyone to insert email addresses into the waitlist
CREATE POLICY "Anyone can join waitlist" 
  ON "email adressess" 
  FOR INSERT 
  WITH CHECK (true);
