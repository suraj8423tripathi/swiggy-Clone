import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resCard } = props;
  const cloudinaryImageId = resCard.cloudinaryImageId;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{resCard.name}</h3>
      <h4>{resCard.cuisines.join(",")}</h4>
      <h4>{resCard.avgRating}</h4>
      <h4>{resCard.sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
// "restaurants": [
//   {
//   "info": {
//   "id": "214809",
//   "name": "Hotel Niagara - Since 1969",
//   "cloudinaryImageId": "btea7jwuwkbgd0nebcyd",
//   "locality": "Himayath Nagar",
//   "areaName": "Chaderghat",
//   "costForTwo": "₹450 for two",
//   "cuisines": [
//   "Biryani",
//   "Kebabs",
//   "Mughlai"
//   ],
//   "avgRating": 3.9,
//   "feeDetails": {
//   "restaurantId": "214809",
//   "fees": [
//   {
//   "name": "BASE_DISTANCE",
//   "fee": 3500
//   },
//   {
//   "name": "BASE_TIME"
//   },
//   {
//   "name": "ANCILLARY_SURGE_FEE"
//   }
//   ],
//   "totalFee": 3500
//   },
//   "parentId": "472356",
//   "avgRatingString": "3.9",
//   "totalRatingsString": "10K+",
//   "sla": {
//   "deliveryTime": 32,
//   "lastMileTravel": 1.2,
//   "serviceability": "SERVICEABLE",
//   "slaString": "32 mins",
//   "lastMileTravelString": "1.2 km",
//   "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//   "nextCloseTime": "2023-12-07 05:00:00",
//   "opened": true
//   },
//   "badges": {
//   "textExtendedBadges": [
//   {
//   "iconId": "guiltfree/GF_Logo_android_3x",
//   "shortDescription": "options available",
//   "fontColor": "#7E808C"
//   }
//   ]
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//   "entityBadges": {
//   "imageBased": {},
//   "textBased": {},
//   "textExtendedBadges": {
//   "badgeObject": [
//   {
//   "attributes": {
//   "description": "",
//   "fontColor": "#7E808C",
//   "iconId": "guiltfree/GF_Logo_android_3x",
//   "shortDescription": "options available"
//   }
//   }
//   ]
//   }
//   }
//   },
//   "aggregatedDiscountInfoV3": {
//   "header": "30% OFF",
//   "subHeader": "UPTO ₹75"
//   },
//   "orderabilityCommunication": {
//   "title": {},
//   "subTitle": {},
//   "message": {},
//   "customIcon": {}
//   },
//   "differentiatedUi": {
//   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   "differentiatedUiMediaDetails": {
//   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//   "lottie": {},
//   "video": {}
//   }
//   },
//   "reviewsSummary": {},
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {
//   "context": "seo-data-0c99be97-1b59-4d7a-8f5a-9c3bf5e8ea88"
//   },
//   "cta": {
//   "link": "https://www.swiggy.com/restaurants/hotel-niagara-since-1969-himayath-nagar-chaderghat-hyderabad-214809",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//   "info": {
//   "id": "24606",
//   "name": "Domino's Pizza",
//   "cloudinaryImageId": "cdzhdmk21kl1hk8a5yro",
//   "locality": "Baghamberpet",
//   "areaName": "Amberpet",
//   "costForTwo": "₹400 for two",
//   "cuisines": [
//   "Pizzas",
//   "Italian",
//   "Pastas",
//   "Desserts"
//   ],
//   "avgRating": 4.1,
//   "feeDetails": {
//   "restaurantId": "24606",
//   "fees": [
//   {
//   "name": "BASE_DISTANCE",
//   "fee": 3500
//   },
//   {
//   "name": "BASE_TIME"
//   },
//   {
//   "name": "ANCILLARY_SURGE_FEE"
//   }
//   ],
//   "totalFee": 3500
//   },
//   "parentId": "2456",
//   "avgRatingString": "4.1",
//   "totalRatingsString": "10K+",
//   "sla": {
//   "deliveryTime": 30,
//   "serviceability": "SERVICEABLE",
//   "slaString": "30 mins",
//   "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//   "nextCloseTime": "2023-12-07 02:59:00",
//   "opened": true
//   },
//   "badges": {},
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//   "entityBadges": {
//   "imageBased": {},
//   "textBased": {},
//   "textExtendedBadges": {}
//   }
//   },
//   "aggregatedDiscountInfoV3": {
//   "header": "₹150 OFF",
//   "subHeader": "ABOVE ₹299",
//   "discountTag": "FLAT DEAL"
//   },
//   "orderabilityCommunication": {
//   "title": {},
//   "subTitle": {},
//   "message": {},
//   "customIcon": {}
//   },
//   "differentiatedUi": {
//   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   "differentiatedUiMediaDetails": {
//   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//   "lottie": {},
//   "video": {}
//   }
//   },
//   "reviewsSummary": {},
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {
//   "context": "seo-data-0c99be97-1b59-4d7a-8f5a-9c3bf5e8ea88"
//   },
//   "cta": {
//   "link": "https://www.swiggy.com/restaurants/dominos-pizza-bagh-amberpet-hyderabad-24606",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//   "info": {
//   "id": "74646",
//   "name": "Riyan Hotel",
//   "cloudinaryImageId": "wmnrzs0vet0nxnatecy2",
//   "locality": "Vijaya Nagar Colony",
//   "areaName": "Masab Tank",
//   "costForTwo": "₹300 for two",
//   "cuisines": [
//   "Hyderabadi",
//   "Mughlai",
//   "Biryani",
//   "Indian",
//   "Chinese"
//   ],
//   "avgRating": 3.8,
//   "feeDetails": {
//   "restaurantId": "74646",
//   "fees": [
//   {
//   "name": "BASE_DISTANCE",
//   "fee": 4300
//   },
//   {
//   "name": "BASE_TIME"
//   },
//   {
//   "name": "ANCILLARY_SURGE_FEE"
//   }
//   ],
//   "totalFee": 4300
//   },
//   "parentId": "19805",
//   "avgRatingString": "3.8",
//   "totalRatingsString": "10K+",
//   "sla": {
//   "deliveryTime": 48,
//   "lastMileTravel": 3.9,
//   "serviceability": "SERVICEABLE",
//   "slaString": "48 mins",
//   "lastMileTravelString": "3.9 km",
//   "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//   "nextCloseTime": "2023-12-13 00:00:00",
//   "opened": true
//   },
//   "badges": {},
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//   "entityBadges": {
//   "imageBased": {},
//   "textBased": {},
//   "textExtendedBadges": {}
//   }
//   },
//   "aggregatedDiscountInfoV3": {
//   "header": "40% OFF",
//   "subHeader": "UPTO ₹80"
//   },
//   "orderabilityCommunication": {
//   "title": {},
//   "subTitle": {},
//   "message": {},
//   "customIcon": {}
//   },
//   "differentiatedUi": {
//   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   "differentiatedUiMediaDetails": {
//   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//   "lottie": {},
//   "video": {}
//   }
//   },
//   "reviewsSummary": {},
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {
//   "context": "seo-data-0c99be97-1b59-4d7a-8f5a-9c3bf5e8ea88"
//   },
//   "cta": {
//   "link": "https://www.swiggy.com/restaurants/riyan-hotel-vijaya-nagar-colony-masab-tank-hyderabad-74646",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//   "info": {
//   "id": "410980",
//   "name": "Shawarmology",
//   "cloudinaryImageId": "wcdrjel29xmo0cvuct0l",
//   "locality": "MALLEPALLY, Near Madina Dairy Farm",
//   "areaName": "Banjara Hills",
//   "costForTwo": "₹200 for two",
//   "cuisines": [
//   "Indian"
//   ],
//   "avgRating": 4.1,
//   "feeDetails": {
//   "restaurantId": "410980",
//   "fees": [
//   {
//   "name": "BASE_DISTANCE",
//   "fee": 4300
//   },
//   {
//   "name": "BASE_TIME"
//   },
//   {
//   "name": "ANCILLARY_SURGE_FEE"
//   }
//   ],
//   "totalFee": 4300
//   },
//   "parentId": "254970",
//   "avgRatingString": "4.1",
//   "totalRatingsString": "100+",
//   "sla": {
//   "deliveryTime": 58,
//   "lastMileTravel": 3.7,
//   "serviceability": "SERVICEABLE",
//   "slaString": "58 mins",
//   "lastMileTravelString": "3.7 km",
//   "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//   "nextCloseTime": "2023-12-07 07:00:00",
//   "opened": true
//   },
//   "badges": {},
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//   "entityBadges": {
//   "imageBased": {},
//   "textBased": {},
//   "textExtendedBadges": {}
//   }
//   },
//   "aggregatedDiscountInfoV3": {
//   "header": "20% OFF",
//   "subHeader": "UPTO ₹50"
//   },
//   "orderabilityCommunication": {
//   "title": {},
//   "subTitle": {},
//   "message": {},
//   "customIcon": {}
//   },
//   "differentiatedUi": {
//   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   "differentiatedUiMediaDetails": {
//   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//   "lottie": {},
//   "video": {}
//   }
//   },
//   "reviewsSummary": {},
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {
//   "context": "seo-data-0c99be97-1b59-4d7a-8f5a-9c3bf5e8ea88"
//   },
//   "cta": {
//   "link": "https://www.swiggy.com/restaurants/shawarmology-mallepally-near-madina-dairy-farm-banjara-hills-hyderabad-410980",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//   "info": {
//   "id": "13930",
//   "name": "Mataam Al Yamani",
//   "cloudinaryImageId": "omfpna6xpoepnzu38rky",
//   "locality": "Red Hills Road",
//   "areaName": "Redhills",
//   "costForTwo": "₹500 for two",
//   "cuisines": [
//   "Arabian"
//   ],
//   "avgRating": 3.7,
//   "feeDetails": {
//   "restaurantId": "13930",
//   "fees": [
//   {
//   "name": "BASE_TIME"
//   },
//   {
//   "name": "BASE_DISTANCE",
//   "fee": 5100
//   },
//   {
//   "name": "ANCILLARY_SURGE_FEE"
//   }
//   ],
//   "totalFee": 5100
//   },
//   "parentId": "1962",
//   "avgRatingString": "3.7",
//   "totalRatingsString": "5K+",
//   "sla": {
//   "deliveryTime": 54,
//   "lastMileTravel": 4.1,
//   "serviceability": "SERVICEABLE",
//   "slaString": "54 mins",
//   "lastMileTravelString": "4.1 km",
//   "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//   "nextCloseTime": "2023-12-07 04:00:00",
//   "opened": true
//   },
//   "badges": {},
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//   "entityBadges": {
//   "imageBased": {},
//   "textBased": {},
//   "textExtendedBadges": {}
//   }
//   },
//   "aggregatedDiscountInfoV3": {
//   "header": "₹75 OFF",
//   "subHeader": "ABOVE ₹299",
//   "discountTag": "FLAT DEAL"
//   },
//   "orderabilityCommunication": {
//   "title": {},
//   "subTitle": {},
//   "message": {},
//   "customIcon": {}
//   },
//   "differentiatedUi": {
//   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   "differentiatedUiMediaDetails": {
//   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//   "lottie": {},
//   "video": {}
//   }
//   },
//   "reviewsSummary": {},
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {
//   "context": "seo-data-0c99be97-1b59-4d7a-8f5a-9c3bf5e8ea88"
//   },
//   "cta": {
//   "link": "https://www.swiggy.com/restaurants/mataam-al-yamani-red-hills-road-redhills-hyderabad-13930",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//   "info": {
//   "id": "159255",
//   "name": "Turkish Central",
//   "cloudinaryImageId": "im84ipgqnzj7tbxmlrct",
//   "locality": "Mallepally",
//   "areaName": "New Mallepally",
//   "costForTwo": "₹200 for two",
//   "cuisines": [
//   "Turkish",
//   "Arabian"
//   ],
//   "avgRating": 3.6,
//   "feeDetails": {
//   "restaurantId": "159255",
//   "fees": [
//   {
//   "name": "BASE_DISTANCE",
//   "fee": 5100
//   },
//   {
//   "name": "BASE_TIME"
//   },
//   {
//   "name": "ANCILLARY_SURGE_FEE"
//   }
//   ],
//   "totalFee": 5100
//   },
//   "parentId": "19606",
//   "avgRatingString": "3.6",
//   "totalRatingsString": "5K+",
//   "sla": {
//   "deliveryTime": 55,
//   "lastMileTravel": 4.1,
//   "serviceability": "SERVICEABLE",
//   "slaString": "55 mins",
//   "lastMileTravelString": "4.1 km",
//   "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//   "nextCloseTime": "2023-12-07 04:00:00",
//   "opened": true
//   },
//   "badges": {},
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//   "entityBadges": {
//   "imageBased": {},
//   "textBased": {},
//   "textExtendedBadges": {}
//   }
//   },
//   "aggregatedDiscountInfoV3": {
//   "header": "10% OFF",
//   "subHeader": "ABOVE ₹500",
//   "discountTag": "FLAT DEAL"
//   },
//   "orderabilityCommunication": {
//   "title": {},
//   "subTitle": {},
//   "message": {},
//   "customIcon": {}
//   },
//   "differentiatedUi": {
//   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   "differentiatedUiMediaDetails": {
//   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//   "lottie": {},
//   "video": {}
//   }
//   },
//   "reviewsSummary": {},
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {
//   "context": "seo-data-0c99be97-1b59-4d7a-8f5a-9c3bf5e8ea88"
//   },
//   "cta": {
//   "link": "https://www.swiggy.com/restaurants/turkish-central-mallepally-new-mallepally-hyderabad-159255",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//   "info": {
//   "id": "529455",
//   "name": "65 Corner Fast Food",
//   "cloudinaryImageId": "fjgcrldjhllwbkublukz",
//   "locality": "Banjara Hills",
//   "areaName": "Red Hills",
//   "costForTwo": "₹250 for two",
//   "cuisines": [
//   "Chinese"
//   ],
//   "avgRating": 3.6,
//   "feeDetails": {
//   "restaurantId": "529455",
//   "fees": [
//   {
//   "name": "BASE_DISTANCE",
//   "fee": 5100
//   },
//   {
//   "name": "BASE_TIME"
//   },
//   {
//   "name": "ANCILLARY_SURGE_FEE"
//   }
//   ],
//   "totalFee": 5100
//   },
//   "parentId": "318822",
//   "avgRatingString": "3.6",
//   "totalRatingsString": "500+",
//   "sla": {
//   "deliveryTime": 53,
//   "lastMileTravel": 4.2,
//   "serviceability": "SERVICEABLE",
//   "slaString": "53 mins",
//   "lastMileTravelString": "4.2 km",
//   "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//   "nextCloseTime": "2023-12-07 04:15:00",
//   "opened": true
//   },
//   "badges": {},
//   "isOpen": true,
//   "aggregatedDiscountInfoV2": {},
//   "type": "F",
//   "badgesV2": {
//   "entityBadges": {
//   "imageBased": {},
//   "textBased": {},
//   "textExtendedBadges": {}
//   }
//   },
//   "orderabilityCommunication": {
//   "title": {},
//   "subTitle": {},
//   "message": {},
//   "customIcon": {}
//   },
//   "differentiatedUi": {
//   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   "differentiatedUiMediaDetails": {
//   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//   "lottie": {},
//   "video": {}
//   }
//   },
//   "reviewsSummary": {},
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {
//   "context": "seo-data-0c99be97-1b59-4d7a-8f5a-9c3bf5e8ea88"
//   },
//   "cta": {
//   "link": "https://www.swiggy.com/restaurants/65-corner-fast-food-banjara-hills-red-hills-hyderabad-529455",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//   "info": {
//   "id": "118357",
//   "name": "Lassi Shop",
//   "cloudinaryImageId": "qxgp3rnex6g2zweo0gfl",
//   "locality": "Kachiguda",
//   "areaName": "Kachiguda",
//   "costForTwo": "₹100 for two",
//   "cuisines": [
//   "Juices",
//   "Ice Cream"
//   ],
//   "avgRating": 3.2,
//   "veg": true,
//   "feeDetails": {
//   "restaurantId": "118357",
//   "fees": [
//   {
//   "name": "BASE_DISTANCE",
//   "fee": 3500
//   },
//   {
//   "name": "BASE_TIME"
//   },
//   {
//   "name": "ANCILLARY_SURGE_FEE"
//   }
//   ],
//   "totalFee": 3500
//   },
//   "parentId": "587",
//   "avgRatingString": "3.2",
//   "totalRatingsString": "1K+",
//   "sla": {
//   "deliveryTime": 54,
//   "lastMileTravel": 1,
//   "serviceability": "SERVICEABLE",
//   "slaString": "54 mins",
//   "lastMileTravelString": "1.0 km",
//   "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//   "nextCloseTime": "2023-12-07 04:30:00",
//   "opened": true
//   },
//   "badges": {},
//   "isOpen": true,
//   "aggregatedDiscountInfoV2": {},
//   "type": "F",
//   "badgesV2": {
//   "entityBadges": {
//   "imageBased": {},
//   "textBased": {},
//   "textExtendedBadges": {}
//   }
//   },
//   "orderabilityCommunication": {
//   "title": {},
//   "subTitle": {},
//   "message": {},
//   "customIcon": {}
//   },
//   "differentiatedUi": {
//   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   "differentiatedUiMediaDetails": {
//   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//   "lottie": {},
//   "video": {}
//   }
//   },
//   "reviewsSummary": {},
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {
//   "context": "seo-data-0c99be97-1b59-4d7a-8f5a-9c3bf5e8ea88"
//   },
//   "cta": {
//   "link": "https://www.swiggy.com/restaurants/lassi-shop-kachiguda-hyderabad-118357",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//   "info": {
//   "id": "437775",
//   "name": "AL Madina Shawarma",
//   "cloudinaryImageId": "qm53m1k7mtglpyvio4ox",
//   "locality": "Himayath Nagar",
//   "areaName": "Sahifa Masjid Circleno 4",
//   "costForTwo": "₹200 for two",
//   "cuisines": [
//   "Lebanese"
//   ],
//   "avgRating": 3.7,
//   "feeDetails": {
//   "restaurantId": "437775",
//   "fees": [
//   {
//   "name": "BASE_DISTANCE",
//   "fee": 3500
//   },
//   {
//   "name": "BASE_TIME"
//   },
//   {
//   "name": "ANCILLARY_SURGE_FEE"
//   }
//   ],
//   "totalFee": 3500
//   },
//   "parentId": "29280",
//   "avgRatingString": "3.7",
//   "totalRatingsString": "1K+",
//   "sla": {
//   "deliveryTime": 43,
//   "lastMileTravel": 1.4,
//   "serviceability": "SERVICEABLE",
//   "slaString": "43 mins",
//   "lastMileTravelString": "1.4 km",
//   "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//   "nextCloseTime": "2023-12-07 05:00:00",
//   "opened": true
//   },
//   "badges": {},
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//   "entityBadges": {
//   "imageBased": {},
//   "textBased": {},
//   "textExtendedBadges": {}
//   }
//   },
//   "aggregatedDiscountInfoV3": {
//   "header": "₹75 OFF",
//   "subHeader": "ABOVE ₹299",
//   "discountTag": "FLAT DEAL"
//   },
//   "orderabilityCommunication": {
//   "title": {},
//   "subTitle": {},
//   "message": {},
//   "customIcon": {}
//   },
//   "differentiatedUi": {
//   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   "differentiatedUiMediaDetails": {
//   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//   "lottie": {},
//   "video": {}
//   }
//   },
//   "reviewsSummary": {},
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {
//   "context": "seo-data-0c99be97-1b59-4d7a-8f5a-9c3bf5e8ea88"
//   },
//   "cta": {
//   "link": "https://www.swiggy.com/restaurants/al-madina-shawarma-himayath-nagar-sahifa-masjid-circleno-4-hyderabad-437775",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   }
//   ],
