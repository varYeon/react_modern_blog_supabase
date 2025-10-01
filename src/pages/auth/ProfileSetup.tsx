import React, { useState } from "react";
import { useNavigate } from "react-router";
import { User, Mail, FileText, Save } from "lucide-react";

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save the profile data
    console.log("Profile setup completed:", formData);
    // Redirect to profile page after setup
    navigate("/profile");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Complete Your Profile
        </h1>
        <p className="text-gray-600">
          Tell us a bit about yourself to finish setting up your account
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <User size={16} className="inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <Mail size={16} className="inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <FileText size={16} className="inline mr-2" />
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
              placeholder="Tell us about yourself, your interests, and what you like to write about..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
          >
            <Save size={16} className="mr-2" />
            Complete Setup
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            You can always update this information later in your profile
            settings
          </p>
        </div>
      </div>
    </div>
  );
}
