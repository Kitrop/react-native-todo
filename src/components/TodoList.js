import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit, onToggleCompleted }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleCompleted={onToggleCompleted}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TodoList;
