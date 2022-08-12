import React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(number = 1) {
  navigationRef.current?.dispatch(StackActions.pop(number));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function setRoot(routeName, params = {}, index = 0) {
  navigationRef.current?.reset({
    index: index,
    routes: [
      {
        name: routeName,
        params,
      },
    ],
  });
}

export function getCurrentRoute() {
  const currentRoute = navigationRef.current?.getCurrentRoute();
  return currentRoute?.name;
}
