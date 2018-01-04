
import React, { Component } from 'react';
import SectionItem from './Section.js'
import Mainpage from './MainPage.js';

class NonVegDishes extends React.Component {
  constructor(){
    super();
     this.state = { nonVegDish: [
                          {
                          title: 'Chicken Cacciatore',
                          category: 'Non Vegetarian Main Course',
                          description: 'Cacciatore (pronounced [kattʃaˈtoːre]) means "hunter" in Italian. In cuisine, alla cacciatora refers to a meal prepared "hunter-style" with onions, herbs, usually tomatoes, often bell peppers, and sometimes wine. Cacciatore is popularly made with braised chicken (pollo alla cacciatora) or rabbit (coniglio alla cacciatora). The salamino cacciatore is a small salami that is seasoned with only garlic and pepper.',
                          imageurl:'../images/chicken/Chicken-cacciatore.jpg'
                        },
                        {
                          title: 'Chicken Korma',
                          category: 'Non Vegetarian Main Course',
                          description: 'Korma (from Turkish kavurma) is a dish originating in the Indian subcontinent, consisting of meat or vegetables braised with yogurt or cream, water or stock, and spices to produce a thick sauce or glaze.',
                          imageurl:'../images/chicken/chicken.korma.gif'
                        },
                        {
                          title: 'Chicken Tandoori',
                          category: 'Non Vegetarian Snacks',
                          description: 'Tandoori chicken is chicken dish prepared by roasting chicken marinated in yoghurt and spices in a tandoor, a cylindrical clay oven. It is a popular dish from the Indian subcontinent and has become popular in other parts of the world through restaurants serving food from the Indian subcontinent.',
                          imageurl:'../images/chicken/tandoori-chicken.jpg'
                        },
                        {
                          title: 'Chicken Karahi',
                          category: 'Non Vegetarian Main Course',
                          description: 'Chicken karahi, also known as gosht karahi (when prepared with goat or lamb meat instead of chicken), and kadai chicken, is a dish from the Indian subcontinent noted for its spicy taste; it is notable in Pakistani and North Indian cuisine. The Pakistani version does not have capsicum or onions whereas the North Indian version uses capsicum. The dish is prepared in a karahi (wok). It can take between 30 to 50 minutes to prepare and cook the dish and can a stored for later consumption. It can be served with naan, roti or rice. This dish is one of the hallmarks of Indian and Pakistani cuisine.',
                          imageurl:'../images/chicken/kashmiri-Chicken.jpg'
                        },
                        {
                          title: 'Grilled Chicken',
                          category: 'Non Vegetarian Snacks',
                          description: 'Barbecue chicken consists of chicken parts or entire chickens that are barbecued, grilled or smoked. There are many global and regional preparation techniques and cooking styles. Barbecue chicken is often seasoned or coated in a spice rub, barbecue sauce, or both. Marinades are also used to tenderize the meat and add flavor. Rotisserie chicken has gained prominence and popularity in U.S. grocery markets. Barbecued chicken is one of the most popular barbecue dishes.',
                          imageurl:'../images/chicken/Grilled-Chicken.jpg'
                        }
                      ]
            }
          };
    render() {
      return(
      <div>
         <Mainpage dish={this.state.nonVegDish}></Mainpage>
        </div>
      );
     
    }
}

export default NonVegDishes