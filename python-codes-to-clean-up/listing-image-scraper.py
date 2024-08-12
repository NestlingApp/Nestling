from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def scrape_listing_images_selenium(listing_url):
    base_url = "https://www.realtor.ca"
    full_url = f"{base_url}{listing_url}"

    # Set up Selenium WebDriver (this example uses Chrome)
    driver = webdriver.Chrome()  # Ensure ChromeDriver is installed and in your PATH
    driver.get(full_url)
    
    # Allow time for the page to load
    time.sleep(20)

    image_urls = []

    try:
        # Find the hero image
        hero_image = driver.find_element(By.ID, 'heroImage')
        if hero_image:
            image_urls.append(hero_image.get_attribute('src'))
        
        # Find all grid images in the image grid container
        grid_images = driver.find_elements(By.CLASS_NAME, 'topGridViewListingImage')
        for img in grid_images:
            image_urls.append(img.get_attribute('src'))

    finally:
        driver.quit()  # Close the browser

    return image_urls

def main():
    listing_url = "/real-estate/27249875/9-43201-lougheed-highway-mission"
    images = scrape_listing_images_selenium(listing_url)
    for img_url in images:
        print(img_url)

if __name__ == '__main__':
    main()
