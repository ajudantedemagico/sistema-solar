import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 1. Dados dos Planetas (Nossa "Base de Dados")
const PLANETAS = [
  {
    id: "1",
    nome: "Mercúrio",
    cor: "#A5A5A5",
    info: "O menor planeta e o mais próximo do Sol.",
    img: "https://flaticon.com",
  },
  {
    id: "2",
    nome: "Vênus",
    cor: "#E3BB76",
    info: "O planeta mais quente do sistema solar.",
    img: "https://flaticon.com",
  },
  {
    id: "3",
    nome: "Terra",
    cor: "#2271B3",
    info: "O único planeta conhecido com vida.",
    img: "https://flaticon.com",
  },
  {
    id: "4",
    nome: "Marte",
    cor: "#E27B58",
    info: "Conhecido como o Planeta Vermelho.",
    img: "https://flaticon.com",
  },
];

export default function SistemaSolar() {
  // 2. Estado para saber qual planeta está selecionado
  const [selecionado, setSelecionado] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explorador Espacial 🚀</Text>

      {/* 3. Área de Detalhes (Só aparece se clicar em um planeta) */}
      {selecionado ? (
        <View style={[styles.card, { borderColor: selecionado.cor }]}>
          <Image source={{ uri: selecionado.img }} style={styles.fotoGrande} />
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
              <Image source={{ uri: planeta.img }} style={styles.miniatura} />
              <Text style={styles.nomeItem}>{planeta.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0D17", padding: 20 },
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
    backgroundColor: "#1C1E2A",
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
