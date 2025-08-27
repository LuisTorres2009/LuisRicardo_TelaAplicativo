import React from "react";
import { SafeAreaView, View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={style.area}>
      <View style={style.container}>
        {/* Imagem */}
        <Image
          source={require("../../assets/casual_dog.png")}
          style={style.ilustracaoCachorro}
          resizeMode="contain"
        />

        {/* Título */}
        <Text style={style.titulo}>Ótimo dia!</Text>

        {/* Subtítulo */}
        <Text style={style.subtitulo}>Como deseja acessar?</Text>

        {/* Botões */}
        <View style={style.botoes}>
          {/* Botão verde com Google */}
          <TouchableOpacity style={style.primario}>
            <Image
              source={require("../../assets/Google2.png")}
              style={style.icone}
              resizeMode="contain"
            />
            <Text style={style.textoPrimario}>Continuar com Google</Text>
          </TouchableOpacity>

          {/* Botão branco */}
          <TouchableOpacity
            style={style.secundario}
            onPress={() => navigation?.navigate?.("Login")}
          >
            <Text style={style.textoSecundario}>Outras opções</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: { flex: 1, backgroundColor: "#fff" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  ilustracaoCachorro: {
    width: 390,
    height: 400,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "black",
  },
  subtitulo: {
    fontSize: 13,
    marginBottom: 45,
    color: "black",
  },
  botoes: {
    width: "100%",
  },
  primario: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", 
    backgroundColor: "#6fc099ff",
    paddingVertical: 10,
    paddingHorizontal: 10, 
    borderRadius: 8,
    marginBottom: 12,
  },
  secundario: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#6fc099ff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  textoPrimario: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
    marginLeft: 55,
  },
  textoSecundario: {
    color: "black", 
    fontSize: 13,
  },
  icone: {
    width: 35,
    height: 35,
    marginRight: 8,
    borderRadius: 5,
  },
});
