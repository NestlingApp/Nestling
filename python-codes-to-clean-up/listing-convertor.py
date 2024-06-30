import json
import os

def transform_data(data):
    """Transform the JSON data to the specified format with comprehensive error handling."""
    # Error handling for missing data
    amenities = data.get("Property", {}).get("AmmenitiesNearBy", "")

    # Extracting frontage safely
    land_data = data.get("Land", {})
    frontage_str = land_data.get("SizeFrontage", "0 ft").split()[0]
    frontage = float(frontage_str) if frontage_str.replace('.', '', 1).isdigit() else 0

    # Extracting depth safely
    size_total = land_data.get("SizeTotal", "0")
    depth_str = size_total.replace(' x ', '*').split('*')[1] if ' x ' in size_total else size_total.split()[0]
    depth = float(depth_str.split()[0]) if depth_str.split()[0].replace('.', '', 1).isdigit() else 0

    # Extract parking information safely
    parking = data.get("Property", {}).get("Parking", [])
    parking_spaces = sum(int(p.get("Spaces", 0)) for p in parking)  # Sum spaces if multiple parking info is provided
    parking_types = [p.get("Name", "Unknown") for p in parking if "Name" in p]

    # Processing each agent and extracting detailed information
    individual_agents = data.get('Individual', [])
    agents = []
    for agent in individual_agents:
        organization = agent.get('Organization', {})
        phone_entries = agent.get("Phones", [])
        phone_number = "Unknown"
        # Check each phone entry for a 'Telephone' type and format with area code
        for phone in phone_entries:
            if phone.get("PhoneType") == "Telephone":
                area_code = phone.get("AreaCode", "604")  # Default to "604" if not specified
                phone_number = f"{area_code}-{phone.get('PhoneNumber', 'Unknown')}"
                break

        agents.append({
            "agent_id": agent.get("IndividualID", "Unknown"),
            "name": agent.get("Name", "Unknown"),
            "organization_name": organization.get("Name", "Unknown"),
            "organization_address": organization.get("Address", {}).get("AddressText", "Unknown"),
            "phone": phone_number,
            "email": next((email.get("ContactId", "Unknown") for email in agent.get("Emails", [])), "Unknown"),
            "website": next((website.get("Website", "Unknown") for website in agent.get("Websites", [])), "Unknown"),
            "photo_url": agent.get("Photo", "https://example.com/default_agent_photo.jpg"),
            "position": agent.get("Position", "Unknown"),
            "photo_last_updated": agent.get("AgentPhotoLastUpdated", "Unknown")
        })

    # Extract other data safely
    property_info = data.get('Property', {})
    building_info = data.get('Building', {})
    individual_info = data.get('Individual', [{}])[0]

    transformed_data = {
        "property_id": data.get("Id", "Unknown"),
        "listing_id": data.get("MlsNumber", "Unknown"),
        "address": {
            "street_address": property_info.get("Address", {}).get("AddressText", "").split("|")[0],
            "city": property_info.get("Address", {}).get("AddressText", "").split(",")[0].split("|")[-1].strip(),
            "province": "British Columbia",
            "postal_code": data.get("PostalCode", "Unknown"),
            "Longitude": property_info.get("Address", {}).get("Longitude", ""),
            "Latitude": property_info.get("Address", {}).get("Latitude", "")
        },
        "price": int(property_info.get("PriceUnformattedValue", 0)),
        "bedrooms": int(building_info.get("Bedrooms", 0)),
        "bathrooms": int(building_info.get("BathroomTotal", 0)),
        "property_type": property_info.get("Type", "Unknown"),
        "building_type": building_info.get("Type", "Unknown"),
        "ownership_type": property_info.get("OwnershipType", "Unknown"),
        "construction_style": "Unknown",  # If not available, set to 'Unknown'
        "title": property_info.get("Title", "Unknown"),
        "land_size": {
            "frontage": frontage,
            "depth": depth,
            "unit": "feet"
        },
        "square_feet": int(float(building_info.get("SizeInterior", "0 sqft").split()[0])),
        "lot_size": {
            "size": frontage * depth if frontage and depth else 0,
            "unit": "square_feet"
        },
        "description": data.get("PublicRemarks", "No description provided."),
        "features": building_info.get("Features", "").split(", "),
        "year_built": building_info.get("YearBuilt", "Unknown"),
        "parking": {
            "total": parking_spaces,
            "type": parking_types
        },
        "heating": building_info.get("HeatingType", "Unknown"),
        "cooling": building_info.get("CoolingType", "Unknown"),
        "water": building_info.get("WaterType", "Unknown"),
        "sewer": building_info.get("SewerType", "Unknown"),
        "basement": building_info.get("BasementType", "None"),
        "amenities": amenities.split(", "),
        "taxes": {
            "amount": property_info.get("Taxes", 0),
            "year": data.get("TaxYear", 2023),
            "exemptions": property_info.get("TaxExemptions", "").split(", ")
        },
        "hoa_fees": {
            "amount": property_info.get("HOAFees", 0),
            "frequency": property_info.get("HOAFrequency", "Unknown")
        },
        "utilities": {
            "electricity": building_info.get("Electricity", "Unknown"),
            "gas": building_info.get("Gas", "Unknown"),
            "internet": building_info.get("Internet", "Unknown")
        },
        "flooring": building_info.get("Flooring", "").split(", "),
        "appliances": building_info.get("Appliances", "").split(", "),
        "room_dimensions": {
            "living_room": {
                "width": data.get("LivingRoomWidth", 0),
                "length": data.get("LivingRoomLength", 0),
                "unit": "feet"
            },
            # Add more rooms as necessary
        },
        "zoning": {
            "type": property_info.get("ZoningType", "Residential"),
            "code": property_info.get("ZoningCode", "Unknown")
        },
        "special_features": property_info.get("SpecialFeatures", "").split(", "),
        "accessibility_features": property_info.get("AccessibilityFeatures", "").split(", "),
        "school_district": data.get("SchoolDistrict", "Unknown"),
        "neighborhood": data.get("Neighborhood", "Unknown"),
        "legal_description": data.get("LegalDescription", "Unknown"),
        "financial_information": {
            "financing_options": data.get("FinancingOptions", "").split(", "),
            "mortgage_details": {
                "amount": data.get("MortgageAmount", 0),
                "interest_rate": data.get("MortgageInterestRate", 0),
                "term_years": data.get("MortgageTermYears", 0)
            }
        },
        "environmental_considerations": data.get("EnvironmentalConsiderations", "").split(", "),
        "historical_data": {
            "previous_sale": {
                "date": data.get("PreviousSaleDate", "Unknown"),
                "price": data.get("PreviousSalePrice", 0)
            },
            "price_changes": [
                # Example if available in source data
            ]
        },
        "agents": agents,
        "photos": [p.get("HighResPath", "https://example.com/defaultphoto.jpg") for p in property_info.get("Photo", [])],
        "virtual_tour": data.get("VirtualTourLink", "https://example.com/virtual_tour"),
        "open_house": {
            "date": data.get("OpenHouseDate", "Unknown"),
            "time": data.get("OpenHouseTime", "Unknown")
        },
        "status": data.get("Status", "Active"),
        "list_date": data.get("ListDate", "Unknown"),
        "last_updated": data.get("LastUpdated", "Unknown")
    }

    return transformed_data


def process_files(source_directory, target_directory):
    """Process all json files in the specified source_directory."""
    for filename in os.listdir(source_directory):
        if filename.endswith(".json"):
            file_path = os.path.join(source_directory, filename)
            with open(file_path, 'r') as file:
                data = json.load(file)

            transformed_data = transform_data(data)
            mls_number = transformed_data.get("listing_id", "Unknown")

            if (mls_number == "Unknown"):
                new_filename = 'converted ' + filename
            else:
                new_filename = f"{mls_number}_{filename}.json"
                        
            new_file_path = os.path.join(target_directory, new_filename)
            with open(new_file_path, 'w') as file:
                json.dump(transformed_data, file, indent=2)

            print(f"Processed and saved: {new_filename}")

def main():

    source_directory = './200properties'  # Set the directory containing your JSON files
    target_directory = './converted'
    process_files(source_directory, target_directory)

if __name__ == '__main__':
    main()
