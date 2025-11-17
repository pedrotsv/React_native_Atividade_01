import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
    },

    header: {
        width: "100%",
        backgroundColor: "#9B1C1C",
        paddingVertical: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    headerTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },

    logoContainer: {
        marginTop: 40,
        alignItems: "center",
    },

    logo: {
        width: 240,
        height: 120,
        resizeMode: "contain",
    },

    grid: {
        marginTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingLeft:30,
        paddingRight:30,
    },

    cardImage: {
        width: 155,
        height: 155,
        resizeMode: "contain",
        marginBottom: 20,
    },

    propagandaContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 40,
    },

    propagandaButton: {
        width: "90%",
    },

    propaganda: {
        width: "100%",
        resizeMode: "contain",
    },

});