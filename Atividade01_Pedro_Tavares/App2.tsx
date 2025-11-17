import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './styles2';
import logo from './assets/logo.png';
import dados from './assets/Dados.png';
import faturas from './assets/Faturas.png';
import desbloqueio from './assets/Desbloqueio.png';
import planos from './assets/Planos.png';
import propaganda from './assets/Propaganda.png';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <AntDesign name="menu" size={18} color="white" style={{ paddingLeft: 8 }} />
                <Text style={styles.headerTitle}>Olá, nomeCliente</Text>
                <AntDesign name="reload" size={18} color="white" style={{ paddingRight: 8 }} />
            </View>

            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>

            <View style={styles.grid}>
                <TouchableOpacity>
                    <Image source={dados} style={styles.cardImage} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={faturas} style={styles.cardImage} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={desbloqueio} style={styles.cardImage} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={planos} style={styles.cardImage} />
                </TouchableOpacity>
            </View>

            <View style={styles.propagandaContainer}>
                <TouchableOpacity style={styles.propagandaButton}>
                    <Image source={propaganda} style={styles.propaganda} />
                </TouchableOpacity>
            </View>



        </View >
    );
}