import React from 'react'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, Text } from 'react-native'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

// This is the main layout for the app. It contains the tab navigation and the screens for each tab.
// The tabs are Home, Search, Saved, and Profile. Each tab has its own screen and can be navigated to by clicking on the tab.

// This is the TabIcon component. It is used to display the icon and text for the Home tab. It is a reusable component that can be used in other parts of the app as well. We are passing the props fucused, icon, and title to the TabIcon component to display the icon and text for the Home tab when the tab is focused.
// The focused prop is used to change the icon and text color when the tab is focused. The icon prop is used to display the icon for the Home tab. The title prop is used to display the text for the Home tab.
// It uses the ImageBackground component to display the background image and the Image component to display the icon.
const TabIcon = ({ focused, icon, title }: any) => {
    return (
        //The pill shape background for the Home tab icon
        //The ImageBackground component is used to display the background image and the Image component is used to display the icon.
        <ImageBackground
            source={images.highlight}
            className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
            <Image source={icon} tintColor="#151312" className="size-5" />
            <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
        </ImageBackground>
    )
}

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        // we are reusing the TabIcon component here to display the icon and text for the Home tab
                        // we are passing the focused prop to the TabIcon component to change the icon and text color when the tab is focused
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        // we are reusing the TabIcon component here to display the icon and text for the Search tab
                        // we are passing the focused prop to the TabIcon component to change the icon and text color when the tab is focused
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Search"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        // we are reusing the TabIcon component here to display the icon and text for the Search tab
                        // we are passing the focused prop to the TabIcon component to change the icon and text color when the tab is focused
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title="Saved"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        // we are reusing the TabIcon component here to display the icon and text for the Search tab
                        // we are passing the focused prop to the TabIcon component to change the icon and text color when the tab is focused
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            title="Profile"
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout