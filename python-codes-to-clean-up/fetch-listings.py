import requests
import json
import string
import time
import os
from datetime import datetime
import boto3

new

def fetch_data(current_page):
    url = "https://api2.realtor.ca/Listing.svc/PropertySearch_Post"

    # Update the payload with the current page number
    data = f"ZoomLevel=10&LatitudeMax=49.50849&LongitudeMax=-121.95212&LatitudeMin=48.82427&LongitudeMin=-123.54514&Sort=6-D&PropertyTypeGroupID=1&TransactionTypeId=2&PropertySearchTypeId=0&Currency=CAD&RecordsPerPage=200&ApplicationId=1&CultureId=1&Version=7.0&CurrentPage={current_page}"
    headers = {
        'authority': 'api2.realtor.ca',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': '_gcl_au=1.1.332659104.1702265932; gig_bootstrap_3_mrQiIl6ov44s2X3j6NGWVZ9SDDtplqV7WgdcyEpGYnYxl7ygDWPQHqQqtpSiUfko=gigya-pr_ver4; visid_incap_2269415=gNxKGxT6SOOj2IhjvdwkJRtln2UAAAAAQUIPAAAAAADzAVgT7ruzW7wO0CTRIWi9; _gcl_aw=GCL.1704945052.Cj0KCQiAnfmsBhDfARIsAM7MKi0PoKlqm-rcY14Zjj3_t1nKsbKlT-4O0bSr9Vfd7UGK7-hdVTmyMXYaAoZREALw_wcB; _gac_UA-12908513-11=1.1704945055.Cj0KCQiAnfmsBhDfARIsAM7MKi0PoKlqm-rcY14Zjj3_t1nKsbKlT-4O0bSr9Vfd7UGK7-hdVTmyMXYaAoZREALw_wcB; visid_incap_2271082=gzExJIclR8WLebOxWQSRA2xsn2UAAAAAQUIPAAAAAAAa+N468AttSYhBM5g9vZtB; nlbi_2271082=i6hoB0t27X3ohoiMVPrQ3QAAAAAaV9XfrhyTrEwli5UA/FUz; incap_ses_257_2269415=y/uVLHiFRW6Suzhe2wyRA0QIpmUAAAAA8Wn6WiHhAar2y/Vs/RMyYA==; _gid=GA1.2.1050284888.1705305571; incap_ses_7229_2269415=caDOQGYDN0F9AMR4hJFSZJwtpmUAAAAA8qh4ddlWakF0b2bGj1DeFA==; reese84=3:KG8B00fMLEjm3ee8mIEhXA==:opMqjCOy7g+Z6h2QI9Pa/rB5WBLngofVpncyYBILBx3P1uOn4lMh+1keqWAa9W5FNxQcuwaviim19Ea3FQgOyYnhTXHOwhIHAuOCCJr/Hve4oKlf7oZeTcylZNPpAUaD+/5rVYmaR/Y/9Hr/tqqYgObKYAN+dxPHyJkbHjgpJr/OaZQHXEJ1bp4bllzCPKzxngW+53HERQSFiFBIKo1Gy/r/z2VJPFMFi7jVcxcVVhotbHM8SYwobhNhXVOQNFqupbs1M5rksR7XxhMpx9gMsnBCS7nBTb5GlENv1T/YRRJQQosBeGWz3nzNb7M7hG7cOUXpu3ygBAphliRz8LYXrKTW7HYexTwq05ITv1ldn+jmSrEXxKqQPglBibYeM0U5rw3Rui0gNDoJ/xmuTZoBuUS5fjdLbYtKp5rZraS+5TveLxqgwNT6gtc8AyR0oJUImtV5/VJdWWOKwLT2cITa49VuN3AzSnb+11iHwizOuyM=:3CEUIbOGihERE+O77FCZKRDBTTfg7v/K42F2lz7AvKw=; _dc_gtm_UA-12908513-11=1; _ga_Y07J3B53QP=GS1.1.1705310896.6.1.1705310900.56.0.0; _ga=GA1.2.1550304768.1702265932; incap_ses_7229_2271082=y4JkMHPBdUBftMR4hJFSZM4vpmUAAAAAG2uNqGWpvYaXLsdnB1fFzg==; incap_ses_678_2271082=emMAb8iZwVtC08ERbb1oCS+htmUAAAAAIT6IN+1nKWIiO+oB97ex/w==',
        'origin': 'https://www.realtor.ca',
        'referer': 'https://www.realtor.ca/',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    response = requests.request("POST", url, headers=headers, data=data)

    if response.status_code == 200:
        return response.json()
    else:
        # Handle other status codes here
        response.raise_for_status()

    return None


def sanitize_filename(filename):
    parts = filename.split('|')
    filename = ' '.join(parts)

    valid_chars = "-_.() %s%s" % (string.ascii_letters, string.digits)
    return ''.join(c for c in filename if c in valid_chars)


def save_property_data(property_data):
    address_text = property_data.get("Property", {}).get("Address", {}).get("AddressText", "unknown")
    sanitized_address = sanitize_filename(address_text)
    filename = f"{sanitized_address}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    
    directory = 'properties'
    os.makedirs(directory, exist_ok=True)

    filepath = os.path.join(directory, filename)
    
    with open(filepath, 'w') as file:
        json.dump(property_data, file)

def main():
    try:
        for current_page in range(1, 50):
            print(f"Fetching data for page {current_page}...")
            response_data = fetch_data(current_page)

            if response_data and "Results" in response_data:
                for property in response_data["Results"]:
                    save_property_data(property)

            time.sleep(1)

        print("All properties saved successfully")
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    main()
