"use client";
import { Header } from "@/components/home/common/header";
import { FiltersComponent } from "@/components/home/filters/filtersComponent";
import { FiltersProvider } from "@/hooks/useFilters";

export default function Home() {
  return (
    <FiltersProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <FiltersComponent />
        <div className="flex-1">
          map component here 
        </div>
      </div>
    </FiltersProvider>
  );
}
