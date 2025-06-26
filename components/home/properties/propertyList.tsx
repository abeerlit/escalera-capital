import React from 'react'
import { PropertyListItem } from './propertyListItem'

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Interstate 35 Robinson Business Park',
    address: 'Robinson, TX 76706',
    price: '$3,596,000 - $104,262,000',
    lots: '4 Commercial Lots',
    lotSize: '18.35 - 291.49 AC Lots',
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'N Pinal Ave L. A. T. Casa Grande Airport Prop...',
    address: 'Casa Grande, AZ 85122',
    price: '$83,829,000',
    lots: '1 Commercial Lot',
    lotSize: '279.43 AC Lot',
  },
  {
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    title: '7120 Anderson Blvd Vic Centre',
    address: 'Fort Worth, TX 76120',
    price: '$69,964,677',
    lots: '268 Unit Apartment Building',
    lotSize: '4.95% Cap Rate',
  },
  {
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80',
    title: '1651 State Highway 18 old Goldmine Plantation site',
    address: 'Edgard, LA 70049',
    price: '$65,000,000',
    lots: '1 Industrial Lot',
    lotSize: '985 AC Lot',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Interstate 35 Robinson Business Park',
    address: 'Robinson, TX 76706',
    price: '$3,596,000 - $104,262,000',
    lots: '4 Commercial Lots',
    lotSize: '18.35 - 291.49 AC Lots',
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'N Pinal Ave L. A. T. Casa Grande Airport Prop...',
    address: 'Casa Grande, AZ 85122',
    price: '$83,829,000',
    lots: '1 Commercial Lot',
    lotSize: '279.43 AC Lot',
  },
  {
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    title: '7120 Anderson Blvd Vic Centre',
    address: 'Fort Worth, TX 76120',
    price: '$69,964,677',
    lots: '268 Unit Apartment Building',
    lotSize: '4.95% Cap Rate',
  },
  {
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80',
    title: '1651 State Highway 18 old Goldmine Plantation site',
    address: 'Edgard, LA 70049',
    price: '$65,000,000',
    lots: '1 Industrial Lot',
    lotSize: '985 AC Lot',
  },
]

export const PropertyList = () => {
  return (
    <div className='h-full overflow-y-auto'>
      {properties.map((property, index) => (
        <PropertyListItem key={index} {...property} />
      ))}
    </div>
  )
}