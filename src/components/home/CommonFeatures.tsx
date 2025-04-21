
import React from "react";
import { Check } from "lucide-react";

const CommonFeatures = () => (
  <div className="mt-16 bg-gray-50 p-8 rounded-xl">
    <h3 className="text-2xl font-bold mb-6 text-center">What You Get With Every Plan</h3>
    <p className="text-gray-600 mb-8 text-center">
      All plans include full access to tools, support, and marketing features.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        "Branded MrXP Business Website",
        "The Mr. Experience Report",
        "Lead Dashboard",
        "Exclusive Leads — No Sharing",
        "Chat Box / Instant Messaging",
        "Click-to-Call / Call Tracking",
        "Priority Support",
        "100% Customized Strategy",
        "Keyword & Audience Research",
        "Campaign Quality Audits",
        "Performance-Based Ad Spend Allocation",
        "Month-to-Month Commitment",
        "30-Day Cancellation Notice",
        "Campaigns Launch in 3–5 Days",
        "Profile Must Be Completed to Launch"
      ].map((feature, idx) => (
        <div key={idx} className="flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
    <p className="mt-8 text-sm text-gray-600 text-center">
      Each package includes a 25% management fee that powers your expert website, our advanced software, and professionally managed ad campaigns—everything you need to grow fast.
    </p>
  </div>
);

export default CommonFeatures;
