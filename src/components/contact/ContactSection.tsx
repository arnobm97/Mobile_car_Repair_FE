import { MapPin, Mail, Phone } from "lucide-react";
import { ContactForm, ContactFormValues } from "../shared/ContactForm";

interface ContactInfo {
  location?: {
    title: string;
    address: string;
  };
  email?: string;
  phone?: string;
}

interface ContactSectionProps {
  label?: string;
  heading: string;
  contactInfo: ContactInfo;
  onFormSubmit?: (data: ContactFormValues) => void;
  submitButtonText?: string;
}

export const ContactSection = ({
  label = "Reach Us Directly",
  heading,
  contactInfo,
  onFormSubmit,
  submitButtonText,
}: ContactSectionProps) => {
  return (
    <section className="py-2 bg-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any questions or inquiries. We are here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="bg-accent p-6 md:p-8 lg:p-10 rounded-lg">
            <ContactForm onSubmit={onFormSubmit} submitButtonText={submitButtonText} />
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col space-y-8 p-8">
            <div>
              <p className="text-accent text-md font-3xl mb-2 text-brand">{label}</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                {heading}
              </h2>
            </div>

            <div className="space-y-6">
              {contactInfo.location && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      {contactInfo.location.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {contactInfo.location.address}
                    </p>
                  </div>
                </div>
              )}

              {contactInfo.email && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              )}

              {contactInfo.phone && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      Call / Whatsapp
                    </h3>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
