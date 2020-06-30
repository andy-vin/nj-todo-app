const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

var TodoSerializer = new JSONAPISerializer('todos', {
  id: '_id',
  attributes: ['task', 'completed']
});

var TodoDeserializer = new JSONAPIDeserializer('todos', {
  id: '_id',
  attributes: ['task', 'completed']
});

module.exports = {
  TodoSerializer,
  TodoDeserializer
};