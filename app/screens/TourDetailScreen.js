import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import React from "react";
import COLORS from "../config/COLORS";
import SPACING from "../config/SPACING";
import Ionicons from "@expo/vector-icons/Ionicons";

const TourDetailScreen = ({ tour }) => {
  return (
    <>
      <ScrollView>
        <ImageBackground
          source={tour.image}
          style={{ width: "100%", height: 500 }}
        >
          <SafeAreaView>
            <View
              style={{
                paddingHorizontal: SPACING,
                justifyContent: "space-between",
                flexDirection: "row",
                height: "100%",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.white,
                  width: SPACING * 4,
                  height: SPACING * 4,
                  borderRadius: SPACING * 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="chevron-back"
                  color={COLORS.primary}
                  size={SPACING * 3}
                />
              </TouchableOpacity>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  paddingBottom: SPACING * 8,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.white,
                    width: SPACING * 4,
                    height: SPACING * 4,
                    borderRadius: SPACING * 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={SPACING * 3}
                  />
                </TouchableOpacity>
                <View>
                  {tour.images.map((gallery, index) => (
                    <TouchableOpacity
                      style={{
                        width: SPACING * 6,
                        height: SPACING * 6,
                        padding: SPACING / 2,
                        backgroundColor: COLORS.white,
                        borderRadius: SPACING,
                        marginBottom: SPACING,
                      }}
                      key={index}
                    >
                      <Image
                        source={gallery.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: SPACING,
                        }}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SPACING * 2,
            borderRadius: SPACING * 3,
            bottom: SPACING * 3,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: SPACING * 2,
                fontWeight: "bold",
                color: COLORS.dark,
              }}
            >
              {tour.title}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: "bold",
                  color: COLORS.dark,
                }}
              >
                {tour.price}
              </Text>
              <Text>/person</Text>
            </View>
          </View>
          <View style={{ marginVertical: SPACING * 2 }}>
            <View style={{ flexDirection: "row", marginBottom: SPACING * 2 }}>
              <TouchableOpacity
                style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: "bold",
                    fontSize: SPACING * 1.7,
                  }}
                >
                  Overview
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
              >
                <Text>Reviews</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: SPACING * 2, flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    shadowColor: COLORS.dark,
                    shadowOffset: { width: SPACING / 2, height: SPACING },
                    shadowRadius: SPACING / 2,
                    shadowOpacity: 0.1,
                    padding: SPACING / 2,
                    borderRadius: SPACING / 2,
                    marginRight: SPACING,
                  }}
                >
                  <Ionicons
                    name="time"
                    size={SPACING * 3}
                    color={COLORS.primary}
                  />
                </View>
                <View style={{ marginRight: SPACING * 2 }}>
                  <Text
                    style={{
                      fontSize: SPACING + 1,
                      marginBottom: SPACING / 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Duration
                  </Text>
                  <Text style={{ fontSize: SPACING * 1.6, fontWeight: "700" }}>
                    {tour.duration}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    shadowColor: COLORS.dark,
                    shadowOffset: { width: SPACING / 2, height: SPACING },
                    shadowRadius: SPACING / 2,
                    shadowOpacity: 0.1,
                    padding: SPACING / 2,
                    borderRadius: SPACING / 2,
                    marginRight: SPACING,
                  }}
                >
                  <Ionicons
                    name="star"
                    size={SPACING * 3}
                    color={COLORS.primary}
                  />
                </View>
                <View style={{ marginRight: SPACING * 2 }}>
                  <Text
                    style={{
                      fontSize: SPACING + 1,
                      marginBottom: SPACING / 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Rating
                  </Text>
                  <Text style={{ fontSize: SPACING * 1.6, fontWeight: "700" }}>
                    {tour.rating} out of 5
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{ color: COLORS.dark }}>{tour.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{ position: "absolute", bottom: SPACING * 2, width: "100%" }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: SPACING * 1.5,
            marginHorizontal: SPACING * 1.6,
            borderRadius: SPACING * 2,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: SPACING * 2,
              fontWeight: "bold",
              marginRight: SPACING * 7,
              marginLeft: SPACING * 7,
            }}
          >
            Book Now
          </Text>
          <Ionicons
            name="arrow-forward"
            size={SPACING * 3}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TourDetailScreen;
