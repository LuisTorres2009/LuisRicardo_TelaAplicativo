import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [lembrar, setLembrar] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <View style={style.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={style.botaoVoltar} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={26} color="#6fc099ff" />
      </TouchableOpacity>

      <Text style={style.titulo}>Acesse</Text>
      <Text style={style.subtitulo}>com E-mail e senha</Text>

      {/* Campo E-mail */}
      <Text style={style.rotulo}>E-mail</Text>
      <TextInput
        style={style.campo}
        placeholder="Digite seu E-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo Senha */}
      <Text style={style.rotulo}>Senha</Text>
      <View style={style.containerSenha}>
        <TextInput
          style={style.campoSenha}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry={!senhaVisivel}
        />
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <Ionicons
            name={senhaVisivel ? "eye-off" : "eye"}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Opções */}
      <View style={style.linhaOpcoes}>
        <TouchableOpacity
          style={style.linhaLembrar}
          onPress={() => setLembrar(!lembrar)}
        >
          <View style={[style.caixaSelecao, lembrar && style.caixaSelecionada]}>
            {lembrar && <Ionicons name="checkmark" size={16} color="#ffff" />}
          </View>
          <Text style={style.textoLembrar}>Lembrar senha</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={style.textoEsqueci}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      {/* Botões */}
      <View style={style.linhaBotoes}>
        <TouchableOpacity style={style.botaoAcessar}>
          <Text style={style.textoAcessar}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botaoCadastrar}>
          <Text style={style.textoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Divisor */}
      <View style={style.divisor}>
        <View style={style.linha} />
        <Text style={style.textoOu}>Ou continue com</Text>
        <View style={style.linha} />
      </View>

      {/* Botões sociais */}
      <View style={style.containerSocial}>
        <TouchableOpacity style={style.botaoSocial}>
          <Image
            source={require("../../assets/Google1.png")}
            style={style.iconeSocial}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={style.botaoSocial}>
          <Image
            source={require("../../assets/Facebook.png")}
            style={style.iconeSocial}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },
  botaoVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 80,
    color: "#1c1c1c",
  },
  subtitulo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
  },
  rotulo: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    fontWeight: "500",
  },
  campo: {
    width: "100%",
    backgroundColor: "#f3f3f8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  containerSenha: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f8",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  campoSenha: {
    flex: 1,
    padding: 12,
    paddingHorizontal: 3,

  },
  linhaOpcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  linhaLembrar: {
    flexDirection: "row",
    alignItems: "center",
  },
  caixaSelecao: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: "#6fc099ff",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  caixaSelecionada: {
    backgroundColor: "#6fc099ff",
  },
  textoLembrar: {
    color: "#333",
    fontSize: 12,
  },
  textoEsqueci: {
    color: "#666",
    fontSize: 12,
  },
  linhaBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  botaoAcessar: {
    flex: 1,
    backgroundColor: "#6fc099ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 5,
  },
  textoAcessar: {
    color: "#fff",
    fontWeight: "bold",
  },
  botaoCadastrar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#6fc099ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 5,
  },
  textoCadastrar: {
    color: "#6fc099ff",
    fontWeight: "bold",
  },
  divisor: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  textoOu: {
    marginHorizontal: 10,
    color: "#555",
  },
  containerSocial: {
    flexDirection: "row",
    justifyContent: "center",
  },
  botaoSocial: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 10,
  },
  iconeSocial: {
    width: 30,
    height: 30,
  },
});
