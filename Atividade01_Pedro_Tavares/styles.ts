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

    inputArea: {
        marginTop: 20,
        marginHorizontal: 15,
    },

    label: {
        color: "#9B1C1C",
        fontWeight: "bold",
        marginBottom: 4,
    },

    input: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },

    loginButton: {
        backgroundColor: "#333",
        marginTop: 30,
        marginHorizontal: 15,
        paddingVertical: 14,
        borderRadius: 6,
        alignItems: "center",
    },
    loginText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    forgotText: {
        marginTop: 20,
        textAlign: "center",
        color: "#333",
        fontSize: 15,
    },

    footer: {
        position: "absolute",
        bottom: 25,
        width: "100%",
        alignItems: "center",
    },
    footerText: {
        color: "#9B1C1C",
        fontSize: 15,
    },
});