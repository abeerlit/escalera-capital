import React from 'react'

export const PropertyHeiglights_Summry = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full px-4 py-8">
      {/* Property Highlights */}
      <div className="md:w-1/3">
        <h2 className="text-2xl font-bold mb-6">Property Highlights</h2>
        <ul className="list-disc ps-4 space-y-2">
          <li>
            Unit 114 of the Prime Office Warehouse complex is a 2,607-square-foot flex condo in turnkey condition off Highway 121.
          </li>
          <li>
            Features a kitchenette, a restroom with shower, 20- to 25-foot clear heights, an overhead door, and a mezzanine with vinyl wood plank flooring.
          </li>
          <li>
            Also available for lease.
          </li>
          <li>
            Own property in a rapidly growing area as the number of households within a 3-mile radius is expected to increase by 22% from 2024 to 2029.
          </li>
        </ul> 
      </div>

      {/* Executive Summary */}
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
        <div className="md:flex md:gap-4">
          <p>Preston Bend Real Estate presents Unit 114, a high-end, turnkey flex condo spanning 2,607 square feet. It is fully built-out with a finished kitchenette, a restroom with a shower, 20- to 25-foot clear heights, an overhead door, and a mezzanine with vinyl wood plank flooring throughout. Office and personal users will thrive here, plus the appealing storefront exterior and open layout make it a great option for retail users. Occupants also enjoy plenty of adjacent parking and tenant-controlled, separately metered HVAC.</p>
          <p>Unit 114 is located in the Prime Office Warehouse complex, an exciting new development at the corner of Highway 121 and Leora Lane. This park affords tenants a key placement in one of the fastest-growing suburbs in the greater Dallas/Fort Worth area. It is close to many popular commercial centers and the most prominent residential communities in the area, adding to this property&rsquo;s convenience and appeal. The Prime Office Warehouse complex helps businesses raise their identity in the area as more than 75,000 vehicles pass by each day on Highway 121.</p>
        </div>
      </div>
    </div>
  )
}