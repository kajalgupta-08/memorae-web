import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-dark-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">memorae</h3>
              <p className="text-2xl">
                You just live.
                <br />
                <span className="text-white font-semibold">Memorae remembers for you.</span>
              </p>
              <p className="text-dark-foreground/70">
                Your to-do list asked us for help. Here we are.
              </p>
            </div>

            <div className="flex items-end justify-end">
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-wrap gap-6 justify-center md:justify-end text-sm text-dark-foreground/70">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Settings
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Legal Notice
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Communication Channels
              </a>
            </div>
            <p className="text-center md:text-left text-dark-foreground/50 text-sm mt-6">
              © 2024 Genera Capital SLU. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
