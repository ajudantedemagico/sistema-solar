import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Planeta = {
  id: string;
  nome: string;
  cor: string;
  info: string;
  img: ImageSourcePropType;
};

const PLANETAS: Planeta[] = [
  {
    id: "1",
    nome: "Mercúrio",
    cor: "#A5A5A5",
    info: "O menor planeta e o mais próximo do Sol.",
    img: require("../assets/images/2-mercurio.jpeg"),
  },
  {
    id: "2",
    nome: "Vênus",
    cor: "#E3BB76",
    info: "O planeta mais quente do sistema solar.",
    img: require("../assets/images/3-venus.jpeg"),
  },
  {
    id: "3",
    nome: "Terra",
    cor: "#2271B3",
    info: "O único planeta conhecido com vida.",
    img: require("../assets/images/4-terra.jpeg"),
  },
  {
    id: "4",
    nome: "Marte",
    cor: "#E27B58",
    info: "Conhecido como o Planeta Vermelho.",
    img: require("../assets/images/5-marte.jpeg"),
  },
  {
    id: "5",
    nome: "Júpiter",
    cor: "#dd9076",
    info: "O maior planeta do sistema solar.",
    img: require("../assets/images/6-jupiter.jpeg"),
  },
  {
    id: "6",
    nome: "Saturno",
    cor: "#f9c700",
    info: "Segundo maior planeta do sistema solar.",
    img: require("../assets/images/7-saturno.jpeg"),
  },
  {
    id: "7",
    nome: "Urano",
    cor: "#4FC3F7",
    info: "O planeta que gira de lado em relação ao Sol.",
    img: require("../assets/images/8-urano.jpeg"),
  },
  {
    id: "8",
    nome: "Netuno",
    cor: "#0288D1",
    info: "O planeta mais distante do Sol.",
    img: require("../assets/images/9-netuno.jpeg"),
  },
];

export default function SistemaSolar() {
  const [selecionado, setSelecionado] = useState<Planeta | null>(null);

  return (
    <ImageBackground
      source={require("../assets/images/background.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.header}> Sistema Solar</Text>

        {selecionado ? (
          <View style={[styles.card, { borderColor: selecionado.cor }]}> 
            <Image source={selecionado.img} style={styles.fotoGrande} />
            <Text style={styles.nomeGrande}>{selecionado.nome}</Text>
            <Text style={styles.descricao}>{selecionado.info}</Text>
            <TouchableOpacity
              style={styles.botaoVoltar}
              onPress={() => setSelecionado(null)}
            >
              <Text style={{ color: "#fff" }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* 4. Lista de Planetas */
          <ScrollView contentContainerStyle={styles.lista}>
            {PLANETAS.map((planeta) => (
              <TouchableOpacity
                key={planeta.id}
                style={styles.item}
                onPress={() => setSelecionado(planeta)}
              >
                <Image source={planeta.img} style={styles.miniatura} />
                <Text style={styles.nomeItem}>{planeta.nome}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  header: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
  lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  item: {
    width: "45%",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  miniatura: { width: 60, height: 60, marginBottom: 10 },
  nomeItem: { color: "#fff", fontWeight: "600" },
  card: {
    backgroundColor: "#1C1E2A",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 2,
  },
  fotoGrande: { width: 150, height: 150, marginBottom: 20 },
  nomeGrande: { fontSize: 28, color: "#fff", fontWeight: "bold" },
  descricao: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 15,
    fontSize: 16,
  },
  botaoVoltar: {
    marginTop: 25,
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 8,
  },
});
