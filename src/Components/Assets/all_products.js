import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";


let all_product = [
    {
        id: 1,
        name: "Classic Cotton Shirt",
        category: "men",
        image: p1_img,
        new_price: 45.0,
        old_price: 70.0,
    },
    {
        id: 2,
        name: "Denim Jacket",
        category: "women",
        image: p2_img,
        new_price: 85.0,
        old_price: 120.0,
    },
    {
        id: 3,
        name: "Slim Fit Jeans",
        category: "men",
        image: p3_img,
        new_price: 60.0,
        old_price: 95.0,
    },
    {
        id: 4,
        name: "Printed Summer Dress",
        category: "women",
        image: p4_img,
        new_price: 50.0,
        old_price: 80.0,
    },
    {
        id: 5,
        name: "Sports Running Shoes",
        category: "men",
        image: p5_img,
        new_price: 75.0,
        old_price: 110.0,
    },
    {
        id: 6,
        name: "Leather Handbag",
        category: "women",
        image: p6_img,
        new_price: 95.0,
        old_price: 150.0,
    },
    {
        id: 7,
        name: "Casual Hoodie",
        category: "kids",
        image: p7_img,
        new_price: 40.0,
        old_price: 65.0,
    },
    {
        id: 8,
        name: "Formal Blazer",
        category: "men",
        image: p8_img,
        new_price: 110.0,
        old_price: 160.0,
    },
    {
        id: 9,
        name: "Sneakers Low Top",
        category: "men",
        image: p9_img,
        new_price: 55.0,
        old_price: 85.0,
    },
    {
        id: 10,
        name: "Striped Polo T-Shirt",
        category: "kids",
        image: p10_img,
        new_price: 35.0,
        old_price: 55.0,
    },
    {
        id: 11,
        name: "Party Wear Gown",
        category: "women",
        image: p11_img,
        new_price: 120.0,
        old_price: 180.0,
    },
    {
        id: 12,
        name: "Winter Jacket",
        category: "men",
        image: p12_img,
        new_price: 90.0,
        old_price: 140.0,
    },
    {
        id: 13,
        name: "Graphic Tee",
        category: "kids",
        image: p13_img,
        new_price: 28.0,
        old_price: 45.0,
    },
    {
        id: 14,
        name: "Maxi Skirt",
        category: "women",
        image: p14_img,
        new_price: 55.0,
        old_price: 90.0,
    },
    {
        id: 15,
        name: "Training Joggers",
        category: "men",
        image: p15_img,
        new_price: 48.0,
        old_price: 75.0,
    },
    {
        id: 16,
        name: "Beach Sandals",
        category: "kids",
        image: p16_img,
        new_price: 22.0,
        old_price: 40.0,
    },
    {
        id: 17,
        name: "Woolen Scarf",
        category: "women",
        image: p17_img,
        new_price: 30.0,
        old_price: 55.0,
    },
    {
        id: 18,
        name: "Crop Top",
        category: "women",
        image: p18_img,
        new_price: 42.0,
        old_price: 70.0,
    },
    {
        id: 19,
        name: "Cargo Pants",
        category: "men",
        image: p19_img,
        new_price: 65.0,
        old_price: 100.0,
    },
    {
        id: 20,
        name: "Oversized Sweatshirt",
        category: "kids",
        image: p20_img,
        new_price: 50.0,
        old_price: 80.0,
    },
    {
        id: 21,
        name: "Ankle Boots",
        category: "women",
        image: p21_img,
        new_price: 85.0,
        old_price: 130.0,
    },
    {
        id: 22,
        name: "Sports Watch",
        category: "men",
        image: p22_img,
        new_price: 150.0,
        old_price: 220.0,
    },
    {
        id: 23,
        name: "Floral Kurti",
        category: "women",
        image: p23_img,
        new_price: 55.0,
        old_price: 95.0,
    },
    {
        id: 24,
        name: "Kurta Pajama Set",
        category: "men",
        image: p24_img,
        new_price: 70.0,
        old_price: 110.0,
    },
    {
        id: 25,
        name: "Ethnic Saree",
        category: "women",
        image: p25_img,
        new_price: 140.0,
        old_price: 200.0,
    },
    {
        id: 26,
        name: "Track Pants",
        category: "kids",
        image: p26_img,
        new_price: 38.0,
        old_price: 65.0,
    },
    {
        id: 27,
        name: "Denim Shorts",
        category: "women",
        image: p27_img,
        new_price: 48.0,
        old_price: 85.0,
    },
    {
        id: 28,
        name: "Loafers",
        category: "men",
        image: p28_img,
        new_price: 60.0,
        old_price: 100.0,
    },
    {
        id: 29,
        name: "Bomber Jacket",
        category: "men",
        image: p29_img,
        new_price: 95.0,
        old_price: 150.0,
    },
    {
        id: 30,
        name: "Sleeveless Tank",
        category: "kids",
        image: p30_img,
        new_price: 25.0,
        old_price: 45.0,
    },
    {
        id: 31,
        name: "Corduroy Shirt",
        category: "men",
        image: p31_img,
        new_price: 58.0,
        old_price: 95.0,
    },
    {
        id: 32,
        name: "Chinos",
        category: "men",
        image: p32_img,
        new_price: 62.0,
        old_price: 100.0,
    },
    {
        id: 33,
        name: "Sports Bra",
        category: "women",
        image: p33_img,
        new_price: 40.0,
        old_price: 70.0,
    },
    {
        id: 34,
        name: "Windbreaker Jacket",
        category: "men",
        image: p34_img,
        new_price: 100.0,
        old_price: 160.0,
    },
    {
        id: 35,
        name: "Wool Sweater",
        category: "women",
        image: p35_img,
        new_price: 85.0,
        old_price: 130.0,
    },

]