import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { fetchQuestionsByTag } from '../api/stackOverflowApi';

const ReactScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReactQuestions();
  }, []);

  const fetchReactQuestions = async () => {
    try {
      const data = await fetchQuestionsByTag('react');
      setQuestions(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching React questions:', error);
      setIsLoading(false);
    }
  };

  const openQuestionInBrowser = (url) => {
    Linking.openURL(url);
  };

  const renderQuestion = ({ item }) => (
    <TouchableOpacity onPress={() => openQuestionInBrowser(item.link)}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>{item.title}</Text>
        <Text style={styles.questionOwner}>Asked by: {item.owner.display_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={questions}
          renderItem={renderQuestion}
          keyExtractor={(item) => item.question_id.toString()}
          onEndReached={fetchReactQuestions} 
          onEndReachedThreshold={0.1}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  questionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionOwner: {
    fontSize: 14,
    color: '#666',
  },
});

export default ReactScreen;
