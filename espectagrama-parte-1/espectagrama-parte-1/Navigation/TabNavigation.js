const BottomTabNavigator = () => {
  return(
    <TabNavigator
        screenOpitions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
                iconName = Focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
        })
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        }
    >
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="CriarPost" component={CreatePost}/>
    </TabNavigator>
  );
}