import React from "react";
import ReactDOM from "react-dom";
import image from "./munchmate-high-resolution-logo-transparent.png";
import logo from "./munchmate-high-resolution-logo.png";
// import React-DOM from 'react-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={image} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const cards = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "785420",
          name: "Yaarana Chai And Fast Food",
          city: "15",
          slugs: {
            restaurant: "yaarana-chai-and-fast-food-mohanlalganj-mohanlalganj",
            city: "lucknow"
          },
          cloudinaryImageId: "accfba0e06b352f9fc06bf92db550b2b",
          address:
            "Avadh Vihar Yojana, Sector- 8 ,Near Gomti Enclave, Sushant Golf City, Ahmamau,Lucknow, Uttar Pradesh - 226002",
          locality: "Gomti Enclave",
          areaName: "Mohanlalganj",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Chinese", "Fast Food"],
          feeDetails: {},
          avgRatingString: "NEW",
          promoted: true,
          adTrackingId:
            "cid=10038855~p=0~adgrpid=10038855#ag1~mp=SWIGGY_IN~bl=FOOD~eid=89c6f3cd-9d80-4cc6-ae50-5d0bdd115228~aet=RESTAURANT~aeid=785420~srvts=1703277239075~st=fast food",
          sla: {
            deliveryTime: 53,
            minDeliveryTime: 53,
            maxDeliveryTime: 53,
            lastMileTravel: 11.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "53 MINS",
            lastMileTravelString: "11.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40"
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food","adTrackingId":"cid=10038855~p=0~adgrpid=10038855#ag1~mp=SWIGGY_IN~bl=FOOD~eid=89c6f3cd-9d80-4cc6-ae50-5d0bdd115228~aet=RESTAURANT~aeid=785420~srvts=1703277239075~st=fast food"}',
          objectValue: "785420",
          impressionObjectName: "impression-restaurant-sld-ad",
          clickObjectName: "click-restaurant-sld-ad"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "785420",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "true"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "231204",
          name: "Burger King",
          city: "15",
          slugs: {
            restaurant: "burger-king-hazratganj-hazratganj",
            city: "lucknow"
          },
          cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          address:
            "Burger King, Limited Ground floor Sahu Theater Building,Hazratganj Lucknow 226001",
          locality: "Hazratganj",
          areaName: "Hazratganj",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Burgers", "American"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 17,
            minDeliveryTime: 17,
            maxDeliveryTime: 17,
            lastMileTravel: 1.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "17 MINS",
            lastMileTravelString: "1.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "231204",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "231204",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "60243",
          name: "Pizza Hut",
          city: "15",
          slugs: {
            restaurant: "pizza-hut-prem-jyoti-tower-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          address: "B 939 A,PREM JYOTI TOWER,GOLE MARKET,MAHANAGAR,LUCKNOW",
          locality: "Mandir Marg",
          areaName: "Mahanagar",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Pizzas"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            lastMileTravel: 4.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "29 MINS",
            lastMileTravelString: "4.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "60243",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "60243",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "361295",
          name: "MoMo King",
          city: "15",
          slugs: {
            restaurant: "momo-king-mahanagar-mahanagar",
            city: "lucknow"
          },
          cloudinaryImageId: "lnu4aus20bntzib39bpg",
          address: "LG1/71,HIGHLAND CORNER",
          locality: "Chandralok",
          areaName: "Aliganj",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Chinese", "Nepalese", "Snacks", "Tibetan"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            lastMileTravel: 6.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "32 MINS",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "361295",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "361295",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "110679",
          name: "Nepal Chinese Centre",
          city: "15",
          slugs: {
            restaurant: "nepal-chinese-centre-gomti-nagar-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "rhjbwdawlgcho1ij7slj",
          address: "Sahara Plaza, Patkapuram Road, Gomti Nagar, Lucknow",
          locality: "Vikas Khand 1",
          areaName: "Gomti Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "Indian"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            lastMileTravel: 7.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "32 MINS",
            lastMileTravelString: "7.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseMessage: "Closes soon",
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "110679",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "110679",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "186800",
          name: "Foodie Nukkad",
          city: "15",
          slugs: {
            restaurant: "foodie-nukkad-mahanagar-mahanagar",
            city: "lucknow"
          },
          cloudinaryImageId: "h20rvt91nrdtsebfrb8f",
          address:
            "C41, Sector A opposite Fatima hospital Nishat ganj Mahanagar Lucknow Uttar Pradesh",
          locality: "Fatima Hospital",
          areaName: "Mahanagar",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: [
            "Biryani",
            "Burgers",
            "North Indian",
            "Chinese",
            "Snacks",
            "Rayalaseema",
            "Continental"
          ],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 35,
            minDeliveryTime: 35,
            maxDeliveryTime: 35,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35 MINS",
            lastMileTravelString: "4.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "186800",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "186800",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "123473",
          name: "Balaji Bhojnalay",
          city: "15",
          slugs: {
            restaurant: "balaji-bhojnalay-charbagh-sg-city",
            city: "lucknow"
          },
          cloudinaryImageId: "t5q9gfehb7heue8qtqmv",
          address: "Opposite Mohan Hotel, Charbagh, Lucknow",
          locality: "Cash and Pay Colony",
          areaName: "Charbagh",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian", "Chinese", "South Indian", "Thalis"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 23,
            minDeliveryTime: 23,
            maxDeliveryTime: 23,
            lastMileTravel: 3.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "23 MINS",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseMessage: "Closes soon",
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "123473",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "123473",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "77956",
          name: "Burger Point",
          city: "15",
          slugs: {
            restaurant: "burger-point-alambagh-alambagh",
            city: "lucknow"
          },
          cloudinaryImageId: "lacqlvrpawshmxjxeqge",
          address: "551 JHA/227 Harihar Prasad Nagar, Alambagh, Lucknow",
          locality: "Harihar Prasad Nagar",
          areaName: "Alambagh",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Burgers", "Snacks", "Beverages"],
          avgRating: 3.7,
          feeDetails: {},
          avgRatingString: "3.7",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 8.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "36 MINS",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "77956",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "77956",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "59284",
          name: "Domino's Pizza",
          city: "15",
          slugs: {
            restaurant: "dominos-pizza-beside-sbh-bank-hazratganj",
            city: "lucknow"
          },
          cloudinaryImageId: "jd3b24bmmmwsdpezahj5",
          address: "Beside SBH Bank, Sapru Marg, Hazratganj, Lucknow",
          locality: "Hazratganj",
          areaName: "Hazratganj",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30 MINS",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "59284",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "59284",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "573595",
          name: "La Pino'z Pizza",
          city: "15",
          slugs: {
            restaurant: "la-pino’z-pizza-hazratganj-hazratganj",
            city: "lucknow"
          },
          cloudinaryImageId: "vcjlhsxo2dcjxhepdnld",
          address: '"36KA, Sapru Marg, hazratganj, Lucknow 226001',
          locality: "Sapru Marg",
          areaName: "Hazratganj",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 19,
            minDeliveryTime: 19,
            maxDeliveryTime: 19,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "19 MINS",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "573595",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "573595"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "367778",
          name: "Burger Singh (Big Punjabi Burgers)",
          city: "15",
          slugs: {
            restaurant:
              "burger-singh-(big-punjabi-burgers)-gomti-nagar-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "ul7hxrp3anfa5vk2ih1i",
          address:
            "Shop No. A-1/97, Viram Khand 1, Gomtinagar Lucknow, Nagar Nigam Food Safety Zone-15, Lucknow, Uttar Pradesh-226010",
          locality: "Viram Khand 1",
          areaName: "Gomti Nagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["American", "Beverages", "Desserts", "Snacks", "Indian"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 27,
            minDeliveryTime: 27,
            maxDeliveryTime: 27,
            lastMileTravel: 7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "27 MINS",
            lastMileTravelString: "7.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "367778",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "367778",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "458202",
          name: "KFC",
          city: "15",
          slugs: {
            restaurant: "kfc-engineering-crossing-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
          address:
            "UGF No.3 and 4,Hall No.2 First Floor, Plot No-CP/3,Sector E,Sitapur Road Yojna,Lucknow,Uttar Pradesh-226021",
          locality: "Sector E",
          areaName: "Jankipuram",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            lastMileTravel: 9.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30 MINS",
            lastMileTravelString: "9.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "458202",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "458202",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "308977",
          name: "Home Made Foods",
          city: "15",
          slugs: {
            restaurant: "home-made-foods-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "yznaompjwfdjdlwlmvj2",
          address: "L4/1 ZS APPARTMENT SEC-L LUCKNOW,  226024",
          locality: "Sector L",
          areaName: "Aliganj",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "Indian",
            "Biryani",
            "Chinese",
            "North Indian",
            "Sweets",
            "Snacks",
            "Fast Food",
            "Continental",
            "Lucknowi",
            "Punjabi"
          ],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 38,
            minDeliveryTime: 38,
            maxDeliveryTime: 38,
            lastMileTravel: 7.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "38 MINS",
            lastMileTravelString: "7.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹115"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "308977",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "308977",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "100373",
          name: "New Pizza King",
          city: "15",
          slugs: {
            restaurant: "the-pizza-king-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "ohhqy538bl4h9dm842ta",
          address:
            "Brijendra Murari Yadav Complex, Faizabad Road, Indira Nagar",
          locality: "Indira Nagar",
          areaName: "Indira Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Pizzas", "Pastas", "Snacks", "Italian"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            lastMileTravel: 4.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30 MINS",
            lastMileTravelString: "4.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "100373",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "100373",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "333677",
          name: "Wat-A-Burger! - India Ka Burger",
          city: "15",
          slugs: {
            restaurant: "wat-a-burger-hazratganj-hazratganj",
            city: "lucknow"
          },
          cloudinaryImageId: "cc1581a6f70ae3fb1b6915a1d129cd99",
          address:
            "NEW MARKET, SHOP NO. 4, NEAR MULTI LEVEL PARKING, HAZRATGANJ, LUCKNOW, Lucknow, Uttar Pradesh, 226006",
          areaName: "Hazratganj",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Burgers",
            "Fast Food",
            "Continental",
            "American",
            "Beverages",
            "Desserts"
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 17,
            minDeliveryTime: 17,
            maxDeliveryTime: 17,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "17 MINS",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "333677",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "333677",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "665318",
          name: "Asian Kitchen",
          city: "15",
          slugs: {
            restaurant: "asian-kitchen-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "b2ab0ea90bc32160e35696cf87ee5fc7",
          address:
            "Municipal HNO.-552/286-A (Postal HNO.-39/1) Chandar Nagar Goldhara Alambagh, OM NAGAR WARD, Nagar Nigam Food Safety Zone-20, Lucknow, Uttar Pradesh - 226005",
          locality: "Chander Nagar",
          areaName: "Alambagh",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Chinese",
            "Pan-Asian",
            "Thai",
            "Snacks",
            "Beverages",
            "Asian",
            "Seafood",
            "Barbecue",
            "Grill",
            "Desserts",
            "Fast Food",
            "Afghani"
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 37,
            maxDeliveryTime: 37,
            lastMileTravel: 7.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "37 MINS",
            lastMileTravelString: "7.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "665318",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "665318",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "73087",
          name: "AL Baik. Xpress",
          city: "15",
          slugs: {
            restaurant: "al-baik-xpress-indranagar-indira-nagar-2",
            city: "lucknow"
          },
          cloudinaryImageId: "hyqoyb5nf4nopoabiyr9",
          address:
            "Shop No. 06 Fatimi Masjid near khurram Nagar girls inter college in front of Akbar hotel, Aliganj, Lucknow",
          areaName: "Khurram Nagar",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Indian", "Beverages"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 34,
            minDeliveryTime: 34,
            maxDeliveryTime: 34,
            lastMileTravel: 6.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "34 MINS",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "73087",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "73087",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "94319",
          name: "The Oven",
          city: "15",
          slugs: {
            restaurant: "the-oven-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "wxwa8v04n8txcpm6ahu1",
          address:
            "1, Lower Ground, Sitapur Road, Iradat Nagar, Aliganj, Lucknow",
          locality: "Nirala Nagar",
          areaName: "Nirala Nagar",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Italian", "Pizzas", "Pastas"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "29 MINS",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "94319",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "94319",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "76684",
          name: "Amigos",
          city: "15",
          slugs: {
            restaurant: "amigos-gomti-nagar-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "32c8f68c979c1634cbddd5b8f83f96b8",
          address: "2/7, Vikas Khand 2, Gomti Nagar, Lucknow",
          locality: "Vikas Khand 2",
          areaName: "Gomti Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "Italian-American",
            "Desserts",
            "Beverages",
            "Pizzas",
            "Snacks",
            "Fast Food"
          ],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            lastMileTravel: 6.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "32 MINS",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "76684",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "76684",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "620569",
          name: "Super Foods",
          city: "15",
          slugs: {
            restaurant:
              "dnd-delicious-nutritional-diet-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "13a9d7219d1ab0ee6e2d36d2287263c0",
          address:
            "G-27 (SHOP NO-04),LIBERTY COLONY,SARVODAYA NAGAR,LUCKNOW-226016, Lucknow, Uttar Pradesh-226016",
          locality: "Sector 12",
          areaName: "SARVODAYA NAGAR",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "Healthy Food",
            "Continental",
            "Thai",
            "Mexican",
            "Italian",
            "Beverages"
          ],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "32 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "620569",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "620569",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "114292",
          name: "Pizza Cave",
          city: "15",
          slugs: {
            restaurant: "pizza-cave-chowk-chowk",
            city: "lucknow"
          },
          cloudinaryImageId: "xkhca7bds5xrjksvsjca",
          address: "Shop No - 43-44, Husainabad road, Infrot of Clock Tower",
          locality: "Husainabad Trust Rd",
          areaName: "Chowk",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Italian"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 34,
            minDeliveryTime: 34,
            maxDeliveryTime: 34,
            lastMileTravel: 6.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "34 MINS",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "114292",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "114292",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "673472",
          name: "Rominus Pizza And Burger",
          city: "15",
          slugs: {
            restaurant: "rominus-pizza-and-burger-sadar-bazaar-sadar-bazaar",
            city: "lucknow"
          },
          cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
          address:
            "UGF, EKTA MARKET , PLOT NO. 2/ C-66 VIKAS NAGAR, LUCKNOW ,  Nagar Nigam Food Safety Zone-19,  Lucknow, Uttar Pradesh, 226022",
          areaName: "Vikas Nagar",
          costForTwo: "100000",
          costForTwoMessage: "₹1000 FOR TWO",
          cuisines: ["Pizzas", "Burgers", "Snacks", "Pastas"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 34,
            minDeliveryTime: 34,
            maxDeliveryTime: 34,
            lastMileTravel: 7.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "34 MINS",
            lastMileTravelString: "7.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "673472",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "673472",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "232061",
          name: "Al Baike Arabecue",
          city: "15",
          slugs: {
            restaurant: "lahab-restaurant-jankipuram-jankipuram",
            city: "lucknow"
          },
          cloudinaryImageId: "84d3d537d758d58f897c201388de698c",
          address:
            "H.No. 18/50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh.",
          locality: "Gomti Nagar",
          areaName: "Gomti Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "Snacks",
            "Fast Food",
            "Burgers",
            "Continental",
            "American",
            "Biryani",
            "Mughlai"
          ],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 44,
            minDeliveryTime: 44,
            maxDeliveryTime: 44,
            lastMileTravel: 7.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "44 MINS",
            lastMileTravelString: "7.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "232061",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "232061",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "421740",
          name: "Healthy Food House",
          city: "15",
          slugs: {
            restaurant: "satya-eating-point-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "avivrokxeoouo5tpeslm",
          address:
            "C-5, C-5, Bandh Rd, Priyadarshini Colony, Keshav Nagar, Triveni Nagar, Lucknow, Uttar Pradesh 226020, India",
          locality: "Priyadarshini Colony",
          areaName: "Nirala Nagar",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: [
            "Healthy Food",
            "Fast Food",
            "Burgers",
            "Street Food",
            "Beverages",
            "Pastas",
            "North Indian",
            "Italian"
          ],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 40,
            minDeliveryTime: 40,
            maxDeliveryTime: 40,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40 MINS",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "421740",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "421740",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "66673",
          name: "Mr. Brown",
          city: "15",
          slugs: {
            restaurant: "mr-brown-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "2c469b5d88f84b7495b9825d06e4bb9b",
          address: "B 35, Sector P, Aliganj, Lucknow",
          locality: "Aliganj",
          areaName: "Aliganj",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: [
            "Bakery",
            "Italian",
            "Snacks",
            "Healthy Food",
            "Pizzas",
            "Beverages"
          ],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            lastMileTravel: 8.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "32 MINS",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹50 OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "66673",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "66673",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "103093",
          name: "Baker Box",
          city: "15",
          slugs: {
            restaurant: "baker-box-chowk-chowk",
            city: "lucknow"
          },
          cloudinaryImageId: "otuseiswgijsz9cdgchy",
          address:
            "PLOT NO-36, GARHI PEER KHAN, BALAGANJ, LUCKNOW,, BALAGANJ, Nagar Nigam Food Safety Zone-21, Lucknow, Uttar Pradesh - 226003",
          locality: "Sheesh Mahal",
          areaName: "Chowk",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Chinese",
            "Italian",
            "Biryani",
            "Beverages",
            "Burgers",
            "Pastas"
          ],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 44,
            minDeliveryTime: 44,
            maxDeliveryTime: 44,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "44 MINS",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "103093",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "103093",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "421263",
          name: "Togo's Momo",
          city: "15",
          slugs: {
            restaurant: "togo-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "bce9b45bb3c0e5a2b5c78c7fa43b5e9e",
          address:
            "K-830, Sector K, Ashiyana, Lucknow, Uttar Pradesh 226012, India",
          locality: "Sector K",
          areaName: "Aashiana",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Chinese", "Fast Food", "Desserts"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 37,
            maxDeliveryTime: 37,
            lastMileTravel: 8.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "37 MINS",
            lastMileTravelString: "8.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "421263",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "421263",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "456072",
          name: "Italian Pizza Bar and Cafe",
          city: "15",
          slugs: {
            restaurant: "italian-pizza-bar-and-cafe-aliganj-aliganj-2",
            city: "lucknow"
          },
          cloudinaryImageId: "veeg5blbxlhyciqh1agh",
          address:
            "B-20, Beli Garad Chauraha Main Rd, Sector-A, Sector K, Aliganj, Lucknow, Uttar Pradesh 226024, India",
          locality: "Sector A",
          areaName: "Aliganj",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Pizzas"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 33,
            maxDeliveryTime: 33,
            lastMileTravel: 8.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "33 MINS",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "456072",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "456072",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "458886",
          name: "Bro And Brothers",
          city: "15",
          slugs: {
            restaurant: "bro-and-brothers-gomti-nagar-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "cvk4y2cap3m23nfdgxss",
          address:
            "D-1/14, VIJAYANT KHAND-1, GOMTINAGAR , GOMTI NAGAR , Nagar Nigam Food Safety Zone-17, Lucknow, Uttar Pradesh-226010",
          locality: "Vijayant Khand",
          areaName: "Gomti Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian", "Snacks"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 41,
            minDeliveryTime: 41,
            maxDeliveryTime: 41,
            lastMileTravel: 10.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "41 MINS",
            lastMileTravelString: "10.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "458886",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "458886",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "413457",
          name: "Coffee Junction Cafe",
          city: "15",
          slugs: {
            restaurant: "coffee-junction-cafe-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "jhrewvndlkktcddk2z3g",
          address:
            "VWWV+P7V, Sector-A, Sector K, Aliganj, Lucknow, Uttar Pradesh 226024, India",
          locality: "Sector K",
          areaName: "Aliganj",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Beverages", "Snacks", "Navratri Special"],
          avgRating: 3.5,
          feeDetails: {},
          avgRatingString: "3.5",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            lastMileTravel: 8.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "31 MINS",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "413457",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "413457",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "165303",
          name: "Veg Planet By Herbata",
          city: "15",
          slugs: {
            restaurant: "veg-planet-by-herbata-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "q1jynremrzswkjfgs2bp",
          address: "13/412 sector 13 near SBI ATM Indira nagar",
          locality: "Aurobindo park Road",
          areaName: "Indira Nagar",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Chinese", "South Indian", "North Indian"],
          avgRating: 3.7,
          feeDetails: {},
          avgRatingString: "3.7",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 51,
            minDeliveryTime: 51,
            maxDeliveryTime: 51,
            lastMileTravel: 10.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "51 MINS",
            lastMileTravelString: "10.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "165303",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "165303",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "127504",
          name: "Al Gazal Baik",
          city: "15",
          slugs: {
            restaurant: "al-gazal-gole-market-mahanagar",
            city: "lucknow"
          },
          cloudinaryImageId: "oatevz3kq3prggz0mzpu",
          address: "Shop No-4, Gole Market Mahanagar",
          locality: "Mandir Marg",
          areaName: "Mahanagar",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Snacks", "Fast Food", "Beverages"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 27,
            minDeliveryTime: 27,
            maxDeliveryTime: 27,
            lastMileTravel: 4.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "27 MINS",
            lastMileTravelString: "4.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "127504",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "127504",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "454318",
          name: "Pizza Factory",
          city: "15",
          slugs: {
            restaurant: "pizza-factory-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "bwfuv5tvigpgicwab1d8",
          address:
            "B-20, Beli Garad Chauraha Main Rd, Sector-A, Sector K, Aliganj, Lucknow, Uttar Pradesh 226024, India",
          locality: "Sector K",
          areaName: "Aliganj",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Pizzas"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 33,
            maxDeliveryTime: 33,
            lastMileTravel: 8.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "33 MINS",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "454318",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "454318",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "519017",
          name: "Food Adda",
          city: "15",
          slugs: {
            restaurant: "food-adda-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "oow8a85aqd8dnlubqtrp",
          address: "13/412 sector 13 near SBIATM Indira Nagar",
          locality: "Sector 10",
          areaName: "Indira Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian", "Chinese", "Italian-American", "Snacks"],
          avgRating: 3.6,
          feeDetails: {},
          avgRatingString: "3.6",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 47,
            maxDeliveryTime: 47,
            lastMileTravel: 10.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "47 MINS",
            lastMileTravelString: "10.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹350",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "519017",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "519017"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "523232",
          name: "Food Planet",
          city: "15",
          slugs: {
            restaurant: "food-planet-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "k2fawswqdkncsbdzgtgb",
          address: "13 / 412 sector 13 near SBI ATM IndiraNagar",
          locality: "Ismailganj",
          areaName: "Indira Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "South Indian", "Fast Food"],
          avgRating: 3.6,
          feeDetails: {},
          avgRatingString: "3.6",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 43,
            minDeliveryTime: 43,
            maxDeliveryTime: 43,
            lastMileTravel: 10.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "43 MINS",
            lastMileTravelString: "10.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          aggregatedDiscountInfoV3: {
            header: "25% OFF",
            subHeader: "ABOVE ₹149",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "523232",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "523232"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "535306",
          name: "Balaji Fast Food Center",
          city: "15",
          slugs: {
            restaurant: "bala-ji-fast-food-center-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "oujkhwj4hc9wmdzf4vop",
          address:
            "570/494 Virat Nagar VIP road ,Alambagh, Lucknow, Uttar Pradesh 226005, India",
          locality: "Virat Nagar",
          areaName: "Aashiana",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Fast Food", "North Indian", "Beverages"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 48,
            minDeliveryTime: 48,
            maxDeliveryTime: 48,
            lastMileTravel: 8.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "48 MINS",
            lastMileTravelString: "8.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "535306",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "535306"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "469318",
          name: "The Himalayan Cafe",
          city: "15",
          slugs: {
            restaurant: "the-himalayan-cafe-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "ae399b95bb9bdac17cf772f5847d1421",
          address:
            "Plot No-L-1/71, Shop No- Lgf-1, Highland Corner, Sector-B, Aliganj Street, Lucknow",
          locality: "Chandralok",
          areaName: "Chandralok",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Beverages", "Chinese"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 27,
            minDeliveryTime: 27,
            maxDeliveryTime: 27,
            lastMileTravel: 6.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "27 MINS",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "469318",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "469318"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "409566",
          name: "The Food Tower",
          city: "15",
          slugs: {
            restaurant: "the-food-tower-mahanagar-mahanagar",
            city: "lucknow"
          },
          cloudinaryImageId: "fpzhwogb3cdfsc6ztlws",
          address:
            "538K/359, TULSI PURAM, TRIVENI  NAGAR-1, NIRALA NAGAR, LUCKNOW,  TRIVENI NAGAR, Nagar Nigam Food Safety  Zone-11, Lucknow, Uttar Pradesh - 226020",
          locality: "Triveni Nagar",
          areaName: "Nirala Nagar",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Indian"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 42,
            minDeliveryTime: 42,
            maxDeliveryTime: 42,
            lastMileTravel: 6.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "42 MINS",
            lastMileTravelString: "6.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "ABOVE ₹350",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "409566",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "409566",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "75195",
          name: "Spicy Kitchen",
          city: "15",
          slugs: {
            restaurant: "spicy-kitchen-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "bem8wkwm2vf9on8e36cq",
          address: "UnderGround, L-4/1, ZS appartment, Aliganj",
          areaName: "Aliganj",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "North Indian",
            "Chinese",
            "Snacks",
            "Fast Food",
            "Mughlai",
            "Continental",
            "Lucknowi",
            "Punjabi",
            "Sweets"
          ],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 42,
            minDeliveryTime: 42,
            maxDeliveryTime: 42,
            lastMileTravel: 7.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "42 MINS",
            lastMileTravelString: "7.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "75195",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "75195",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "479353",
          name: "Parivar veg restaurant",
          city: "15",
          slugs: {
            restaurant: "parivar-veg-restaurant-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "ti4r6q1ll7q9ggw4bzpl",
          address:
            "Zs apartments, Sector G Main Road, Sector L, Aliganj, Lucknow, Uttar Pradesh, India",
          locality: "Sector G",
          areaName: "Aliganj",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "Indian",
            "North Indian",
            "Biryani",
            "Thalis",
            "Chaat",
            "South Indian",
            "Sweets",
            "Desserts"
          ],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 41,
            minDeliveryTime: 41,
            maxDeliveryTime: 41,
            lastMileTravel: 7.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "41 MINS",
            lastMileTravelString: "7.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "479353",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "479353",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "451921",
          name: "Leto",
          city: "15",
          slugs: {
            restaurant: "léto-mahanagar-mahanagar",
            city: "lucknow"
          },
          cloudinaryImageId: "1f1aed5b17ae5d7f3b6cef3d29776c85",
          address:
            "B-1/9/1, Sector K, Aliganj, BEHIND RICHI RICH RESTAURANT, FIRST LEFT FROM PAPPU STORE Lucknow, Uttar Pradesh 226024, India",
          locality: "Sector K",
          areaName: "Aliganj",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "European",
            "Japanese",
            "Italian",
            "Juices",
            "Salads",
            "Healthy Food",
            "Asian",
            "Oriental",
            "Pan-Asian",
            "Cafe"
          ],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 41,
            minDeliveryTime: 41,
            maxDeliveryTime: 41,
            lastMileTravel: 7.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "41 MINS",
            lastMileTravelString: "7.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet"
              }
            ]
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "451921",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "451921",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "356573",
          name: "Heavens Pizza",
          city: "15",
          slugs: {
            restaurant: "heaven's-pizza-gomti-nagar-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "qd8895xvbrpgggxetglg",
          address: "A17/21 Sulabh Awas sector 6 Gomti Nagar Vistar",
          locality: "Gomti Nagar Vistar",
          areaName: "Gomti Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Pizzas", "Italian", "Beverages", "Desserts"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 65,
            minDeliveryTime: 65,
            maxDeliveryTime: 65,
            lastMileTravel: 8.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65 MINS",
            lastMileTravelString: "8.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "356573",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "356573",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "479218",
          name: "Ramen",
          city: "15",
          slugs: {
            restaurant: "baker-box-chowk-chowk-2",
            city: "lucknow"
          },
          cloudinaryImageId: "wugtcr25rfkcnrwodobl",
          address:
            "PLOT NO-36, GARHI PEER KHAN, BALAGANJ, LUCKNOW,, BALAGANJ, Nagar Nigam Food Safety Zone-21, Lucknow, Uttar Pradesh - 226003",
          locality: "Chowk",
          areaName: "Chowk",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Chinese", "Fast Food", "Beverages"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 38,
            minDeliveryTime: 38,
            maxDeliveryTime: 38,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "38 MINS",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "479218",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "479218",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "343076",
          name: "The American Pizza",
          city: "15",
          slugs: {
            restaurant: "the-american-pizza-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "a9350527cad2f89c7a51664f28b4d008",
          address:
            "1205/15, D Block, Block D, Indira Nagar, Lucknow, Uttar Pradesh 226016",
          locality: "D Block",
          areaName: "Indira Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Pizzas", "Pastas", "Snacks", "Italian"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 42,
            minDeliveryTime: 42,
            maxDeliveryTime: 42,
            lastMileTravel: 8.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "42 MINS",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "343076",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "343076",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "616656",
          name: "Rollarappaa",
          city: "15",
          slugs: {
            restaurant: "rollarappa-mohanlalganj-mohanlalganj-2",
            city: "lucknow"
          },
          cloudinaryImageId: "a0d3a8d08d7116c5074cb165f906331f",
          address:
            "SHOP NO 206 G/F SANJAR GOLD SECTOR-2 VRINDAVAN YOJNA RAIBARELI ROAD LUCKNOW   226002",
          locality: "Sector 2",
          areaName: "Vrindavan Colony",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["North Indian"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 37,
            maxDeliveryTime: 37,
            lastMileTravel: 10.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "37 MINS",
            lastMileTravelString: "10.8 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "616656",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "616656",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "62727",
          name: "Foodie Baba",
          city: "15",
          slugs: {
            restaurant: "foodie-baba-aashiana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "c7vvqxbvhl555sk4zzhd",
          address: "M-206 Sector G, Aashiana, Lucknow Aashiana",
          locality: "Sector G",
          areaName: "Ashiyana",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "Salads",
            "Snacks",
            "Pizzas",
            "Beverages",
            "Desserts",
            "Continental",
            "Pastas",
            "Burgers"
          ],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 9.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "36 MINS",
            lastMileTravelString: "9.8 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "62727",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "62727",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "235938",
          name: "AL-Bake Arabian Knights",
          city: "15",
          slugs: {
            restaurant: "al-baike-arabian-kinghts-chowk-chowk",
            city: "lucknow"
          },
          cloudinaryImageId: "wwhcnblhdsbpenu8jd4a",
          address:
            "PLOT NO-36, GARHI PEER KHAN, BALAGANJ, LUCKNOW,, BALAGANJ, Nagar Nigam Food Safety Zone-21, Lucknow, Uttar Pradesh - 226003",
          locality: "Husainabad",
          areaName: "Chowk",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Fast Food", "Snacks", "Biryani"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 38,
            minDeliveryTime: 38,
            maxDeliveryTime: 38,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "38 MINS",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "235938",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "235938",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "345603",
          name: "CIWAZ veg and Non veg",
          city: "15",
          slugs: {
            restaurant: "ciwas-sg-city-sg-city",
            city: "lucknow"
          },
          cloudinaryImageId: "tpdfc92sjkwbwomcfkh1",
          address:
            "CHADHAI KA PURWA AHMAMAU ARJUNGANJ SHAHEEDPATH ROAD FRONT OF BEST PRICE WHOLESALE LUCKNOW-226002",
          locality: "Arjunganj",
          areaName: "Gomti Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Indian"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 43,
            minDeliveryTime: 43,
            maxDeliveryTime: 43,
            lastMileTravel: 9.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "43 MINS",
            lastMileTravelString: "9.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "345603",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "345603",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "322479",
          name: "Kalika Restaurant (New)",
          city: "15",
          slugs: {
            restaurant: "akash-kalika-restaurant-aminabad-aminabad",
            city: "lucknow"
          },
          cloudinaryImageId: "xxd7zeggpqr89wifltgc",
          address: "Near Sardar Patel Dental college,Raibareli Road",
          locality: "Raibareli Road",
          areaName: "Vrindavan Colony",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["North Indian", "Biryani", "Chinese"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 42,
            minDeliveryTime: 42,
            maxDeliveryTime: 42,
            lastMileTravel: 10.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "42 MINS",
            lastMileTravelString: "10.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹600",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "322479",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "322479"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "570788",
          name: "Azra Star Hub",
          city: "15",
          slugs: {
            restaurant: "azra-star-hub-chowk-chowk",
            city: "lucknow"
          },
          cloudinaryImageId: "pwdjtbaskmqfsckztbtl",
          address:
            "Near sd tent house, Husainabad Trust Rd, Thakurganj, Husainabad, Lucknow, Uttar Pradesh 226003",
          locality: "Thakurganj",
          areaName: "Chowk",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian", "Biryani", "Salads"],
          avgRating: 3.7,
          feeDetails: {},
          avgRatingString: "3.7",
          totalRatingsString: "10+",
          sla: {
            deliveryTime: 53,
            minDeliveryTime: 53,
            maxDeliveryTime: 53,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "53 MINS",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹149",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "570788",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "570788",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "478639",
          name: "Pizza Wizza",
          city: "15",
          slugs: {
            restaurant: "pizza-wizza-rajajipuram-rajajipuram",
            city: "lucknow"
          },
          cloudinaryImageId: "e1c75d3dfe1dbb12b3b3a56fbcc3a0ad",
          address: "C-3373-C BLOCK RAJAJIPURAM LABOUR COLONY LUCKNOW - 226017",
          locality: "C Block",
          areaName: "Rajajipuram",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Pizzas", "Fast Food"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 49,
            minDeliveryTime: 49,
            maxDeliveryTime: 49,
            lastMileTravel: 8.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "49 MINS",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "478639",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "478639",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "546253",
          name: "Champaran Handi Meat House",
          city: "15",
          slugs: {
            restaurant: "papa-pancho-hazratganj-hazratganj",
            city: "lucknow"
          },
          cloudinaryImageId: "y3likob8tvscltrbzkip",
          address:
            "SHOP NO-2 SECTOR A ALIGANJ ENGINEERING COLLEGE ROAD JANKIPURAM LUCKNOW ,JANKIPURAM-Ist & IInd,Nagar Nigam Food Safety Zone-9,Lucknow,Uttar Pradesh-226021",
          locality: "Engineering Collage",
          areaName: "Hazratganj",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: [
            "North Indian",
            "Chinese",
            "Fast Food",
            "Biryani",
            "South Indian"
          ],
          avgRating: 3.3,
          feeDetails: {},
          avgRatingString: "3.3",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 33,
            maxDeliveryTime: 33,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "33 MINS",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "546253",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "546253",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "804327",
          name: "Foodsemart",
          city: "15",
          slugs: {
            restaurant: "foodsemart-mahanagar-mahanagar",
            city: "lucknow"
          },
          cloudinaryImageId: "acb86da385052adb80a80a2592e31842",
          address:
            "Shop No : 2/92 , Floor :  , Matroo mohal sadar cantt Lucknow , Triveni Nagar, Lucknow, Uttar Pradesh 226020, India 226020",
          locality: "Mahanagar",
          areaName: "Mahanagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "North Indian",
            "Chinese",
            "South Indian",
            "Indian",
            "Street Food",
            "Snacks",
            "Home Food",
            "Navratri Special",
            "Fast Food",
            "Burgers"
          ],
          feeDetails: {},
          avgRatingString: "NEW",
          sla: {
            deliveryTime: 35,
            minDeliveryTime: 35,
            maxDeliveryTime: 35,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35 MINS",
            lastMileTravelString: "6.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "804327",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "804327",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "770613",
          name: "Crunch Patty",
          city: "15",
          slugs: {
            restaurant: "crunch-patty-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "aef49878a51ca8374d8fe940eef07c39",
          address:
            "643M/707, Sri Nagar Colony, Madiaon, Mohibullapur, Madiyanva, Lucknow, Uttar Pradesh 226021, India",
          locality: "Sri Nagar Colony",
          areaName: "Aliganj",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Snacks", "Fast Food", "Beverages", "Pizzas", "Pastas"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 44,
            minDeliveryTime: 44,
            maxDeliveryTime: 44,
            lastMileTravel: 10.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "44 MINS",
            lastMileTravelString: "10.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "770613",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "770613",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "384737",
          name: "Fauji Dhaba - Hygiene & Safe 24X7",
          city: "15",
          slugs: {
            restaurant: "kitchen-king-hygiene-&-trusted-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "jtns79sgkogylajt54un",
          address: "ENGINERING COLLEGE CHAURAHA, Aliganj, Lucknow-226021",
          locality: "Engineering College Road",
          areaName: "Aliganj",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Indian", "Chinese", "Mughlai", "South Indian"],
          avgRating: 3.2,
          feeDetails: {},
          avgRatingString: "3.2",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 46,
            minDeliveryTime: 46,
            maxDeliveryTime: 46,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "46 MINS",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {}
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "384737",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "384737",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "162345",
          name: "Raj Bhojnalya & Fast Food Center",
          city: "15",
          slugs: {
            restaurant: "raj-bhojnalya-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "icusi1mwtfq4rffn7dls",
          address:
            "shop no. 2, 3/5, Vijay Khand, Mithai wala Chauraha Gomtinagar",
          locality: "Vijay Khand 2",
          areaName: "Gomti Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian", "South Indian", "Chinese"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "32 MINS",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 8 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 8 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 8 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 8:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "162345",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "162345",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "525522",
          name: "King Bakery and Fast Food",
          city: "15",
          slugs: {
            restaurant: "king-bakery-and-fast-food-gomti-nagar-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "fc7e5b2f2e067f68c7769dcdbc3dad9d",
          address: "3/40 PATRAKAR PURAM, GOMTI NAGAR,LUCKNOW",
          locality: "Patrakar Puram",
          areaName: "Gomti Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "Snacks"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            lastMileTravel: 7.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "31 MINS",
            lastMileTravelString: "7.8 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 12 noon, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 12 noon, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 12 noon, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 12:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "525522",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "525522",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "350060",
          name: "Divyanshi Fast Food",
          city: "15",
          slugs: {
            restaurant: "divyanshi-fast-food-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "syrhflajrnqg1jfb5wyf",
          address:
            "RAM RAM BANK,INGINEERING COLLEGE CHAURAHA, ALIGANJ, LUCKNOW , District - Lucknow, STATE - Uttar Pradesh",
          locality: "Sector B",
          areaName: "Aliganj",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Street Food", "Chinese", "South Indian"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 37,
            maxDeliveryTime: 37,
            lastMileTravel: 9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "37 MINS",
            lastMileTravelString: "9.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 5:30 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 5:30 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 5:30 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 5:30 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "350060",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "350060",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "97516",
          name: "Arora's Fast Food Hub",
          city: "15",
          slugs: {
            restaurant: "aroras-fast-food-hub-rajajipuram-rajajipuram",
            city: "lucknow"
          },
          cloudinaryImageId: "i0k8h2y98pph7qabgbwe",
          address: "E Block, Rajajipuram, Lucknow",
          locality: "E Block",
          areaName: "Rajajipuram",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Snacks"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 57,
            minDeliveryTime: 57,
            maxDeliveryTime: 57,
            lastMileTravel: 9.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "57 MINS",
            lastMileTravelString: "9.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 12 noon, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 12 noon, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 12 noon, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 12:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "97516",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "97516",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "132011",
          name: "Kechup Fast Food",
          city: "15",
          slugs: {
            restaurant: "kechup-fast-food-charbagh-sg-city",
            city: "lucknow"
          },
          cloudinaryImageId: "xh8brpzx7zhwmgqgtjgt",
          address: "Shop No 2 DAV Market, Moti Nagar Road, Charbagh, Lucknow",
          locality: "Moti Nagar Road",
          areaName: "Aminabad",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Snacks"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 27,
            minDeliveryTime: 27,
            maxDeliveryTime: 27,
            lastMileTravel: 4.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "27 MINS",
            lastMileTravelString: "4.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 1 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 1 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 1 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 1:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "132011",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "132011",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "115278",
          name: "Mishra fast food",
          city: "15",
          slugs: {
            restaurant: "mishra-fast-food-na-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "sajwknscvsuofaq3xdf8",
          address:
            "MISHRA FAST FOOD,ABHAY MISHRA S/0 DAYA SHANKAR MISHRA 551 KA/ 278 BHILAWAN ALAMBAGH LUCKNOW, Nagar Nigam Food Safety Zone-20, Lucknow (Uttar Pradesh;",
          locality: "Nagar Nigam",
          areaName: "Alambagh",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Chinese", "North Indian"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 42,
            minDeliveryTime: 42,
            maxDeliveryTime: 42,
            lastMileTravel: 8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "42 MINS",
            lastMileTravelString: "8.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 1 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 1 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 1 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 1:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "115278",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "115278",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "71020",
          name: "Khushi Fast Food",
          city: "15",
          slugs: {
            restaurant: "khushi-fast-food-hazratganj-hazratganj",
            city: "lucknow"
          },
          cloudinaryImageId: "lriwru4oq4lbuicvpw3n",
          address: "Cantt. Road, Murli Nagar, Husain Ganj, Lucknow",
          locality: "Murli Nagar",
          areaName: "Husain Ganj",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["North Indian", "Chinese", "Italian", "Fast Food"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 21,
            minDeliveryTime: 21,
            maxDeliveryTime: 21,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "21 MINS",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 12 noon, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 12 noon, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 12 noon, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 12:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "71020",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "71020",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "148807",
          name: "Raj Fast Food",
          city: "15",
          slugs: {
            restaurant: "raj-fast-food-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "tm7sfhqjjxhbpvnweotw",
          address: "L.D.A Colony Lucknow",
          locality: "LDA Colony",
          areaName: "Ashiyana",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese"],
          avgRating: 3.6,
          feeDetails: {},
          avgRatingString: "3.6",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 43,
            minDeliveryTime: 43,
            maxDeliveryTime: 43,
            lastMileTravel: 10.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "43 MINS",
            lastMileTravelString: "10.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          sld: true,
          unorderableMessage: "Opens next at 11 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "148807",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "true",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "148807",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "374759",
          name: "Suraj Fast Food Centre",
          city: "15",
          slugs: {
            restaurant: "suraj-fast-food-centre-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "f823e2f5eb349c83fd18a6664bcead97",
          address:
            "Shop No. 22, Chander Nagar, Alambagh. Opposite gulab vatika. Lucknow Area :Alambagh",
          locality: "Chander Nagar",
          areaName: "Alambagh",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "Snacks", "Fast Food"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 39,
            minDeliveryTime: 39,
            maxDeliveryTime: 39,
            lastMileTravel: 7.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "39 MINS",
            lastMileTravelString: "7.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 12:45 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 12:45 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 12:45 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 12:45 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "374759",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "374759",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "381440",
          name: "Shree Balaji Fast Food Corner",
          city: "15",
          slugs: {
            restaurant: "shree-balaji-fast-food-corner-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "jpgrdonm1adcogsb2bi0",
          address:
            "Nishith Plaza, LGF-15/16, Engineering College Rd, Chauraha, Aliganj, Lucknow, Uttar Pradesh 226024",
          locality: "Engineering College Road",
          areaName: "Aliganj",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 9.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "36 MINS",
            lastMileTravelString: "9.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 4 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 4 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 4 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 4:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "381440",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "381440",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "129220",
          name: "Big Bite Food Joint",
          city: "15",
          slugs: {
            restaurant: "big-bite-aashiana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "lp4vpxvfjkaufc5rrp7m",
          address:
            "Subhani Kheda, Raibareli Road, Near Nagar Nigam Office, Telibagh, Aashiana, Lucknow",
          locality: "Raibareli Road",
          areaName: "Aashiana",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Chinese", "Indian", "Italian", "Continental"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            lastMileTravel: 7.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "31 MINS",
            lastMileTravelString: "7.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 10 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 10 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 10 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 10:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "129220",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "129220",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "780677",
          name: "Shivaay Fast Food",
          city: "15",
          slugs: {
            restaurant: "shivaay-fast-food-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "df276dd7bf831aafc5dd25ae8c56fd5e",
          address:
            "Kamta,Hanuman Market,Near Canara Bank  ATM,Shankerpuri,Chinhat,Lucknow,Uttar  Pradesh,226028, Nagar Nigam Food Safety  Zone-14, Lucknow, Uttar Pradesh-226028",
          locality: "Hanuman Market",
          areaName: "Indira Nagar",
          costForTwo: "22000",
          costForTwoMessage: "₹220 FOR TWO",
          cuisines: ["Chinese", "Snacks", "Burgers", "Pastas"],
          avgRating: 4.8,
          feeDetails: {},
          avgRatingString: "4.8",
          totalRatingsString: "5",
          sla: {
            deliveryTime: 44,
            minDeliveryTime: 44,
            maxDeliveryTime: 44,
            lastMileTravel: 10.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "44 MINS",
            lastMileTravelString: "10.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 2:30 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          sld: true,
          unorderableMessage: "Opens next at 2:30 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 2:30 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 2:30 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "780677",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "780677"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "772091",
          name: "Shivalik Fast Food Corner",
          city: "15",
          slugs: {
            restaurant: "shivalik-fast-food-corner-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "b1d030eef349d4c44a6aacb4cd0c9ba5",
          address:
            " Near Shani Dev Mandir,SHIVALIK INTERNATIONAL SCHOOL SECTOR F PARAG DAIRY, Lucknow (CB), Lucknow Tahsil, Lucknow, Uttar Pradesh - 226012",
          locality: "Sector F LDA Colony Parag Lucknow Hind Nagar\r\n",
          areaName: "LDA Colony",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Fast Food", "Burgers", "Thalis"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "10+",
          sla: {
            deliveryTime: 51,
            minDeliveryTime: 51,
            maxDeliveryTime: 51,
            lastMileTravel: 10.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "51 MINS",
            lastMileTravelString: "10.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          sld: true,
          unorderableMessage: "Opens next at 11 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "772091",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "772091",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "720266",
          name: "topson chinese fast food",
          city: "15",
          slugs: {
            restaurant: "topson-chinese-fast-food-chowk-chowk",
            city: "lucknow"
          },
          cloudinaryImageId: "cf91af0ad62b20612678a67b324401b3",
          address:
            "Shop no.9, Aliya Tower, Sarfarazganj, Lucknow, Uttar Pradesh 226003, India",
          locality: "Aliya Tower",
          areaName: "Chowk",
          costForTwo: "28000",
          costForTwoMessage: "₹280 FOR TWO",
          cuisines: ["Chinese"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 44,
            minDeliveryTime: 44,
            maxDeliveryTime: 44,
            lastMileTravel: 10,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "44 MINS",
            lastMileTravelString: "10.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 1:10 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          sld: true,
          unorderableMessage: "Opens next at 1:10 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 1:10 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 1:10 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "720266",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "720266",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "762945",
          name: "Amt Fast Food",
          city: "15",
          slugs: {
            restaurant: "amt-fast-food-gomti-nagar-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "203b221988ce52724674f77db2382119",
          address:
            "1, near Loyola public school, Vigyan Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India",
          locality: "Vigyan Khand",
          areaName: "Gomti Nagar",
          costForTwo: "12000",
          costForTwoMessage: "₹120 FOR TWO",
          cuisines: ["Chinese"],
          avgRating: 3.4,
          feeDetails: {},
          avgRatingString: "3.4",
          totalRatingsString: "8",
          sla: {
            deliveryTime: 39,
            minDeliveryTime: 39,
            maxDeliveryTime: 39,
            lastMileTravel: 10.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "39 MINS",
            lastMileTravelString: "10.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 9 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          sld: true,
          unorderableMessage: "Opens next at 9 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 9 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 9:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "762945",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "true",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "762945",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "354719",
          name: "Tiwari Chaat & Fast Food",
          city: "15",
          slugs: {
            restaurant: "tiwari-chaat-&-fast-food-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "ymg286m7fnfvgmzsuryf",
          address:
            "Jyotiba Bai fule and zonal park nikat multi activity centre LDA colony Kanpur road Lucknow Uttar Pradesh-226012",
          locality: "LDA Colony",
          areaName: "Aashiana",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Street Food", "Chaat", "Snacks"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 9.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "36 MINS",
            lastMileTravelString: "9.8 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 1 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 1 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 1 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 1:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "354719",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "354719",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "100395",
          name: "Balle Balle Fast Food Restaurant",
          city: "15",
          slugs: {
            restaurant: "balle-balle-yaaron-da-dhaba-alambagh-alambagh",
            city: "lucknow"
          },
          cloudinaryImageId: "s79hjnykfjt8bonwsijs",
          address: "c24 chandar nagar market , alambagh lucknow ,226005",
          locality: "Chandar Nagar",
          areaName: "Alambagh",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["North Indian", "Chinese", "South Indian"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 41,
            minDeliveryTime: 41,
            maxDeliveryTime: 41,
            lastMileTravel: 7.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "41 MINS",
            lastMileTravelString: "7.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 11 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "100395",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "100395",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "465181",
          name: "Indo Chini Food Hub",
          city: "15",
          slugs: {
            restaurant: "indo-chinni-foods-hazratganj-hazratganj",
            city: "lucknow"
          },
          cloudinaryImageId: "rd4eephx8as5k0o5pm2z",
          address:
            "9, SHAHNAJAF ROAD, NEAR ST. FRANCIS COLLEGE, HAZRATGANJ, LUCKNOW., HAZRATGANJ, Nagar Nigam Food Safety Zone-2, Lucknow, Uttar Pradesh - 226001",
          locality: "Shahnajaf Road",
          areaName: "Hazratganj",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Chinese", "Snacks"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 15,
            minDeliveryTime: 15,
            maxDeliveryTime: 15,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "15 MINS",
            lastMileTravelString: "1.2 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 5:30 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 5:30 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 5:30 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 5:30 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "465181",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "465181",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "134770",
          name: "NG Fast Food",
          city: "15",
          slugs: {
            restaurant: "rk-fast-food-rajajipuram-rajajipuram",
            city: "lucknow"
          },
          cloudinaryImageId: "i2kw7gzgbnp3pe8h3guw",
          address: "Rajajipuram Sahib bhagat Singh road E-5496",
          locality: "D Block",
          areaName: "Rajajipuram",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Indian", "Chinese", "South Indian"],
          avgRating: 3.5,
          feeDetails: {},
          avgRatingString: "3.5",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 47,
            maxDeliveryTime: 47,
            lastMileTravel: 8.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "47 MINS",
            lastMileTravelString: "8.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 3 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 3 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 3 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 3:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "134770",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "134770",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "477289",
          name: "Dial Food",
          city: "15",
          slugs: {
            restaurant: "dial-food-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "u0sjcl3hphmmlnm8nc6k",
          address: "C-1560 Indra Nagar Maithly Saran Gupt",
          locality: "C Block",
          areaName: "Indira Nagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["North Indian", "Chinese", "Fast Food"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 33,
            maxDeliveryTime: 33,
            lastMileTravel: 7.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "33 MINS",
            lastMileTravelString: "7.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11:30 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 11:30 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11:30 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:30 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "477289",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "477289",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "76681",
          name: "Wow Foods",
          city: "15",
          slugs: {
            restaurant: "wow-foods-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "pzfsztlt4qr0k4lbibjc",
          address: "MD 1/55, LDA Colony, Kanpur Road, Aashiana, Lucknow",
          locality: "Kanpur Road",
          areaName: "Aashiana",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Snacks", "Chinese"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 40,
            minDeliveryTime: 40,
            maxDeliveryTime: 40,
            lastMileTravel: 11,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40 MINS",
            lastMileTravelString: "11.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 11 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "76681",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "76681",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "502437",
          name: "Pal Fast Food",
          city: "15",
          slugs: {
            restaurant: "pal-fast-food-hazratganj-hazratganj",
            city: "lucknow"
          },
          cloudinaryImageId: "mbdbuxisqkcutxv699sp",
          address:
            "Kothi No.7 , Lamartinier Boys College , Lamartinier Purwa , Lucknow",
          locality: "Gulistan Colony",
          areaName: "Husain Ganj",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Chinese", "Fast Food"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "7",
          sla: {
            deliveryTime: 26,
            minDeliveryTime: 26,
            maxDeliveryTime: 26,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "26 MINS",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 5 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 5 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 5 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 5:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "502437",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "502437"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "59508",
          name: "Richi Rich Fast Food",
          city: "15",
          slugs: {
            restaurant: "richi-rich-fast-food-mahanagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "cvwle4dj9bjvoxsbn9wu",
          address: "27,28 New Gole Market Tempo Stand, Mahanagar, Lucknow",
          locality: "Gole Market",
          areaName: "Mahanagar",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Chinese"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            lastMileTravel: 4.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "29 MINS",
            lastMileTravelString: "4.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 10:30 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 10:30 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 10:30 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 10:30 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "59508",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "59508",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "486282",
          name: "Om Sai Fast Food",
          city: "15",
          slugs: {
            restaurant: "om-sai-fast-food-aminabad-aminabad",
            city: "lucknow"
          },
          cloudinaryImageId: "ln6mxxh76zgld4fhxbdq",
          address: "Naka Hindola, Lucknow, Uttar Pradesh, India",
          locality: "Hindola",
          areaName: "Charbagh",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Fast Food", "Chinese"],
          avgRating: 3.7,
          feeDetails: {},
          avgRatingString: "3.7",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 24,
            minDeliveryTime: 24,
            maxDeliveryTime: 24,
            lastMileTravel: 3.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "24 MINS",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 11 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "486282",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "486282",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "164643",
          name: "Lucknow Street Food",
          city: "15",
          slugs: {
            restaurant: "lucknow-street-food-mohanlalganj",
            city: "lucknow"
          },
          cloudinaryImageId: "axbtcwpeshiaovgr4uto",
          address: "7c/318 Vraindavan colony telibagh lucknow",
          locality: "Vraindavan colony",
          areaName: "Aashiana",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: [
            "Chinese",
            "Fast Food",
            "Snacks",
            "Italian",
            "Use Code NBC20 to Avail"
          ],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 38,
            minDeliveryTime: 38,
            maxDeliveryTime: 38,
            lastMileTravel: 10.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "38 MINS",
            lastMileTravelString: "10.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 10 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 10 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 10 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 10:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "164643",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "164643",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "372174",
          name: "Jeetu Chinese Food",
          city: "15",
          slugs: {
            restaurant: "jeetu-chinese-food-gomti-nagar-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "ps4hqw9mylsipv3mobxm",
          address: "Husadiya lucknow,  Lucknow, Uttar Pradesh-226012",
          locality: "Husariya Chauraha",
          areaName: "Gomti Nagar",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Street Food", "Indian"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 37,
            maxDeliveryTime: 37,
            lastMileTravel: 8.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "37 MINS",
            lastMileTravelString: "8.8 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 10 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 10 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 10 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 10:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "372174",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "372174",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "139142",
          name: "Food Garden",
          city: "15",
          slugs: {
            restaurant: "food-garden-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "w5nmkicugwsayrjr5pte",
          address: "6/668 VIKAS NAGAR, Lucknow",
          locality: "Sector 6",
          areaName: "Jopling Road",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Fast Food"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            lastMileTravel: 6.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "32 MINS",
            lastMileTravelString: "6.8 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 5:05 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 5:05 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 5:05 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 5:05 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "139142",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "139142",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "368687",
          name: "Di Di Foods",
          city: "15",
          slugs: {
            restaurant: "hotel-di-di-international-aminabad-aminabad",
            city: "lucknow"
          },
          cloudinaryImageId: "qsb0apg9l5pxlt5krlrj",
          address:
            "196, HOTEL DI DI INTERNATIONAL, GAUTAM BUDDHA MARG, BANS MAND, LUCKNOW.",
          locality: "Gautam Buddha Marg",
          areaName: "Aishbagh",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Indian", "Chinese", "Continental"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 24,
            minDeliveryTime: 24,
            maxDeliveryTime: 24,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "24 MINS",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 10:10 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 10:10 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 10:10 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 10:10 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "368687",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "368687",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "485064",
          name: "Rajdhani Fast Food",
          city: "15",
          slugs: {
            restaurant: "rajdhani-hotel-alambagh-alambagh",
            city: "lucknow"
          },
          cloudinaryImageId: "tmudxpyfvqynvmgi3vm5",
          address: "Shop B 174, Mansarovar Market, Kanpur Road, Lucknow",
          areaName: "Kanpur Road",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian"],
          avgRating: 2.6,
          feeDetails: {},
          avgRatingString: "2.6",
          totalRatingsString: "8",
          sla: {
            deliveryTime: 41,
            minDeliveryTime: 41,
            maxDeliveryTime: 41,
            lastMileTravel: 9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "41 MINS",
            lastMileTravelString: "9.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 12 noon, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 12 noon, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_3",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 12 noon, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 12:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "485064",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "485064",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "608936",
          name: "Prem Momo & Chinese Veg Fast Food Corner",
          city: "15",
          slugs: {
            restaurant:
              "prem-momo-&-chinese-veg-fast-food-corner-aminabad-aminabad",
            city: "lucknow"
          },
          cloudinaryImageId: "nvtsq3h5iuftjmirrjl9",
          address: "288/129 ARYA NAGAR MOTILAL NEHRU LUCKNOW",
          locality: "Arya Nagar",
          areaName: "Aminabad",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "Snacks"],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 28,
            minDeliveryTime: 28,
            maxDeliveryTime: 28,
            lastMileTravel: 4.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "28 MINS",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 3 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 3 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 3 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 3:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "608936",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "608936",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "116387",
          name: "Aamrapali Sweets and fast foods",
          city: "15",
          slugs: {
            restaurant: "aamrapali-sweets-and-fast-foods-na-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "jddtyp8vitttaomir39z",
          address:
            "Block C , kothari bhandu road,Rajajipuram, Near Jal sansthan,Lucknow -226017.",
          locality: "C Block",
          areaName: "Rajajipuram",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Sweets"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 34,
            minDeliveryTime: 34,
            maxDeliveryTime: 34,
            lastMileTravel: 8.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "34 MINS",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 8:30 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 8:30 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 8:30 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 8:30 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "116387",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "116387",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "792599",
          name: "Ap Fast Food South Indian Pavbhaji Indian Restaurant",
          city: "15",
          slugs: {
            restaurant:
              "ap-fast-food-south-indian-pavbhaji-indian-restaura-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "feaa394235f23091ce4dd551d2897044",
          address:
            "SHOP NO 16/1, SEC-16, INDRA NAGAR, LUCKNOW., INDIRA NAGAR, Nagar Nigam Food Safety Zone-17, Lucknow, Uttar Pradesh - 226016",
          locality: "Sector 16",
          areaName: "Indira Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Indian", "Chinese", "Snacks"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "4",
          sla: {
            deliveryTime: 40,
            minDeliveryTime: 40,
            maxDeliveryTime: 40,
            lastMileTravel: 8.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40 MINS",
            lastMileTravelString: "8.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 11 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "792599",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "792599"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "782730",
          name: "D2F2 Dream Delicious Fast Food",
          city: "15",
          slugs: {
            restaurant:
              "d2f2-dream-delicious-fast-food-gomti-nagar-gomti-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "5561415719d710b59f5829228bb935b0",
          address:
            "VISHAL KHAND 1 GOMTI NAGAR LUCKNOW, RAFI AHMAD KIDWAI, Nagar Nigam Food Safety Zone-15, Lucknow, Uttar Pradesh - 226010",
          locality: "Vishal Khand 1",
          areaName: "Gomti Nagar",
          costForTwo: "24900",
          costForTwoMessage: "₹249 FOR TWO",
          cuisines: ["Chinese", "Pastas", "Burgers", "Snacks"],
          avgRating: 3.7,
          feeDetails: {},
          avgRatingString: "3.7",
          totalRatingsString: "3",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            lastMileTravel: 4.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "32 MINS",
            lastMileTravelString: "4.9 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 3:30 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 3:30 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 3:30 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 3:30 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "782730",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "782730",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "754029",
          name: "Delhi Chaap Junction & Fast Food Corner",
          city: "15",
          slugs: {
            restaurant:
              "delhi-chaap-junction-&-fast-food-corner-alambagh-alambagh",
            city: "lucknow"
          },
          cloudinaryImageId: "b139cc0e94645b50b1bca2bd8dced0cd",
          address:
            "552/013-KA/2, Chandar Nagar, Alambagh, RAMJI LAL NAGAR, Nagar Nigam Food Safety Zone-20, Lucknow, Uttar Pradesh",
          locality: "Chandar Nagar",
          areaName: "Alambagh",
          costForTwo: "19900",
          costForTwoMessage: "₹199 FOR TWO",
          cuisines: ["Indian"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "10+",
          sla: {
            deliveryTime: 40,
            minDeliveryTime: 40,
            maxDeliveryTime: 40,
            lastMileTravel: 7.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40 MINS",
            lastMileTravelString: "7.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 2 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 2 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 2 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 2:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "754029",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "754029",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "417373",
          name: "PAL brothers fast food",
          city: "15",
          slugs: {
            restaurant: "pal-brothers-fast-food-mohanlalganj-mohanlalganj",
            city: "lucknow"
          },
          cloudinaryImageId: "sywmgneasqm40fminqx9",
          address:
            "Dipty ganj, Nagram Rd, Shivpuram Colony, Nilmatha, Nagram, Uttar Pradesh 226002, India",
          locality: "Shivpuram Colony",
          areaName: "Aashiana",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Chinese", "Fast Food", "Snacks"],
          avgRating: 2.5,
          feeDetails: {},
          avgRatingString: "2.5",
          totalRatingsString: "10+",
          sla: {
            deliveryTime: 34,
            minDeliveryTime: 34,
            maxDeliveryTime: 34,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "34 MINS",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 4:15 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 4:15 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_3",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 4:15 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 4:15 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "417373",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "417373",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "672199",
          name: "Maurya Chat And Fast Food Corner",
          city: "15",
          slugs: {
            restaurant: "maurya-chat-and-fast-food-corner-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "173b29e1c491fa6d1bad5b66f6795fa2",
          address:
            "chunnu kheda tiraha manak nagar lucknow, Nagar Nigam Food Safety Zone-20, Lucknow, , Uttar Pradesh, 226011",
          locality: "Nagar Nigam Food Safety Zone-20",
          areaName: "Ashiyana",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chaat", "Snacks"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "7",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 47,
            maxDeliveryTime: 47,
            lastMileTravel: 11.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "47 MINS",
            lastMileTravelString: "11.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 4 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          sld: true,
          unorderableMessage: "Opens next at 4 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 4 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 4:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "672199",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "672199",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "358299",
          name: "Pawan Fast Food",
          city: "15",
          slugs: {
            restaurant: "pawan-fast-food-aminabad-aminabad",
            city: "lucknow"
          },
          cloudinaryImageId: "bpex4wykarxefb9u78tv",
          address:
            "CANTT ROAD,UDAIGANJ CHAURAHA,LKO,MAHATMA GANDHI,LUCKNOW,UTTAR PRADESH-226001",
          locality: "Cantt Road",
          areaName: "Hazratganj",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Street Food", "Chinese", "Indian"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 27,
            minDeliveryTime: 27,
            maxDeliveryTime: 27,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "27 MINS",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 6 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 6 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 6 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 6:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "358299",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "358299",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "782655",
          name: "Dilicious Fast Food",
          city: "15",
          slugs: {
            restaurant: "dilicious-fast-food-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "76162692632a957838b23a020bc9ca73",
          address:
            "D-1205/8, Sector 5, Block D, Indira Nagar, Lucknow, Uttar Pradesh 226016, India",
          locality: "Sector 5",
          areaName: "Indira Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Indian", "Street Food"],
          feeDetails: {},
          avgRatingString: "NEW",
          sla: {
            deliveryTime: 35,
            minDeliveryTime: 35,
            maxDeliveryTime: 35,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35 MINS",
            lastMileTravelString: "7.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "TEMPORARILY"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Temporarily closed for delivery",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          availabilityServiceabilityMessage: "Temporarily closed for delivery",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Outlet not accepting orders at the moment",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "782655",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "782655",
            query: "Fast Food"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "547177",
          name: "RAHI FAST FOOD",
          city: "15",
          slugs: {
            restaurant: "rahi-fast-food-mohanlalganj-mohanlalganj",
            city: "lucknow"
          },
          cloudinaryImageId: "obwcjkiwh01ha5azksi2",
          address: "Lawga Kheda , Kharika , Telibagh ,LUCKNOW",
          locality: "Kharika",
          areaName: "ashiyana",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Fast Food", "Chinese"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 45,
            lastMileTravel: 9.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45 MINS",
            lastMileTravelString: "9.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 2 pm, Monday",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "TEMPORARILY"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 2 pm, Monday",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 2 pm, Monday",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens on Mon at 2:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "547177",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "547177",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "653756",
          name: "Zaika Fast Food",
          city: "15",
          slugs: {
            restaurant: "zaika-fast-food-mohanlalganj-mohanlalganj",
            city: "lucknow"
          },
          cloudinaryImageId: "023a63cc663b328750810b48abd228b4",
          address: "QWGW+RF2, Telibagh, Lucknow, Uttar Pradesh 226002, India",
          locality: "Gandhi Nagar",
          areaName: "Telibagh",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Fast Food"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 39,
            minDeliveryTime: 39,
            maxDeliveryTime: 39,
            lastMileTravel: 9.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "39 MINS",
            lastMileTravelString: "9.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "TEMPORARILY"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Temporarily closed for delivery",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          availabilityServiceabilityMessage: "Temporarily closed for delivery",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Outlet not accepting orders at the moment",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "653756",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "653756",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "762731",
          name: "Delight Fast Food",
          city: "15",
          slugs: {
            restaurant: "delight-fast-food-mahanagar-mahanagar-2",
            city: "lucknow"
          },
          cloudinaryImageId: "bc8ba0b29c54f10860a40de9f76c3153",
          address:
            "Badshah Nagar, Metro Station,  Mahanagar, Lucknow, MAHA NAGAR,  Nagar Nigam Food Safety Zone-12,  Lucknow, Uttar Pradesh - 226006",
          locality: "Badshah Nagar",
          areaName: "Mahanagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "South Indian", "Snacks"],
          feeDetails: {},
          avgRatingString: "NEW",
          sla: {
            deliveryTime: 26,
            minDeliveryTime: 26,
            maxDeliveryTime: 26,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "26 MINS",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "TEMPORARILY"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Temporarily closed for delivery",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          availabilityServiceabilityMessage: "Temporarily closed for delivery",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Outlet not accepting orders at the moment",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "762731",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "762731",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "770325",
          name: "Fast Food Destination",
          city: "15",
          slugs: {
            restaurant: "fast-food-destination-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "578d0ab17d249663db3d714764db9faa",
          address:
            "Shivpuri Colony Kamta, ISMILEGANJ-Ist , Nagar Nigam Food Safety Zone-13, Lucknow, Uttar Pradesh",
          locality: "Nagar Nigam Food",
          areaName: "Indira Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "Snacks"],
          feeDetails: {},
          avgRatingString: "NEW",
          sla: {
            deliveryTime: 39,
            minDeliveryTime: 39,
            maxDeliveryTime: 39,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "39 MINS",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11:30 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 11:30 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11:30 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:30 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "770325",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "770325",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "515144",
          name: "Chandigarh Fast Food",
          city: "15",
          slugs: {
            restaurant: "chandigarh-fast-food-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "pon9voxe4osnoklh7y6r",
          address:
            "SANDEEP KUMAR, HOUSE NO-E-206, SECTOR M ,AASHIYANA, LUCKNOW 226012",
          locality: "Sector M",
          areaName: "Ashiyana",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "Indian"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "10+",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 45,
            lastMileTravel: 9.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45 MINS",
            lastMileTravelString: "9.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 5 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 5 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 5 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 5:00 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "515144",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "515144",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "729768",
          name: "Neha Fast Food",
          city: "15",
          slugs: {
            restaurant: "neha-fast-food-aliganj-aliganj",
            city: "lucknow"
          },
          cloudinaryImageId: "5325eb4578aa91c352e76409eff80d93",
          address:
            "538A/0684B TRIVENI NAGAR III  AHIBARANPUR, Lucknow (M Corp.),  Lucknow Tahsil, Lucknow, Uttar Pradesh -  226020",
          locality: "Triveni Nagar III",
          areaName: "Aliganj",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Fast Food", "Snacks", "Beverages"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 37,
            maxDeliveryTime: 37,
            lastMileTravel: 7.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "37 MINS",
            lastMileTravelString: "7.8 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 9:30 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 9:30 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 9:30 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 9:30 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "729768",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0",
            restaurant_id: "729768",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "513406",
          name: "New Raj Fast Food",
          city: "15",
          slugs: {
            restaurant: "new-raj-fast-food-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "wixknfsftqmofwxqat2g",
          address:
            "459 NEAR SHAKTI MANDIR CHAURAHA, LDA COLONY, PARAG ROAD, Lucknow (M Corp.), Lucknow Tahsil, Lucknow, Uttar Pradesh-226012",
          locality: "Parag road",
          areaName: "Transport Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Fast Food", "Chinese", "Pastas"],
          avgRating: 3.5,
          feeDetails: {},
          avgRatingString: "3.5",
          totalRatingsString: "10+",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 47,
            maxDeliveryTime: 47,
            lastMileTravel: 10.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "47 MINS",
            lastMileTravelString: "10.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 11 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "513406",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "513406",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "517475",
          name: "Zamzam Fast Food Hub",
          city: "15",
          slugs: {
            restaurant: "zamzam-fast-food-hub-ashiyana-ashiyana",
            city: "lucknow"
          },
          cloudinaryImageId: "wewo1pmttecktsyi5tjr",
          address: "LGF50 SHAKUNTALA PLAZA NEAR PHOENIX MALL, Lucknow",
          locality: "Phoenix mall",
          areaName: "Alambagh",
          costForTwo: "10000",
          costForTwoMessage: "₹100 FOR TWO",
          cuisines: ["Fast Food", "Chinese", "Snacks"],
          avgRating: 3.5,
          feeDetails: {},
          avgRatingString: "3.5",
          totalRatingsString: "10+",
          sla: {
            deliveryTime: 44,
            minDeliveryTime: 44,
            maxDeliveryTime: 44,
            lastMileTravel: 9.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "44 MINS",
            lastMileTravelString: "9.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 11 am, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg"
              }
            ]
          },
          unorderableMessage: "Opens next at 11 am, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 11 am, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 11:00 AM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "517475",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "517475",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "561990",
          name: "Royal Fast Food Corner",
          city: "15",
          slugs: {
            restaurant: "royal-fast-food-corner-indira-nagar-indira-nagar",
            city: "lucknow"
          },
          cloudinaryImageId: "mtfu33ubecci0mr7lnko",
          address: "PLOT NO-122/2 PRITI NAGAR,AJY NAGAR,CHINHT,LUCKNOW",
          locality: "Ajay Nagar",
          areaName: "Chinhat",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Fast Food", "Chinese", "Snacks"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "8",
          sla: {
            deliveryTime: 42,
            minDeliveryTime: 42,
            maxDeliveryTime: 42,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "42 MINS",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 12:30 pm, today",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR NOW"
            }
          },
          aggregatedDiscountInfo: {
            visible: true
          },
          badges: {},
          unorderableMessage: "Opens next at 12:30 pm, today",
          aggregatedDiscountInfoV2: {
            visible: true
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 12:30 pm, today",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY"
            },
            subTitle: {
              text: "CLOSED"
            },
            message: {
              text: "Opens today at 12:30 PM",
              textColour: "primary"
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803"
            }
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {}
          }
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"70b63aae-f609-822c-e777-c65c2145d36a","grid":"537d6abd-4a38-4fa4-9ad8-fb9aecbebd29","queryUniqueId":"45ca4516-bf68-cf1b-1386-3aedf13b529d","query":"Fast Food"}',
          objectValue: "561990",
          clickObjectName: "click-restaurant"
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "561990",
            query: "Fast Food",
            sourceSessionId: "b61a2803-2cd7-4478-8c6b-eda7ae98b5db",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6585f2b6c6ed81faa6df287f6fca05c0"
          }
        }
      }
    }
  }
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, cloudinaryImageId, costForTwoMessage} = resData;
  const { deliveryTime } = resData.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{deliveryTime + " minutes"}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwoMessage}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {cards.map((restaurant) => {
          return <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant.card.card.info} />;
        })}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
