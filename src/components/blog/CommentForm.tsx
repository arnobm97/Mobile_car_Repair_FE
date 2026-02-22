"use client"
import { useState } from "react";

interface CommentFormProps {
  onSubmit?: (data: CommentFormData) => void;
}

export interface CommentFormData {
  name: string;
  email: string;
  website: string;
  comment: string;
  saveInfo: boolean;
}

const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [formData, setFormData] = useState<CommentFormData>({
    name: "",
    email: "",
    website: "",
    comment: "",
    saveInfo: false,
  });

  const [activeFields, setActiveFields] = useState<Record<string, boolean>>({});

  const handleFocus = (field: string) => {
    setActiveFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setActiveFields((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const PlaceholderOverlay = ({ label, isRequired, fieldName, value }: { label: string, isRequired?: boolean, fieldName: string, value: string }) => {
    if (activeFields[fieldName] || value) return null;
    return (
      <div className="absolute left-3 top-2 pointer-events-none text-[#666666] text-sm">
        {label} {isRequired && <span className="text-[#BD1B1B]">*</span>}
      </div>
    );
  };

  return (
    <section className="mt-12 pt-8 font-montserrat">
      <h2 className="text-sm font-bold text-gray-900 mb-4">Leave a Reply</h2>

      <p className="text-sm text-gray-500 mb-6">
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-[#BD1B1B]">*</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name, Email, Website */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="name" className="sr-only">
              Name *
            </label>
            <PlaceholderOverlay label="Name" isRequired fieldName="name" value={formData.name} />
            <input
              id="name"
              required
              value={formData.name}
              onFocus={() => handleFocus("name")}
              onBlur={(e) => handleBlur("name", e.target.value)}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-200  rounded-sm 
               focus:outline-[#BD1B1B] focus:bg-white
               transition duration-200 ease-in-out text-sm h-10"
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email *
            </label>
            <PlaceholderOverlay label="Email" isRequired fieldName="email" value={formData.email} />
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onFocus={() => handleFocus("email")}
              onBlur={(e) => handleBlur("email", e.target.value)}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-200  rounded-sm 
               focus:outline-[#BD1B1B] focus:bg-white text-sm h-10"
            />
          </div>

          <div className="relative">
            <label htmlFor="website" className="sr-only">
              Website
            </label>
            <PlaceholderOverlay label="Website" fieldName="website" value={formData.website} />
            <input
              id="website"
              type="url"
              value={formData.website}
              onFocus={() => handleFocus("website")}
              onBlur={(e) => handleBlur("website", e.target.value)}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-200  rounded-sm 
               focus:outline-[#BD1B1B] focus:bg-white text-sm h-10"
            />
          </div>
        </div>

        {/* Comment */}
        <div className="relative">
          <label htmlFor="comment" className="sr-only">
            Add Comment *
          </label>
          <PlaceholderOverlay label="Add Comment" isRequired fieldName="comment" value={formData.comment} />
          <textarea
            id="comment"
            required
            rows={8}
            value={formData.comment}
            onFocus={() => handleFocus("comment")}
            onBlur={(e) => handleBlur("comment", e.target.value)}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-200  rounded-sm 
             focus:outline-[#BD1B1B] focus:bg-white text-sm resize-none"
          />
        </div>

        {/* Save Info */}
        <div className="flex items-center gap-2">
          <input
            id="save-info"
            type="checkbox"
            checked={formData.saveInfo}
            onChange={(e) =>
              setFormData({ ...formData, saveInfo: e.target.checked })
            }
            className="w-4 h-4 text-[#BD1B1B] border-gray-200 rounded focus:ring-[#BD1B1B] accent-[#BD1B1B]"
          />
          <label
            htmlFor="save-info"
            className="text-sm text-gray-500 cursor-pointer"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#BD1B1B] text-white px-5 py-2.5 rounded-sm hover:bg-[#BD1B1B]/90 transition-colors font-bold text-sm"
        >
          Post Comment
        </button>
      </form>
    </section>
  );
};

export default CommentForm;
