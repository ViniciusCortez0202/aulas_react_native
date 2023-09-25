import React from 'react';
import { View } from 'react-native';
import {Ionicons } from '@expo/vector-icons';

export default function HomeIcon({size, color, onPress}) {
    return (
        <Ionicons name="home"
            size={size ?? 50}
            color={color}
            onPress={onPress} />
    );
}