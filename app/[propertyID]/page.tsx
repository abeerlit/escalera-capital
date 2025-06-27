import { Header } from "@/components/common/header";
import { PropertyDetailMap } from "@/components/property-details/propertyDetailMap";


export default function PropertyDetails() {
  return (
    <div>
      <Header isPropertyDetails />
      <h1 className="text-2xl text-center font-bold mt-2">Property Address</h1>
      <p className="text-center">Property Type, Year Built, Number of suites/keys/rooms, On or Off Market for sale</p>
      <div className="flex mt-4">
        <div className="w-1/2">
          <PropertyDetailMap />
        </div>
        <div className="flex-1 flex gap-2 overflow-x-auto px-4 ">
          <div className="min-w-[400px] h-full p-4 border border-gray-400 rounded">
            <div className="w-full h-full bg-gray-200"></div>
          </div>
          <div className="min-w-[400px] h-full p-4 border border-gray-400 rounded">
            <div className="w-full h-full bg-gray-200"></div>
          </div>
          <div className="min-w-[400px] h-full p-4 border border-gray-400 rounded">
            <div className="w-full h-full bg-gray-200"></div>
          </div>
          <div className="min-w-[400px] h-full p-4 border border-gray-400 rounded">
            <div className="w-full h-full bg-gray-200"></div>
          </div>
          <div className="min-w-[400px] h-full p-4 border border-gray-400 rounded">
            <div className="w-full h-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};