import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

const categories = [
  {
    id: "1",
    name: "Chicken",
    image: "https://freshfooders.com/uploads/category/1715357285.png",
  },
  {
    id: "2",
    name: "Beef",
    image: "https://freshfooders.com/uploads/category/1715354881.png",
  },
  {
    id: "3",
    name: "Lamb",
    image: "https://freshfooders.com/uploads/category/1715355156.png",
  },
  {
    id: "4",
    name: "Pork",
    image: "https://freshfooders.com/uploads/category/1715355786.png",
  },
  {
    id: "5",
    name: "Fish",
    image: "https://freshfooders.com/uploads/category/1715358166.png",
  },
  {
    id: "6",
    name: "Vegan",
    image: "https://freshfooders.com/uploads/category/1715358980.png",
  },
  {
    id: "7",
    name: "Kid Friendly",
    image: "https://freshfooders.com/uploads/category/1715617042.png",
  },
  {
    id: "8",
    name: "Veggie",
    image: "https://freshfooders.com/uploads/category/1715355786.png",
  },
  {
    id: "9",
    name: "Dessert",
    image: "https://freshfooders.com/uploads/category/1712578720.jpg",
  },
];

const menuItems = [
  {
    id: "1",
    name: "Chicken karahi",
    category: "Chicken",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718777293.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description:
      "A delicious dish of chicken cooked in a spicy and flavorful gravy.",
    store: "Chicken Delight",
  },
  {
    id: "2",
    name: "Lamb Burger with mint yoghurt",
    category: "Lamb",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1717823820.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Juicy lamb burger served with a refreshing mint yoghurt.",
    store: "Burger House",
  },
  {
    id: "3",
    name: "Chicken Burger",
    category: "Chicken",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1713367259.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Crispy chicken burger with fresh lettuce and mayo.",
    store: "Burger House",
  },
  {
    id: "4",
    name: "Vanilla Cake Slice",
    category: "Dessert",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1712578720.jpg",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Delicious slice of vanilla cake with a creamy frosting.",
    store: "Sweet Treats",
  },
  {
    id: "5",
    name: "Beef Wellington & Beans",
    category: "Beef",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718779167.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Tender beef Wellington served with beans.",
    store: "Gourmet Meals",
  },
  {
    id: "6",
    name: "Curry Puffs 4 Pieces",
    category: "Appetizer",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1715523241.jpg",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Spicy curry puffs filled with a savory mixture.",
    store: "Appetizer Heaven",
  },
  {
    id: "7",
    name: "Vege Spaghetti Squash Lasagna",
    category: "Vegan",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718780269.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Healthy vegan lasagna made with spaghetti squash.",
    store: "Vegan Delight",
  },
  {
    id: "8",
    name: "Beef & Bacon Burger",
    category: "Beef",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718777005.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Juicy beef burger topped with crispy bacon.",
    store: "Burger House",
  },
  {
    id: "9",
    name: "Custard Donut",
    category: "Dessert",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718784726.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Soft donut filled with creamy custard.",
    store: "Sweet Treats",
  },
  {
    id: "10",
    name: "Spicy Thai Beef",
    category: "Beef",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718779643.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Spicy Thai beef served with a tangy sauce.",
    store: "Gourmet Meals",
  },
  {
    id: "11",
    name: "Prime Rib & Garlic Mash",
    category: "Beef",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718778959.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Tender prime rib served with garlic mashed potatoes.",
    store: "Gourmet Meals",
  },
  {
    id: "12",
    name: "Meat Lovers Pizza",
    category: "Pizza",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1715006490.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Pizza loaded with various meats.",
    store: "Pizza Palace",
  },
  {
    id: "13",
    name: "Massman Beef Curry",
    category: "Beef",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718775486.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Rich and flavorful Massman beef curry.",
    store: "Curry House",
  },
  {
    id: "14",
    name: "Green curry Chicken",
    category: "Chicken",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1715009774.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Spicy and aromatic green chicken curry.",
    store: "Curry House",
  },
  {
    id: "15",
    name: "Garlic Herb Butter Steak",
    category: "Beef",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718780392.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Juicy steak topped with garlic herb butter.",
    store: "Steakhouse",
  },
  {
    id: "16",
    name: "Pad Thai",
    category: "Thai",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1715009947.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Classic Pad Thai with a tangy sauce.",
    store: "Thai Delight",
  },
  {
    id: "17",
    name: "Beef Burger With Cheese",
    category: "Beef",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1715006198.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Beef burger with melted cheese and fresh toppings.",
    store: "Burger House",
  },
  {
    id: "18",
    name: "Crinkle Cut Chips",
    category: "Snack",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1715004497.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Crispy crinkle-cut potato chips.",
    store: "Snack Shack",
  },
  {
    id: "19",
    name: "Satay Chicken Skewers 6 Pieces",
    category: "Chicken",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1715010762.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Grilled chicken skewers with satay sauce.",
    store: "Satay House",
  },
  {
    id: "20",
    name: "Triple Vege Sliders",
    category: "Vegan",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718778489.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Three mini sliders with various vegetables.",
    store: "Vegan Delight",
  },
  {
    id: "21",
    name: "Vegan Pad Thai",
    category: "Vegan",
    price: 19.23,
    image: "https://freshfooders.com/uploads/menu/1718778178.png",
    location: "25 Collins St, Fitzroy, Vic, 3065",
    description: "Classic Pad Thai made vegan-friendly.",
    store: "Thai Delight",
  },
];

const HomeScreen = ({ navigation }: any): any => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const filteredMenuItems = menuItems.filter(
    (item) =>
      (selectedCategory ? item.category === selectedCategory : true) &&
      (filter === "All" ? true : item?.filter && item.filter.includes(filter))
  );

  const handleMenuItemPress = (item: any) => {
    setSelectedMenuItem(item);
    toggleModal();
  };

  const resetCategoryFilter = () => {
    setSelectedCategory(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.locationText}>
          <Ionicons name="location-outline" size={16} color="black" /> 25
          Collins St, Fitzroy, Vic, 3065
        </Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFilter("Dine-In")}
          >
            <Text style={styles.buttonText}>Dine-In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFilter("Takeaway")}
          >
            <Text style={styles.buttonText}>Takeaway</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFilter("Drive-thru")}
          >
            <Text style={styles.buttonText}>Drive-thru</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFilter("All")}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Food Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item.name)}
              style={[
                styles.categoryItem,
                selectedCategory === item.name && styles.selectedCategoryItem,
              ]}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.button} onPress={resetCategoryFilter}>
          <Text style={styles.buttonText}>Reset Categories</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItems}>
        <Text style={styles.sectionTitle}>Nearby Food</Text>
        {filteredMenuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleMenuItemPress(item)}
          >
            <View style={styles.menuItem}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.menuItemDetails}>
                <View style={styles.menuItemHeader}>
                  <Text style={styles.menuItemName}>{item.name}</Text>
                  <Text style={styles.menuItemPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
                <Text style={styles.menuItemLocation}>
                  <Ionicons name="location-outline" size={16} color="gray" />{" "}
                  {item.location}
                </Text>
                <View style={styles.itemFilters}>
                  <Text style={styles.itemFilter}>Dine-In</Text>
                  <Text style={styles.itemFilter}>Takeaway</Text>
                  <Text style={styles.itemFilter}>Drive-thru</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        swipeDirection={["down"]}
        onSwipeComplete={toggleModal}
        style={styles.bottomModal}
      >
        {selectedMenuItem && (
          <View style={styles.modalContent}>
            <Image
              source={{ uri: selectedMenuItem.image }}
              style={styles.modalImage}
            />
            <Text style={styles.modalItemName}>{selectedMenuItem.name}</Text>
            <Text style={styles.modalItemPrice}>
              ${selectedMenuItem.price.toFixed(2)}
            </Text>
            <View style={styles.itemFilters}>
              <Text style={styles.itemFilter}>Dine-In</Text>
              <Text style={styles.itemFilter}>Takeaway</Text>
              <Text style={styles.itemFilter}>Drive-thru</Text>
            </View>
            <Text style={styles.modalItemDescription}>
              {selectedMenuItem.description}
            </Text>
            <Text style={styles.modalStoreLocation}>
              <Ionicons name="location-outline" size={16} color="blue" />{" "}
              {selectedMenuItem.store}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Navigate To Store</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Store Full Menu</Text>
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 60,
    backgroundColor: "#f8f8f8",
  },
  header: {
    marginBottom: 16,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categories: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 8,
    alignItems: "center",
    elevation: 3,
  },
  button: {
    backgroundColor: "#ff8d2f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  resetButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 8,
    alignItems: "center",
    elevation: 3,
  },
  selectedCategoryItem: {
    backgroundColor: "#d1d1d1",
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
    marginTop: 8,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    marginBottom: 16,
  },
  menuItemDetails: {
    flex: 1,
    justifyContent: "flex-start",
  },
  menuItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuItemPrice: {
    fontSize: 14,
    color: "blue",
    fontWeight: "bold",
  },
  menuItemLocation: {
    fontSize: 12,
    color: "gray",
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  itemFilters: {
    flexDirection: "row",
    marginTop: 8,
  },
  itemFilter: {
    backgroundColor: "#e0e0e0",
    padding: 4,
    borderRadius: 4,
    marginRight: 8,
    fontSize: 12,
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  modalItemName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  modalItemPrice: {
    fontSize: 20,
    color: "#666",
    marginBottom: 10,
  },
  modalItemDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  modalStoreLocation: {
    fontSize: 16,
    color: "blue",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;
