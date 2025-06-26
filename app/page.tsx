"use client";
import { Header } from "@/components/home/common/header";
import { FiltersComponent } from "@/components/home/filters/filtersComponent";
import { MapComponent } from "@/components/home/map/landingMap";
import { PropertyList } from "@/components/home/properties/propertyList";
import { FiltersProvider } from "@/hooks/useFilters";

export default function Home() {
  return (
    <FiltersProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <FiltersComponent />
        <div className="flex-1 flex max-h-[calc(100vh-115px)]">
          <MapComponent />
          <PropertyList />
        </div>
      </div>
    </FiltersProvider>
  );
}
