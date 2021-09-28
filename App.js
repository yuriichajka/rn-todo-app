import React, { useState } from 'react';
import {StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Navbar } from './components/Navbar';
import { AddTodo } from './components/AddTodo';
import { Todo } from "./components/Todo";

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = title => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ])
    };

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    };

  return (
    <ScrollView>
        <Navbar title='Todo App'/>
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo}/>

            <FlatList
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}/>}
            />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
