
import React, { Component } from 'react';
import SectionItem from './Section.js'
import Mainpage from './MainPage.js'

class VegDishes extends React.Component {
  constructor(){
    super();
     this.state = { VegDish: [
                          {
                          title: 'Cholley Bhature',
                          category: 'Vegetarian snacks',
                          description: 'Bhature chole (Hindi: छोले भटूरे, Punjabi: ਛੋਲੇ ਭਟੂਰੇ), a dish from the Punjabi cuisine, is a combination of chana masala (spicy white chickpeas) and bhatura, a fried bread made from maida flour (soft wheat). Chole bhature is often eaten as a breakfast, sometimes accompanied with lassi, however it can also be a street food or a complete meal, and may be accompanied by, for example, onions, carrot pickle, green chutney and achaar.',
                          imageurl:'../images/veg/chole-bhature.jpg'
                        },
                        {
                          title: 'Dal Fry',
                          category: 'Vegetarian Main Course',
                          description: 'Dal (also spelled daal, dail, dhal; pronunciation: [d̪aːl]) is a term in the Indian subcontinent for dried, split pulses (that is, lentils, peas, and beans). The term is also used for various soups prepared from these pulses. These pulses are among the most important staple foods in SAARC countries, and form an important part of Indian, Nepalese, Pakistani, Sri Lankan and Bangladeshi cuisines. Dals are frequently eaten with flatbreads such as rotis or chapatis or with rice, a combination referred to as dal bhat. Dals are high in protein relative to other plants.',
                          imageurl:'../images/veg/dal_fry.jpg'
                        },
                        {
                          title: 'Lauki Kofta',
                          category: 'Vegetarian Main Course',
                          description: 'Kofta is a family of meatball or meatloaf dishes found in South Asian, Middle Eastern, Balkan, and Central Asian cuisine. In the simplest form, koftas consist of balls of minced or ground meat—usually beef, chicken, lamb, or pork—mixed with spices and/or onions. In South Asia and the Middle East, koftas are usually made from lamb, beef, mutton or chicken, whereas Greek, Cypriot, and Balkan versions may use pork, beef, lamb, or mixture of the three. In India, vegetarian varieties include koftas made from potato, calabash, paneer, or banana. In Europe, kofta is often served as fast food sandwich in kebab shops. Koftas in India are usually served cooked in a spicy curry/gravy and are eaten with boiled rice or a variety of Indian breads. In Iran, Iraq and Azerbaijan, koftas are served with a spiced gravy, as dry variations are considered to be kebabs. Shrimp and fish koftas are found in South India, West Bengal, some parts of the Persian Gulf, and parts of Egypt.',
                          imageurl:'../images/veg/lauki-kofta.jpg'
                        },
                        {
                          title: 'Paneer Makhni',
                          category: 'Vegetarian Main Course',
                          description: 'Paneer makhani is a slightly sweet creamy dish of paneer, in which the gravy is prepared usually with butter (makhan), tomatoes, cashews or cream. Masalas such as red chili powder and garam masala are also used to prepare this gravy. A survey found that paneer butter masala was one of the top five foods ordered in India.',
                          imageurl:'../images/veg/PaneerMakhni.jpg'
                        },
                        {
                          title: 'Matar Paneer',
                          category: 'Vegetarian Main Course',
                          description: 'Mattar paneer is a vegetarian north Indian dish consisting of peas and paneer in a tomato based sauce, spiced with garam masala.It is often served with rice and an Indian type of bread (naan, paratha, poori, or roti depending on region). Various other ingredients are often added, such as "aloo" (potato), corn, yogurt or cream. In the UK it is often referred to as "cheesy peas".',
                          imageurl:'../images/veg/matar-paneer.jpg'
                        }
                      ]
            }
          };
    render() {
      return(
      <div>
          <Mainpage dish={this.state.VegDish}></Mainpage>
        </div>
      );
     
    }
}

export default VegDishes