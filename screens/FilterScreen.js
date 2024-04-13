import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'; // Import ImageBackground
import { Checkbox } from 'react-native-paper';

const FilterScreen = () => {
  const [checkedFilters, setCheckedFilters] = useState([]);

  const filters = [
    { name: 'Hot Coffee'},
    { name: 'Iced Coffee' },
    { name: 'Espresso'},
    { name: 'Cappuccino'},
    { name: 'Latte'},
    { name: 'Mocha'},
  ];

  const toggleFilter = (filterName) => {
    if (checkedFilters.includes(filterName)) {
      setCheckedFilters(checkedFilters.filter((filter) => filter !== filterName));
    } else {
      setCheckedFilters([...checkedFilters, filterName]);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/fe/b3/e6/feb3e6bc5366b72823f770c7cce3eee3.jpg' }} // Replace 'your_background_image_uri_here' with your actual image URI
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Filters</Text>
        {filters.map((filter, index) => (
          <View key={index} style={styles.filterItem}>
            <Checkbox.Android
              status={checkedFilters.includes(filter.name) ? 'checked' : 'unchecked'}
              onPress={() => toggleFilter(filter.name)}
              color="#FF5733"
            />
            <Text style={styles.filterName}>{filter.name}</Text>
            <Text style={styles.filterDescription}>{filter.description}</Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterDescription: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
});

export default FilterScreen;
