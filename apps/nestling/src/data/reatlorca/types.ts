export interface RCAAddress {
    AddressText: string;
    Longitude?: string;
    Latitude?: string;
    PermitShowAddress: boolean;
  }
  
  export interface RCAPhone {
    PhoneType: string;
    PhoneNumber: string;
    AreaCode: string;
    PhoneTypeId: string;
  }
  
  export interface RCAEmail {
    ContactId: string;
  }
  
  export interface RCAWebsite {
    Website: string;
    WebsiteTypeId: string;
  }
  
  export interface RCAOrganization {
    OrganizationID: number;
    Name: string;
    Address: RCAAddress;
    Phones: RCAPhone[];
    Emails: RCAEmail[];
    Websites: RCAWebsite[];
    OrganizationType: string;
    HasEmail: boolean;
    PermitFreetextEmail: boolean;
    PermitShowListingLink: boolean;
    RelativeDetailsURL: string;
    PhotoLastupdate: string;
  }
  
  export interface RCAIndividual {
    IndividualID: number;
    Name: string;
    Organization: RCAOrganization;
    Phones: RCAPhone[];
    Websites: RCAWebsite[];
    Emails: RCAEmail[];
    Photo: string;
    Position: string;
    PermitFreetextEmail: boolean;
    FirstName: string;
    LastName: string;
    CorporationDisplayTypeId: string;
    RelativeDetailsURL: string;
    AgentPhotoLastUpdated: string;
    PhotoHighRes: string;
    RankMyAgentKey?: string;
    RealSatisfiedKey?: string;
    TestimonialTreeKey?: string;
  }
  
  export interface RCABuilding {
    BathroomTotal: string;
    Bedrooms: string;
    SizeInterior: string;
    StoriesTotal?: string;
    Type: string;
    Ammenities: string;
  }
  
  export interface RCAPhoto {
    SequenceId: string;
    HighResPath: string;
    MedResPath: string;
    LowResPath: string;
    LastUpdated: string;
    TypeId: string;
  }
  
  export interface RCAProperty {
    Price: string;
    Type: string;
    Address: RCAAddress;
    Photo: RCAPhoto[];
    TypeId: string;
    OwnershipType: string;
    AmmenitiesNearBy: string;
    OwnershipTypeGroupIds: number[];
    PriceUnformattedValue: number;
  }
  
  export interface RCAListing {
    Id: string;
    MlsNumber: string;
    PublicRemarks: string;
    Building: RCABuilding;
    Individual: RCAIndividual[];
    Property: RCAProperty;
    Business: {};
    Land: {
      SizeTotal: string;
    };
    PostalCode: string;
    HistoricalDataIsCleared: boolean;
    ProvinceName: string;
    RelativeDetailsURL: string;
    StatusId: string;
    OpenHouseInsertDateUTC: string;
    PhotoChangeDateUTC: string;
    Distance?: string;
    RelativeURLEn: string;
    RelativeURLFr: string;
    ListingTimeZone: string;
    ListingBoundary: string;
    ListingGMT: string;
    Media: any[];
    InsertedDateUTC: string;
    TimeOnRealtor?: string;
    Tags: any[];
    UploadedBy: number;
  }
  