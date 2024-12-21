import { createSelector } from '@reduxjs/toolkit';

export const selectEquipmentFilters = state => state.filters.equipmentList;
export const selectTypeFilters = state => state.filters.typeList;
export const selectLocation = state => state.filters.location;

export const selectFiltersObj = createSelector(
  [selectEquipmentFilters, selectTypeFilters, selectLocation],
  (equipmentList, typeList, location) => {
    const equipmentObj = equipmentList.reduce((acc, item) => {
      if (item.selected) {
        return item.transmission
          ? { ...acc, transmission: item.transmission }
          : { ...acc, [item.name]: true };
      }
      return acc;
    }, {});
    const typeObj = typeList.reduce(
      (acc, item) => (item.selected ? { ...acc, form: item.form } : acc),
      {}
    );
    if (location) {
      const [city, country] = location.split(', ');

      return {
        ...equipmentObj,
        ...typeObj,
        location: [country, city].join(', '),
      };
    }
    return { ...equipmentObj, ...typeObj };
  }
);
