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
    <section className="lg:py-20 py-12 bg-white">
      <div className=" mx-auto px-2 sm:px-4">
        {/* Single column layout for medium screens */}
        <div className="flex flex-col md:flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl md:max-w-7xl mx-auto">
          {/* Form Section - Full width on medium screens */}
          <div className="bg-brand p-4 sm:p-6 md:p-12 lg:p-10 rounded-none w-full md:w-full lg:w-auto">
            <ContactForm onSubmit={onFormSubmit} submitButtonText={submitButtonText} />
          </div>

          {/* Contact Info Section - Full width on medium screens */}
          <div className="flex flex-col space-y-8 p-4 sm:p-6 md:p-8 lg:p-8 w-full md:w-full lg:w-auto">
            <div>
              <p className="text-accent text-sm md:text-2xl font-bold mb-2 text-brand">{label}</p>
              <h2 className="min-[400px]:text-xl md:text-5xl lg:text-4xl font-bold max-[399px]:text-lg text-foreground">
                {heading}
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {contactInfo.location && (
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 min-[400px]:w-11 min-[400px]:h-11 md:w-16 md:h-16 max-[399px]:w-10 max-[399px]:h-10 h-12 bg-brand rounded-full flex items-center justify-center">
                    <MapPin className="min-[400px]:w-6 min-[400px]:h-6 md:w-10 md:h-10 max-[399px]:w-5 max-[399px]:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground min-[400px]:text-sm md:text-2xl max-[399px]:text-xs mb-1">
                      {contactInfo.location.title}
                    </h3>
                    <p className="text-muted-foreground min-[400px]:text-sm md:text-xl max-[399px]:text-xs ">
                      {contactInfo.location.address}
                    </p>
                  </div>
                </div>
              )}

              {contactInfo.email && (
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 min-[400px]:w-11 min-[400px]:h-11 md:w-16 md:h-16 max-[399px]:w-10 max-[399px]:h-10 bg-brand rounded-full flex items-center justify-center">
                    <Mail className="min-[400px]:w-6 min-[400px]:h-6 md:w-10 md:h-10 max-[399px]:w-5 max-[399px]:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground min-[400px]:text-sm md:text-2xl max-[399px]:text-xs mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground hover:text-accent transition-colors min-[400px]:text-sm md:text-xl max-[399px]:text-xs underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              )}

              {contactInfo.phone && (
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 min-[400px]:w-11 min-[400px]:h-11 md:w-16 md:h-16 max-[399px]:w-10 max-[399px]:h-10 bg-brand rounded-full flex items-center justify-center">
                    <Phone className="min-[400px]:w-6 min-[400px]:h-6 md:w-10 md:h-10 max-[399px]:w-5 max-[399px]:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground min-[400px]:text-sm md:text-2xl max-[399px]:text-xs mb-1">
                      Call / Whatsapp
                    </h3>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="text-muted-foreground hover:text-accent transition-colors min-[400px]:text-sm md:text-xl max-[399px]:text-xs underline"
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