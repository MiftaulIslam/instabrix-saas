import React from "react";
import FeatureGrid from "./featuregrid";

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="text-2xl md:text-4xl font-semibold mb-3 max-w-lg">
          <h2 className="w-full from-[#ffffff] to-secondary  bg-gradient-to-br bg-clip-text text-transparent">
            Powerful features to help you manage all your leads
          </h2>
        </div>
        <div className="text-sm text-muted-foreground max-w-md">
          <p className="w-full">
            Never miss an email connection. Modern approach consistently at the
            top of marketing at scale.
          </p>
        </div>
      </div>

      <FeatureGrid />
    </section>
  );
};

export default FeatureSection;
