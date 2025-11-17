import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles';
import logo from './assets/logo.png';

export default function App() {


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Central do Assinante</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.label}>CPF/CNPJ:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF ou CNPJ"
        />
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Precisa de ajuda?</Text>
      </View>

    </View>
  );
}