import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Quote } from "./Quote";

export class Quotes extends Component {
  render() {
    const { quotes, onNewQuote } = this.props;
    return (
      <ScrollView>
        {quotes.map(quote => (
          <Quote
            QuoteId={quote.id}
            QuoteText={quote.value}
            QuoteAuthor={quote.auth}
          />
        ))}
        <TouchableOpacity style={styles.button} onPress={onNewQuote}>
          <Text>Add New Quote</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 20,
    shadowOpacity: 0.35,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Quotes;
