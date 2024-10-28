import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const TodoItem = ({ item, onDelete, onEdit, onToggleCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const handleSave = () => {
    onEdit(item.id, text);
    setIsEditing(false);
  };

  return (
    <View style={styles.todoItem}>
      {isEditing ? (
        <TextInput
          style={styles.todoTextInput}
          value={text}
          onChangeText={setText}
        />
      ) : (
        <Text
          style={[
            styles.todoText,
            item.completed ? styles.completedText : null,
          ]}
          onPress={() => onToggleCompleted(item.id)}
        >
          {item.text}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        {isEditing ? (
          <Button title="Сохранить" onPress={handleSave} />
        ) : (
          <Button title="Редактировать" onPress={() => setIsEditing(true)} />
        )}
        <Button title="Удалить" onPress={() => onDelete(item.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f8f9fa',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  todoTextInput: {
    flex: 1,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TodoItem;
