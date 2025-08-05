import { Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://x.com/tryfaru?t=gtrBzjTfxwXPFPSKf-7EMA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/try_faru?igsh=MWoycXp0bHFsYWhpbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Faru. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};