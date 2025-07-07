import { Header } from '@/components/common/header';
import { PropertyDetailMap } from '@/components/property-details/propertyDetailMap';
import { PropertyHeiglights_Summry } from '@/components/property-details/propertyHeiglights_Summry';
import { PropertyImages } from '@/components/property-details/propertyImages';
import { PropertyTabs } from '@/components/property-details/tabs/propertytabs';
import { PropertyDetailAnalytics } from '@/components/property-details/analytics';

export default function PropertyDetails() {
  return (
    <div className="flex-col flex max-h-screen ">
      <Header isPropertyDetails />
      <h1 className="text-2xl text-center font-bold mt-2">Property Address</h1>
      <p className="text-center">
        Property Type, Year Built, Number of suites/keys/rooms, On or Off Market
        for sale
      </p>
      <div className="flex-1 overflow-y-auto">
        <div className="flex mt-4">
          <PropertyDetailMap />
          <PropertyImages />
        </div>
        <PropertyHeiglights_Summry />
        <PropertyTabs />
        <PropertyDetailAnalytics />
      </div>
    </div>
  );
}
