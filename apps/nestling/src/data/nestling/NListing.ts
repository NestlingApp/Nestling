export type NListing = {
    property_id: string;
    listing_id: string;
    RelativeDetailsURL: string;
    RelativeURLEn: string;
    address: {
      street_address: string;
      city: string;
      province: string;
      postal_code: string;
      Longitude: string;
      Latitude: string;
    };
    price: number;
    bedrooms: number;
    bathrooms: number;
    property_type: string;
    building_type: string;
    ownership_type: string;
    construction_style: string;
    title: string;
    land_size: {
      frontage: number;
      depth: number;
      unit: string;
    };
    square_feet: number;
    lot_size: {
      size: number;
      unit: string;
    };
    description: string;
    features: string[];
    year_built: string;
    parking: {
      total: number;
      type: string[];
    };
    heating: string;
    cooling: string;
    water: string;
    sewer: string;
    basement: string;
    amenities: string[];
    taxes: {
      amount: number;
      year: number;
      exemptions: string[];
    };
    hoa_fees: {
      amount: number;
      frequency: string;
    };
    utilities: {
      electricity: string;
      gas: string;
      internet: string;
    };
    flooring: string[];
    appliances: string[];
    room_dimensions: {
      living_room: {
        width: number;
        length: number;
        unit: string;
      };
    };
    zoning: {
      type: string;
      code: string;
    };
    special_features: string[];
    accessibility_features: string[];
    school_district: string;
    neighborhood: string;
    legal_description: string;
    financial_information: {
      financing_options: string[];
      mortgage_details: {
        amount: number;
        interest_rate: number;
        term_years: number;
      };
    };
    environmental_considerations: string[];
    historical_data: {
      previous_sale: {
        date: string;
        price: number;
      };
      price_changes: any[];
    };
    agents: {
      agent_id: number;
      name: string;
      organization_name: string;
      organization_address: string;
      phone: string;
      email: string;
      website: string;
      photo_url: string;
      position: string;
      photo_last_updated: string;
    }[];
    photos: string[];
    virtual_tour: string;
    open_house: {
      date: string;
      time: string;
    };
    status: string;
    list_date: string;
    last_updated: string;
  };