import * as React from "react";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { Card, IconButton, Text, TextInput } from "react-native-paper";

interface PlayerI {
  name: string;
}

export default function Players({
  players,
  setPlayers,
}: {
  players: PlayerI[];
  setPlayers: (players: PlayerI[]) => void;
}) {
  const [name, setName] = useState("");

  function addPlayer() {
    if (!name) return;
    if (players.some((player: PlayerI) => player.name === name)) return;

    setPlayers([...players, { name }]);
  }

  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        paddingVertical: 10,
      }}
    >
      <FlatList
        style={{
          flex: 1,
        }}
        data={players}
        renderItem={({
          item: player,
          index,
        }: {
          item: PlayerI;
          index: number;
        }) => (
          <Card key={index} style={{ marginHorizontal: 10, marginVertical: 5 }}>
            <Card.Content>
              <Text>{player.name}</Text>
            </Card.Content>
          </Card>
        )}
      />

      <Card style={{ marginHorizontal: 10 }}>
        <Card.Content
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              flex: 1,
            }}
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={setName}
          />
          <IconButton icon="plus" onPress={addPlayer} size={40} />
        </Card.Content>
      </Card>
    </View>
  );
}