import React from "react";

const Support = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <small className="uppercase tracking-widest text-sm text-gray-600">Travel Support</small>
        <h2 className="text-3xl font-bold mt-2">Plan your Travel with Confidence</h2>
        <p className="text-gray-600 mt-3">Find help with booking and travel plans, see what to expect along the journey!</p>
      </div>

      {/* Information Section */}
      <div className="grid gap-6 mt-10 max-w-3xl mx-auto">
        {[
          { number: "01", title: "Travel Requirements for Dubai" },
          { number: "02", title: "Chauffeur Services at Your Arrival" },
          { number: "03", title: "Multi-Risk Travel Insurance" },
        ].map((info, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg shadow-md bg-white">
            <span className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-bold">{info.number}</span>
            <div>
              <h4 className="text-lg font-semibold">{info.title}</h4>
              <p className="text-gray-600">Find help with booking and travel plans, see what to expect along the journey!</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
