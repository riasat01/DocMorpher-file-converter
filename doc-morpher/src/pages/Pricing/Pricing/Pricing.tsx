import PricingCard from "../PricingCard/PricingCard.tsx"

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl text-center font-bold">
        Choose Our Moderable Packages
      </h2>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* basic package */}
        <PricingCard
          title={"Basic"}
          price={"10"}
          storage={"1.5"}
          conversionPerMinutes={"1500"}
          conversionAtTime={"15"}
          mergeAtTime={"40"}
          priority={"High"}
        />
        {/* standard package */}
        <PricingCard
          title={"Standard"}
          price={"20"}
          storage={"2"}
          conversionPerMinutes={"1800"}
          conversionAtTime={"50"}
          mergeAtTime={"60"}
          priority={"Highest"}
        />
        {/* pro package */}
        <PricingCard
          title={"Pro"}
          price={"40"}
          storage={"5"}
          conversionPerMinutes={"3500"}
          conversionAtTime={"100"}
          mergeAtTime={"100"}
          priority={"Highest"}
        />
      </div>
    </div>
  );
};

export default Pricing;
