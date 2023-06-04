import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// Styles
import mainStyles from '../../styles/mainStyles';


const DriverRowComponent = ({ item, distance100, distance75, title100, title75, itemClub, itemId }) => {
    // <Text key={item.id}>{item.club}</Text>
    <TouchableOpacity onPress={() => console.log(`Pressed ${item.club} & ${item.value}`)}>
        <View style={[mainStyles.listRow, {}]}>
            <View style={[mainStyles.row, { flex: 1, alignItems: 'stretch', }]}>
                <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 10, }}>
                    {/* Club Row */}
                    <View style={{}}>
                        <Text style={[mainStyles.header2, { color: "blue" }]} key={itemId}>{itemClub}</Text>
                    </View>
                </View>
                <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'flex-start', }}>
                    {/* 100% yardage */}
                    <View style={{ alignItems: "center", }}>
                        <View style={[mainStyles.pillBackground100, {}]}>
                            {/* Swing Percent */}
                            <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{title100}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                            <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                <Text style={mainStyles.smallText}>yards</Text>
                                {/* Shot distance */}
                                <Text style={mainStyles.header2}>{distance100}</Text>
                                {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                            </View>
                            {/* Shot standard deviation */}
                            {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                            <Text style={mainStyles.smallText}>+/-</Text>
                                            <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                        </View> */}
                        </View>
                    </View>
                    {/* 75% yardage */}
                    <View style={{ alignItems: "center", paddingHorizontal: 10, }}>
                        <View style={[mainStyles.pillBackground75, {}]}>
                            {/* Swing Percent */}
                            <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{title75}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                            <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                <Text style={mainStyles.smallText}>yards</Text>
                                {/* Shot distance */}
                                <Text style={mainStyles.header2}>{distance75}</Text>
                                {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                            </View>
                            {/* Shot standard deviation */}
                            {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                            <Text style={mainStyles.smallText}>+/-</Text>
                                            <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                        </View> */}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
};

export default DriverRowComponent;