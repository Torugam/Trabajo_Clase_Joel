import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import PokemonList from '../screens/PokemonList';
import HomeScreen from '../screens/HomeScreen';
import PokemonAxios from '../screens/PokemonAxios';
import ItemListScreen from '../screens/ItemListScreen'; // Importa la nueva pantalla

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          tabBarActiveTintColor: '#000',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="PokemonAxios"
        component={PokemonAxios}
        options={{
          title: 'Lista Pokemon con Axios',
          tabBarActiveTintColor: '#000',
          headerStyle: {
            backgroundColor: '#000',
            borderBottomRightRadius: 35,
            borderBottomLeftRadius: 35,
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          title: 'Lista Pokemon Fetch',
          tabBarActiveTintColor: '#000',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ItemListScreen"
        component={ItemListScreen}
        options={{
          title: 'Lista de Items',
          tabBarActiveTintColor: '#000',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
