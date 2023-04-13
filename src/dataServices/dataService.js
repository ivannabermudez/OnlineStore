
import axios from 'axios';
var catalog =[
    {
        "title" : "Almond Milk",
        "category": "farm",
        "price": 15.99,
        "image":"milk.webp",
        "_id":"75839475860" //must be unique
    },

    {
        "title" : "Matcha Powder",
        "category": "farm",
        "price": 5.99,
        "image":"matchapowder.webp",
        "_id":"75839475870" //must be unique
    },

    {
        "title" : "Oat Milk",
        "category": "farm",
        "price": 7.99,
        "image":"oatmilk.jpeg",
        "_id":"75839475880" //must be unique
    },

    {
        "title" : "Chai Tea Blend",
        "category": "farm",
        "price": 18.99,
        "image":"chaiblend.webp",
        "_id":"75839475890" //must be unique
    },

    {
        "title" : "Organic Vanilla Syrup",
        "category": "farm",
        "price": 3.99,
        "image":"vanillasyrup.png",
        "_id":"758394758100" //must be unique
    },

    {
        "title" : "Wildflower Honey",
        "category": "farm",
        "price": 1.99,
        "image":"wildflower.jpeg",
        "_id":"75839475860" //must be unique
    },
    {
        "title": "Organic Molases Syrup",
        "category": "sweeteners",
        "price": 4.99,
        "image": "molases.jpeg",
        "_id": "75839475760"
    
    },
    {
    "title": "Organic Coconut Milk",
        "category": "milks",
        "price": 4.99,
        "image": "coconutmilk.webp",
        "_id": "75839475760"
    
    },
    {
    "title": "Organic Soy Milk",
        "category": "milks",
        "price": 3.99,
        "image": "soymilk.webp",
        "_id": "75839475760"
    }


]; 

class DataService{

   async getProducts() {


        // return catalog;

        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;
    }

    async saveProducts (product) {
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data
    }
}

export default DataService;
